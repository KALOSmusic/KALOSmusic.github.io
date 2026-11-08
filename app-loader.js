/* KALOS application bootstrap.
   All shared page markup lives in /site-shell.html.
   The route-specific index.html files keep only SEO metadata and this loader. */
(async function loadKalosApplication() {
  const mount = document.getElementById("kalos-app");
  if (!mount) return;

  function loadClassicScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Unable to load ${src}`));
      document.body.appendChild(script);
    });
  }

  try {
    const response = await fetch("/site-shell.html", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Shared site shell returned HTTP ${response.status}`);
    }

    mount.innerHTML = await response.text();
    mount.removeAttribute("aria-busy");
    document.body.dataset.view = "home";

    await loadClassicScript("/works-data.js");
    await loadClassicScript("/script.js");
  } catch (error) {
    console.error("KALOS application failed to initialize:", error);
    mount.setAttribute("role", "alert");
    mount.removeAttribute("aria-busy");
    mount.innerHTML = '<p class="app-loading app-loading--error">The KALOS website could not be loaded. Please refresh the page.</p>';
  }
})();
