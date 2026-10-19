
class NavaHero extends HTMLElement {
  connectedCallback() {
    if (this.dataset.rendered === "true") return;
    this.dataset.rendered = "true";

    this.innerHTML = `
      <section class="nava-hero">
        <div class="nava-hero__container">

          <div class="nava-hero__content">
            <span class="nava-hero__eyebrow">
              <span class="nava-hero__eyebrow-dot"></span>
              ACCOUNTING · TAX · BUSINESS ADVISORY
            </span>

            <h1>
              Clarity for your finances.
              <span>Confidence for your future.</span>
            </h1>

            <p class="nava-hero__description">
              Professional financial solutions designed to help individuals
              and businesses make informed decisions, stay organized, and
              grow with confidence.
            </p>

            <div class="nava-hero__actions">
              <a href="/contact.html" class="nava-hero__button nava-hero__button--primary">
                Schedule a Consultation
                <span aria-hidden="true">↗</span>
              </a>

              <a href="/services.html" class="nava-hero__button nava-hero__button--secondary">
                Explore Our Services
              </a>
            </div>

            <div class="nava-hero__trust">
              <span class="nava-hero__trust-icon" aria-hidden="true">✓</span>
              <p>Personalized support. Clear financial guidance.</p>
            </div>
          </div>

          <div class="nava-hero__visual" aria-label="Financial planning illustration">
            <div class="nava-hero__decor nava-hero__decor--one"></div>
            <div class="nava-hero__decor nava-hero__decor--two"></div>

            <div class="nava-finance-card">
              <div class="nava-finance-card__header">
                <div>
                  <span class="nava-finance-card__label">FINANCIAL OVERVIEW</span>
                  <h2>Plan with confidence</h2>
                </div>
                <span class="nava-finance-card__icon" aria-hidden="true">↗</span>
              </div>

              <div class="nava-finance-card__chart">
                <div class="nava-chart__grid">
                  <span></span><span></span><span></span><span></span>
                </div>

                <svg viewBox="0 0 420 170" role="img"
                  aria-label="Illustrative upward financial trend"
                  xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="navaChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#69AD49" stop-opacity=".24"/>
                      <stop offset="100%" stop-color="#69AD49" stop-opacity="0"/>
                    </linearGradient>
                  </defs>

                  <path d="M10 140 L65 120 L115 130 L170 88 L225 100 L280 58 L335 67 L410 20 L410 160 L10 160 Z"
                    fill="url(#navaChartFill)"/>

                  <path d="M10 140 L65 120 L115 130 L170 88 L225 100 L280 58 L335 67 L410 20"
                    fill="none" stroke="#69AD49" stroke-width="4"
                    stroke-linecap="round" stroke-linejoin="round"/>

                  <circle cx="410" cy="20" r="6" fill="#69AD49"/>
                  <circle cx="410" cy="20" r="11" fill="#69AD49" opacity=".15"/>
                </svg>
              </div>

              <div class="nava-finance-card__footer">
                <div class="nava-finance-stat">
                  <span class="nava-finance-stat__dot"></span>
                  <div>
                    <strong>Better decisions</strong>
                    <span>Built on financial clarity</span>
                  </div>
                </div>

                <div class="nava-finance-card__badge">Your goals, in focus</div>
              </div>
            </div>

            <div class="nava-hero__floating">
              <span class="nava-hero__floating-icon" aria-hidden="true">✓</span>
              <div>
                <strong>Financial clarity</strong>
                <span>One step at a time</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

if (!customElements.get("nava-hero")) {
  customElements.define("nava-hero", NavaHero);
}
