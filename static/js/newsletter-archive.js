(function () {
  var iframe = document.getElementById("cmp-NewsletterDetail__iframe");
  if (!iframe) return;

  var FALLBACK_MIN_HEIGHT = 540;
  var HEIGHT_MESSAGE = "isrg:newsletter-archive:height";
  var REQUEST_MESSAGE = "isrg:newsletter-archive:request-height";
  var hasIframeReporter = false;
  var resizeTimer = 0;

  function isFluidHeight(value) {
    return /(^|\s)(?:100(?:\.0+)?(?:%|vh)|100dvh|100svh|100lvh)\b/i.test(
      value || ""
    );
  }

  function hasFluidHeightDeclaration(text, property) {
    return new RegExp(
      "(^|;)\\s*" + property + "\\s*:\\s*100(?:\\.0+)?(?:%|vh|dvh|svh|lvh)",
      "i"
    ).test(text || "");
  }

  function normalizeElementHeight(element) {
    if (!element || !element.style) return;

    var styleText = element.getAttribute("style") || "";

    if (
      isFluidHeight(element.style.height) ||
      hasFluidHeightDeclaration(styleText, "height")
    ) {
      element.style.setProperty("height", "auto", "important");
    }

    if (
      isFluidHeight(element.style.minHeight) ||
      hasFluidHeightDeclaration(styleText, "min-height")
    ) {
      element.style.setProperty("min-height", "0", "important");
    }

    var heightAttr = element.getAttribute("height");
    if (heightAttr && /%|vh|dvh|svh|lvh/i.test(heightAttr)) {
      element.removeAttribute("height");
    }
  }

  function normalizeFluidHeights(doc) {
    normalizeElementHeight(doc.documentElement);
    normalizeElementHeight(doc.body);

    var elements = doc.querySelectorAll("[style*='height'],[height]");
    for (var i = 0; i < elements.length; i++) {
      normalizeElementHeight(elements[i]);
    }
  }

  function measureContentHeight(doc) {
    var body = doc.body;
    var docEl = doc.documentElement;
    if (!body && !docEl) return FALLBACK_MIN_HEIGHT;

    normalizeFluidHeights(doc);

    var height = Math.max(
      body ? body.scrollHeight : 0,
      body ? body.offsetHeight : 0,
      body ? body.clientHeight : 0,
      docEl ? docEl.offsetHeight : 0
    );

    if (docEl && docEl.getBoundingClientRect) {
      var docElRect = docEl.getBoundingClientRect();
      height = Math.max(height, docElRect.bottom);
    }

    if (body) {
      var scrollTop =
        (doc.defaultView && doc.defaultView.pageYOffset) ||
        (docEl && docEl.scrollTop) ||
        body.scrollTop ||
        0;
      var elements = body.querySelectorAll("*");

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (/^(SCRIPT|STYLE|TEMPLATE|META|LINK|TITLE|BASE)$/i.test(element.tagName)) {
          continue;
        }

        var rect = element.getBoundingClientRect();
        if (!rect || (!rect.width && !rect.height)) continue;

        var computed =
          doc.defaultView && doc.defaultView.getComputedStyle
            ? doc.defaultView.getComputedStyle(element)
            : null;
        if (computed && computed.display === "none") continue;

        height = Math.max(height, rect.bottom + scrollTop);
      }
    }

    return Math.max(Math.ceil(height), FALLBACK_MIN_HEIGHT);
  }

  function setIframeHeight(height) {
    height = Math.ceil(Number(height));
    if (!height || height < 1 || !isFinite(height)) return;

    iframe.style.minHeight = "0";
    iframe.style.height = height + "px";
    iframe.setAttribute("height", String(height));
  }

  function requestIframeHeight(reason) {
    try {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          { type: REQUEST_MESSAGE, reason: reason || null },
          "*"
        );
      }
    } catch (e) {}

    window.setTimeout(function () {
      if (!hasIframeReporter) {
        resizeIframeFallback(reason || "reporter-timeout");
      }
    }, 100);
  }

  function scheduleIframeHeightRequest(reason) {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      requestIframeHeight(reason || "scheduled");
    }, 50);
  }

  function resizeIframeFallback(reason) {
    try {
      var doc =
        iframe.contentDocument ||
        (iframe.contentWindow && iframe.contentWindow.document);
      if (!doc) return;
      setIframeHeight(measureContentHeight(doc));
    } catch (e) {
      // Keep the CSS fallback height if the iframe cannot be inspected.
    }
  }

  iframe.addEventListener("load", function () {
    hasIframeReporter = false;
    requestIframeHeight("iframe-load");

    try {
      var doc =
        iframe.contentDocument ||
        (iframe.contentWindow && iframe.contentWindow.document);
      if (!doc) return;

      if ("ResizeObserver" in window) {
        var observer = new ResizeObserver(function () {
          scheduleIframeHeightRequest("parent-resize-observer");
        });
        if (doc.body) observer.observe(doc.body);
        if (doc.documentElement) observer.observe(doc.documentElement);
      }

      Array.from(doc.images || []).forEach(function (img) {
        img.addEventListener("load", function () {
          scheduleIframeHeightRequest("parent-image-load");
        });
        img.addEventListener("error", function () {
          scheduleIframeHeightRequest("parent-image-error");
        });
      });

      if (doc.fonts && doc.fonts.ready) {
        doc.fonts.ready
          .then(function () {
            scheduleIframeHeightRequest("parent-fonts-ready");
          })
          .catch(function () {});
      }
    } catch (e) {}

    window.setTimeout(function () {
      requestIframeHeight("iframe-load-timeout-250");
    }, 250);
    window.setTimeout(function () {
      requestIframeHeight("iframe-load-timeout-1000");
    }, 1000);
    window.setTimeout(function () {
      requestIframeHeight("iframe-load-timeout-3000");
    }, 3000);
  });

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.type !== HEIGHT_MESSAGE) return;

    if (event.source !== iframe.contentWindow) return;

    hasIframeReporter = true;
    setIframeHeight(data.height);
  });

  window.addEventListener("resize", function () {
    scheduleIframeHeightRequest("window-resize");
  });

  requestIframeHeight("init");
  window.setTimeout(function () {
    requestIframeHeight("init-timeout-250");
  }, 250);
  window.setTimeout(function () {
    requestIframeHeight("init-timeout-1000");
  }, 1000);
  window.setTimeout(function () {
    requestIframeHeight("init-timeout-3000");
  }, 3000);

  var popout = document.getElementById("cmp-NewsletterDetail__popout");
  if (popout && iframe.srcdoc) {
    var blob = new Blob([iframe.srcdoc], { type: "text/html" });
    popout.href = URL.createObjectURL(blob);
  }
})();
