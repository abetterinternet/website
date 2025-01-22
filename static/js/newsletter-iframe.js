document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("newsletter-iframe");
  const siteKey = "abetterinternet";

  let hasResized = false;

  window.addEventListener("message", function (e) {
    console.log("Message received from iframe:", e);

    if (e.origin !== "https://outreach.abetterinternet.org") {
      console.warn("Message received from untrusted origin:", e.origin);
      return;
    }

    if (e.data && typeof e.data === "object") {
      if (e.data.type === "resize" && e.data.height) {
        if (!hasResized) {
          hasResized = true;
          console.log(`Resizing iframe to height: ${e.data.height + 20}px`);
          iframe.style.height = e.data.height + 20 + "px";
        }
      } else if (e.data.type === "requestKey") {
        console.log(`Iframe requested a key. Sending key: ${siteKey}`);
        iframe.contentWindow.postMessage({ type: "parentKey", key: siteKey }, "*");
      }
    } else {
      console.warn("Invalid message format:", e.data);
    }
  });
});
