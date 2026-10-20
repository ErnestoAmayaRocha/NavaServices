class NavaHeader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.rendered === "true") return;
    this.dataset.rendered = "true";

    this.innerHTML = `
      <header class="nava-header">
        <div class="nava-header__inner">

          <a class="nava-brand" href="/index.html" aria-label="NAVA Services Group">
           <img
  src="https://www.navaservices.com/assets/img/IMAGE-LOGO-NSG.webp"
  alt="NAVA Services Group Logo"
  width="170"
  height="56"
>
          </a>

          <button
            class="nava-menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="nava-nav" aria-label="Main navigation">
            <a class="nava-nav__link" href="/index.html" data-page="home">
              Home
            </a>

            <a class="nava-nav__link" href="/about.html" data-page="about">
              About Us
            </a>

            <a class="nava-nav__link" href="/services.html" data-page="services">
              Services
            </a>

            <a class="nava-nav__cta" href="/contact.html" data-page="contact">
              Contact Us <span aria-hidden="true">↗</span>
            </a>

            <div class="nava-language">
              <div class="gtranslate_wrapper"></div>
            </div>
          </nav>

        </div>
      </header>
    `;

    // Menú móvil
    const toggle = this.querySelector(".nava-menu-toggle");
    const nav = this.querySelector(".nava-nav");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });

    // Marcar la página actual
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

    this.querySelectorAll(".nava-nav__link, .nava-nav__cta").forEach((link) => {
      const linkPath = new URL(link.href).pathname.replace(/\/+$/, "") || "/";

      const isHome =
        link.dataset.page === "home" &&
        (currentPath === "/" || currentPath.endsWith("/index.html"));

      if (linkPath === currentPath || isHome) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
}

if (!customElements.get("nava-header")) {
  customElements.define("nava-header", NavaHeader);
}
