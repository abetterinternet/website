document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("newsletter-iframe");
  const fallback = document.getElementById("iframe-fallback");
  const siteKey = "abetterinternet";

  let hasResized = false;
  let iframeLoaded = false;

  // Show fallback if iframe doesn't communicate within 5 seconds
  const fallbackTimeout = setTimeout(function () {
    if (!iframeLoaded && fallback) {
      fallback.style.display = "block";
      iframe.style.minHeight = "0";
      iframe.style.height = "0";
    }
  }, 5000);

  window.addEventListener("message", function (e) {
    if (e.origin !== "https://outreach.abetterinternet.org") {
      return;
    }

    if (e.data && typeof e.data === "object") {
      iframeLoaded = true;
      clearTimeout(fallbackTimeout);

      // Hide fallback if it was shown
      if (fallback) {
        fallback.style.display = "none";
      }

      if (e.data.type === "resize" && e.data.height) {
        if (!hasResized) {
          hasResized = true;
          iframe.style.height = e.data.height + 20 + "px";
        }
      } else if (e.data.type === "requestKey") {
        iframe.contentWindow.postMessage({ type: "parentKey", key: siteKey }, "*");
      }
    }
  });
});
