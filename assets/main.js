(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btn = document.getElementById("themeBtn");
  const key = "fnovaiss-theme";
  const saved = localStorage.getItem(key);
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
  });
})();
