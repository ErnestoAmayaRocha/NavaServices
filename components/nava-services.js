
class NavaServices extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <section class="nava-services" aria-labelledby="nava-services-title">

        <div class="nava-services__background" aria-hidden="true">
          <div class="nava-services__glow nava-services__glow--one"></div>
          <div class="nava-services__glow nava-services__glow--two"></div>
          <div class="nava-services__grid-pattern"></div>
          <div class="nava-services__orb"></div>
        </div>

        <div class="nava-services__container">

          <header class="nava-services__heading nava-services__animate">
            <span class="nava-services__eyebrow">OUR SERVICES</span>

            <h2 id="nava-services-title">More Than Accounting</h2>

            <p class="nava-services__intro">
              Your financial statements should do more than show you
              what already happened.
            </p>

            <p class="nava-services__description">
              We help you understand what your numbers mean, identify
              opportunities, anticipate challenges, and plan what comes next.
            </p>

            <div class="nava-services__statement">
              <span>Accounting gives you the numbers.</span>
              <strong>Advisory helps you use them.</strong>
            </div>
          </header>

          <div class="nava-services__grid">

            <article class="nava-services__card nava-services__animate">
              <div class="nava-services__card-top">
                <div class="nava-services__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="2"/>
                    <path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h8"/>
                  </svg>
                </div>
                <span class="nava-services__number">01</span>
              </div>

              <h3>Accounting</h3>

              <p class="nava-services__tagline">
                Reliable financial information throughout the year.
              </p>

              <ul class="nava-services__list">
                <li>Monthly bookkeeping</li>
                <li>Financial statements</li>
                <li>Business performance analysis</li>
              </ul>

              <a href="/services.html#accounting" class="nava-services__link">
                Explore Accounting <span aria-hidden="true">→</span>
              </a>
            </article>

            <article class="nava-services__card nava-services__card--featured nava-services__animate">
              <div class="nava-services__card-top">
                <div class="nava-services__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="15" rx="2"/>
                    <path d="M7 9h10M7 13h4"/>
                    <circle cx="16.5" cy="15.5" r="2.5"/>
                  </svg>
                </div>
                <span class="nava-services__number">02</span>
              </div>

              <h3>Tax Services</h3>

              <p class="nava-services__tagline">
                Strategic guidance before tax season arrives.
              </p>

              <ul class="nava-services__list">
                <li>Business tax preparation</li>
                <li>Individual tax preparation</li>
                <li>Tax planning</li>
                <li>Estimated tax payment strategies</li>
              </ul>

              <a href="/services.html#tax" class="nava-services__link">
                Explore Tax Services <span aria-hidden="true">→</span>
              </a>
            </article>

            <article class="nava-services__card nava-services__animate">
              <div class="nava-services__card-top">
                <div class="nava-services__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V9l7-6 7 6v12"/>
                    <path d="M9 21v-6h6v6M9 10h.01M15 10h.01"/>
                  </svg>
                </div>
                <span class="nava-services__number">03</span>
              </div>

              <h3>Advisory</h3>

              <p class="nava-services__tagline">
                Better information. Better decisions.
              </p>

              <ul class="nava-services__list">
                <li>Financial analysis</li>
                <li>Profitability reviews</li>
                <li>Business trends</li>
                <li>Strategic recommendations</li>
              </ul>

              <a href="/services.html#advisory" class="nava-services__link">
                Explore Advisory <span aria-hidden="true">→</span>
              </a>
            </article>

          </div>

          <div class="nava-services__bottom nava-services__animate">
            <p>Serving business owners since 1993.</p>

            <a href="/contact.html" class="nava-services__cta">
              Schedule a Consultation
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>
      </section>
    `;

    const animatedElements = this.querySelectorAll(
      ".nava-services__animate"
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
        threshold: 0.12,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
}

if (!customElements.get("nava-services")) {
  customElements.define("nava-services", NavaServices);
}
