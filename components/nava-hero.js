
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

          
<div class="nava-hero__visual nava-hero__visual--image">

  <!-- Decorative background details -->
  <div class="nava-hero__visual-glow nava-hero__visual-glow--green"></div>
  <div class="nava-hero__visual-glow nava-hero__visual-glow--gold"></div>
  <div class="nava-hero__visual-grid"></div>

  <!-- Main image -->
  <div class="nava-hero__image-frame">
    <img
      src="/assets/img/laura nava y antonio.png"
      alt="NAVA Services Group helping business owners plan their financial future"
      class="nava-hero__main-image"
      fetchpriority="high"
    >

    <div class="nava-hero__image-overlay"></div>

    

    
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
