(function () {
  var HEIGHT_MESSAGE = "isrg:newsletter-archive:height";
  var REQUEST_MESSAGE = "isrg:newsletter-archive:request-height";
  var debounceTimer = 0;

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

  function normalizeFluidHeights() {
    normalizeElementHeight(document.documentElement);
    normalizeElementHeight(document.body);

    var elements = document.querySelectorAll("[style*='height'],[height]");
    for (var i = 0; i < elements.length; i++) {
      normalizeElementHeight(elements[i]);
    }
  }

  function getContentHeight() {
    normalizeFluidHeights();

    var docEl = document.documentElement;
    var body = document.body;
    var height = 0;

    if (body) {
      height = Math.max(
        height,
        body.scrollHeight,
        body.offsetHeight,
        body.clientHeight
      );
    }

    if (docEl) {
      var docElRect = docEl.getBoundingClientRect();
      height = Math.max(height, docEl.offsetHeight);
      if (docElRect) height = Math.max(height, docElRect.bottom);
    }

    if (body) {
      var scrollTop =
        window.pageYOffset ||
        (docEl && docEl.scrollTop) ||
        (body && body.scrollTop) ||
        0;
      var elements = body.querySelectorAll("*");

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var tag = element.tagName;
        if (/^(SCRIPT|STYLE|TEMPLATE|META|LINK|TITLE|BASE)$/i.test(tag)) {
          continue;
        }

        var rect = element.getBoundingClientRect();
        if (!rect || (!rect.width && !rect.height)) continue;

        var computed = window.getComputedStyle
          ? window.getComputedStyle(element)
          : null;
        if (computed && computed.display === "none") continue;

        height = Math.max(height, rect.bottom + scrollTop);
      }
    }

    return Math.ceil(height);
  }

  function reportHeight(reason) {
    var payload = {
      type: HEIGHT_MESSAGE,
      reason: reason || null,
      height: getContentHeight(),
    };

    if (payload.height > 0 && window.parent && window.parent !== window) {
      window.parent.postMessage(payload, "*");
    }
  }

  function requestReport(delay, reason) {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(function () {
      reportHeight(reason || "debounced");
    }, delay || 0);
  }

  function reportLater(delay, reason) {
    window.setTimeout(function () {
      reportHeight(reason || "timeout");
    }, delay || 0);
  }

  function watchImages() {
    var images = document.images || [];
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("load", function () {
        requestReport(50, "image-load");
      });
      images[i].addEventListener("error", function () {
        requestReport(50, "image-error");
      });
    }
  }

  function start() {
    normalizeFluidHeights();
    watchImages();

    if ("ResizeObserver" in window) {
      var observer = new ResizeObserver(function () {
        requestReport(50, "resize-observer");
      });
      if (document.documentElement) observer.observe(document.documentElement);
      if (document.body) observer.observe(document.body);

      var containers = document.querySelectorAll(
        "#bodyTable,#bodyCell,#templateContainer"
      );
      for (var i = 0; i < containers.length; i++) {
        observer.observe(containers[i]);
      }
    }

    if ("MutationObserver" in window && document.body) {
      new MutationObserver(function () {
        requestReport(50, "mutation-observer");
      }).observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class", "width", "height", "src"],
      });
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(function () {
          requestReport(50, "fonts-ready");
        })
        .catch(function () {});
    }

    document.addEventListener(
      "load",
      function (event) {
        if (event.target && event.target.tagName === "IMG") {
          requestReport(50, "captured-image-load");
        }
      },
      true
    );

    reportLater(0, "start-0");
    reportLater(50, "start-50");
    reportLater(250, "start-250");
    reportLater(1000, "start-1000");
    reportLater(3000, "start-3000");
    reportLater(6000, "start-6000");
  }

  window.addEventListener("resize", function () {
    requestReport(50, "window-resize");
  });

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (data && data.type === REQUEST_MESSAGE) {
      requestReport(0, data.reason || "parent-request");
    }
  });

  window.addEventListener("load", function () {
    requestReport(50, "window-load");
    reportLater(500, "window-load-500");
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
