(() => {
  const page = document.querySelector(".donate-page");
  if (!page) return;

  const tablist = page.querySelector(".donate-tabs");
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  let givingBlockStarted = false;

  function loadGivingBlock() {
    if (givingBlockStarted) return;
    givingBlockStarted = true;

    // The same ISRG organization widget used on the Let's Encrypt donation page.
    window.widgetOptions = {
      id: "1189132012",
      apiUserUuid: "e6cf7d18-41b6-4a6c-954a-338578fd90b0",
      domain: "https://widget.thegivingblock.com",
      scriptId: "isrg-giving-block-script",
      uiVersion: "2",
      iframeTitle: "Donate to Internet Security Research Group via The Giving Block",
    };
    const script = document.createElement("script");
    script.id = "isrg-giving-block-script";
    script.src = "https://widget.thegivingblock.com/widget/script.js";
    script.async = true;
    document.getElementById("giving-block-form").appendChild(script);
  }

  function selectTab(selected, focus = false) {
    tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      panel.hidden = !active;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
      panel.removeAttribute("aria-label");
      panel.tabIndex = 0;
    });
    if (selected.id === "donate-tab-other") loadGivingBlock();
    if (focus) selected.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next], true);
    });
  });

  page.querySelector(".donate-no-script-heading").hidden = true;
  selectTab(tabs[0]);
  tablist.hidden = false;

  function openLinkedOption() {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    const option = target && target.closest(".donate-option");
    if (!option) return;
    option.open = true;
    option.scrollIntoView({ block: "start" });
  }

  window.addEventListener("hashchange", openLinkedOption);
  openLinkedOption();
})();
