
class NavaWhy extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <section class="nava-why" aria-labelledby="nava-why-title">

        <div class="nava-why__container">

          <div class="nava-why__heading nava-why__animate">
            <span class="nava-why__eyebrow">WHY NAVA SERVICES</span>

            <h2 id="nava-why-title">
              Experience You Can Build On.
              <span>Focused on What's Next.</span>
            </h2>

            <p>
              Since 1993, we've helped business owners navigate accounting,
              taxes, and the financial decisions that shape their companies.
            </p>
          </div>

          <div class="nava-why__experience nava-why__animate">
            <div class="nava-why__experience-number">
              <span class="nava-why__plus">+</span>
              <span class="nava-why__count" data-target="30">30</span>
              <span class="nava-why__years">YEARS OF EXPERIENCE</span>
            </div>

            <div class="nava-why__experience-copy">
              <span class="nava-why__experience-label">ESTABLISHED IN 1993</span>
              <h3>Decades of experience. A forward-looking approach.</h3>
              <p>
                We go beyond reporting the numbers to help business owners
                understand their financial picture and prepare for what's next.
              </p>
            </div>
          </div>

          <div class="nava-why__grid">

            <article class="nava-why__card nava-why__animate">
              <div class="nava-why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <span class="nava-why__card-number">01</span>
              <h3>CPA-Led Expertise</h3>
              <p>
                Professional oversight with a strong focus on accuracy,
                financial clarity, and strategy.
              </p>
            </article>

            <article class="nava-why__card nava-why__animate">
              <div class="nava-why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                  <path d="M16.5 3.8 19 2.5"/>
                </svg>
              </div>
              <span class="nava-why__card-number">02</span>
              <h3>Proactive Advisory</h3>
              <p>
                We look beyond compliance to help you anticipate challenges
                and plan for future opportunities.
              </p>
            </article>

            <article class="nava-why__card nava-why__animate">
              <div class="nava-why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18"/>
                  <rect x="5" y="12" width="3" height="6" rx="1"/>
                  <rect x="10.5" y="8" width="3" height="10" rx="1"/>
                  <rect x="16" y="4" width="3" height="14" rx="1"/>
                  <path d="m5 9 5-4 4 1 5-4"/>
                </svg>
              </div>
              <span class="nava-why__card-number">03</span>
              <h3>Business-Focused</h3>
              <p>
                We understand how accounting and tax decisions affect
                your entire business.
              </p>
            </article>

            <article class="nava-why__card nava-why__animate">
              <div class="nava-why__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9"/>
                  <ellipse cx="12" cy="12" rx="4" ry="9"/>
                  <path d="M3 12h18M5 6.5h14M5 17.5h14"/>
                </svg>
              </div>
              <span class="nava-why__card-number">04</span>
              <h3>Nationwide Service</h3>
              <p>
                Supporting businesses throughout the United States
                with accounting, tax, and advisory services.
              </p>
            </article>

          </div>

          <div class="nava-why__footer nava-why__animate">
            <p>
              <span class="nava-why__footer-accent"></span>
              Experience that helps you move forward.
            </p>
            <a href="/about.html" class="nava-why__link">
              Get to Know Us <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>
    `;

    const animatedElements = this.querySelectorAll(
      ".nava-why__animate"
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

if (!customElements.get("nava-why")) {
  customElements.define("nava-why", NavaWhy);
}
