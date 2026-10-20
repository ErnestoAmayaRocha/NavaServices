
class NavaCta extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <section class="nava-cta" aria-labelledby="nava-cta-title">

        <div class="nava-cta__background" aria-hidden="true">
          <div class="nava-cta__glow nava-cta__glow--one"></div>
          <div class="nava-cta__glow nava-cta__glow--two"></div>
          <div class="nava-cta__pattern"></div>
          <div class="nava-cta__circle"></div>
        </div>

        <div class="nava-cta__container">

          <div class="nava-cta__content nava-cta__animate">

            <span class="nava-cta__eyebrow">
              LET'S MOVE FORWARD TOGETHER
            </span>

            <h2 id="nava-cta-title">
              Your Business Deserves
              <span>More Than Reports.</span>
            </h2>

            <p class="nava-cta__description">
              Gain greater clarity around your accounting, taxes,
              and financial decisions.
            </p>

            <a href="/contact.html" class="nava-cta__button">
              Schedule a Consultation
              <span aria-hidden="true">↗</span>
            </a>

            <div class="nava-cta__trust">
              <span class="nava-cta__trust-line"></span>
              <span>Serving business owners since 1993</span>
            </div>

          </div>

          <div class="nava-cta__visual nava-cta__animate" aria-hidden="true">

            <div class="nava-cta__visual-ring nava-cta__visual-ring--outer"></div>
            <div class="nava-cta__visual-ring nava-cta__visual-ring--inner"></div>

            <div class="nava-cta__visual-center">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M8 52h48"/>
                <path d="M14 44V32h9v12"/>
                <path d="M28 44V22h9v22"/>
                <path d="M42 44V12h9v32"/>
                <path d="m12 25 15-10 12 3 14-12"/>
                <path d="M43 6h10v10"/>
              </svg>
            </div>

            <div class="nava-cta__floating-label nava-cta__floating-label--top">
              <span class="nava-cta__status-dot"></span>
              <span>Clarity. Strategy. Growth.</span>
            </div>

            <div class="nava-cta__floating-label nava-cta__floating-label--bottom">
              <span class="nava-cta__mini-icon">✓</span>
              <span>Focused on your future</span>
            </div>

          </div>

          <div class="nava-cta__tagline nava-cta__animate">
            <span class="nava-cta__tagline-line"></span>
            <p>Together… Focused on a Better Future.</p>
            <span class="nava-cta__tagline-line"></span>
          </div>

        </div>
      </section>
    `;

    const animatedElements = this.querySelectorAll(
      ".nava-cta__animate"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      animatedElements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
}

if (!customElements.get("nava-cta")) {
  customElements.define("nava-cta", NavaCta);
}
