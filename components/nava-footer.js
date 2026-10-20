
class NavaFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;
    this.dataset.initialized = "true";

    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="nava-footer">
        <div class="nava-footer__container">

          <div class="nava-footer__main">

            <!-- Brand -->
            <div class="nava-footer__brand">
              <a
                class="nava-footer__logo"
                href="/index.html"
                aria-label="NAVA Services Group Home"
              >
                <img
                  src="/assets/img/BLANCO-02.PNG"
                  alt="NAVA Services Group"
                  width="170"
                  height="56"
                  loading="lazy"
                >
              </a>

              <p class="nava-footer__description">
                Accounting. Taxes. Strategy.
              </p>

              <p class="nava-footer__tagline">
                Together… Focused on a Better Future.
              </p>

              <span class="nava-footer__since">
                Serving business owners since 1993
              </span>
            </div>

            <!-- Navigation -->
            <nav class="nava-footer__column" aria-label="Footer navigation">
              <h2>Explore</h2>
              <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="/services.html">Services</a></li>
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </nav>

            <!-- Services -->
            <div class="nava-footer__column">
              <h2>Our Services</h2>
              <ul>
                <li>
                  <a href="/services.html#accounting">Accounting</a>
                </li>
                <li>
                  <a href="/services.html#tax">Tax Services</a>
                </li>
                <li>
                  <a href="/services.html#advisory">Business Advisory</a>
                </li>
              </ul>
            </div>

            <!-- Contact -->
            <div class="nava-footer__column nava-footer__contact">
              <h2>Let's Connect</h2>
              <p>
                Have questions about your accounting, taxes, or business?
                We're here to help you determine the next step.
              </p>
              <a class="nava-footer__contact-link" href="/contact.html">
                Get in Touch
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </div>

          <div class="nava-footer__bottom">
            <p class="nava-footer__copyright">
              © ${currentYear} NAVA Services Group. All rights reserved.
            </p>

            <a class="nava-footer__back-top" href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>

        </div>
      </footer>
    `;
  }
}

if (!customElements.get("nava-footer")) {
  customElements.define("nava-footer", NavaFooter);
}
