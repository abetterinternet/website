(function () {
  const iframe = document.getElementById("cmp-NewsletterDetail__iframe");

  if (!iframe) {
    return;
  }

  const resizeIframe = () => {
    try {
      const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);

      if (!doc) {
        return;
      }

      const bodyHeight = doc.body ? doc.body.scrollHeight : 0;
      const documentHeight = doc.documentElement ? doc.documentElement.scrollHeight : 0;
      const nextHeight = Math.max(bodyHeight, documentHeight, 540);

      iframe.style.height = `${nextHeight}px`;
    } catch (error) {
      // Ignore sizing errors and keep the min-height fallback.
    }
  };

  iframe.addEventListener("load", () => {
    resizeIframe();

    try {
      const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);

      if (!doc) {
        return;
      }

      if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(resizeIframe);

        if (doc.body) {
          observer.observe(doc.body);
        }

        if (doc.documentElement) {
          observer.observe(doc.documentElement);
        }
      }

      Array.from(doc.images || []).forEach((image) => {
        image.addEventListener("load", resizeIframe);
      });

      if (doc.fonts && doc.fonts.ready) {
        doc.fonts.ready.then(resizeIframe).catch(() => {});
      }
    } catch (error) {
      // Ignore sizing errors and keep the min-height fallback.
    }

    window.addEventListener("resize", resizeIframe);
    window.setTimeout(resizeIframe, 250);
    window.setTimeout(resizeIframe, 1000);
  });
})();
