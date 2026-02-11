(function () {
  // year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // theme toggle with localStorage
  const btn = document.getElementById("themeBtn");
  const key = "fnovaiss-theme";
  const saved = localStorage.getItem(key);

  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function refreshIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    if (btn) btn.textContent = theme === "light" ? "☀" : "☾";
  }
  refreshIcon();

  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(key, next);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(key, "");
    }
    refreshIcon();
  });

  // email button (avoid visible email on page)
  function setEmail(btnId) {
    const el = document.getElementById(btnId);
    if (!el) return;

    // Primary email (not shown on page; only used on click)
    const user = "f.novaisss";
    const domain = "gmail.com";

    const subject = encodeURIComponent("Contato via Portfólio (GitHub Pages)");
    const body = encodeURIComponent(
      "Olá Flavio!\n\nVi seu portfólio no GitHub Pages e gostaria de conversar sobre oportunidades.\n\nObrigado!"
    );

    el.setAttribute("href", `mailto:${user}@${domain}?subject=${subject}&body=${body}`);
  }

  setEmail("emailBtn");
  setEmail("emailBtn2");
})();
