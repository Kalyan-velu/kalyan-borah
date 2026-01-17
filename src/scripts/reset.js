(() => {
  if (typeof window === "undefined") {
    return;
  }
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches),
  );
})();
