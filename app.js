function showTab(tabId) {
  document.querySelectorAll(".tool").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(tabId).classList.remove("hidden");
}
