class NavaContact extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized) return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <section class="nct-hero">
        <div class="nct-hero__grid"></div>
        <div class="nct-hero__glow"></div>

        
<div class="nct-container nct-hero__inner">

  <!-- LEFT: CONTENT -->
  <div class="nct-hero__content nct-reveal">
    <span class="nct-eyebrow nct-eyebrow--light">
      <span></span>
      CONTACT NAVA
    </span>

    <h1>
      Let's talk about
      <span>your business.</span>
    </h1>

    <p>
      Every business has different needs. Tell us a little
      about yours, and let's explore how accounting, tax,
      and advisory services can help you move forward.
    </p>

    <div class="nct-hero__highlights">
      <div class="nct-highlight">
        <span class="nct-highlight__icon">✓</span>
        <div>
          <strong>Business-focused</strong>
          <span>Services built around your needs</span>
        </div>
      </div>

      <div class="nct-highlight">
        <span class="nct-highlight__icon">↗</span>
        <div>
          <strong>Looking ahead</strong>
          <span>Clarity for your next decision</span>
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT: IMAGE -->
  <div class="nct-hero__visual nct-reveal">

    <div class="nct-hero__visual-glow nct-hero__visual-glow--green"></div>
    <div class="nct-hero__visual-glow nct-hero__visual-glow--gold"></div>
    <div class="nct-hero__visual-grid"></div>

    <div class="nct-hero-image-frame">
      <img
        class="nct-hero-image"
        src="/assets/img/laura nava y antonio.png"
        alt="NAVA Services Group helping business owners with accounting, taxes and financial strategy"
        fetchpriority="high"
      >

      <div class="nct-hero-image-overlay"></div>

      
    </div>

    

  </div>

</div>


        <div class="nct-hero__bottom">
          <span>ACCOUNTING</span>
          <i></i>
          <span>TAXES</span>
          <i></i>
          <span>STRATEGY</span>
        </div>
      </section>

      <section class="nct-contact-section">
        <div class="nct-container nct-contact-layout">

          <aside class="nct-contact-info nct-reveal">
            <span class="nct-eyebrow">
              <span></span>
              START A CONVERSATION
            </span>

            <h2>
              Your next step
              <span>starts with a conversation.</span>
            </h2>

            <p>
              Whether you need help organizing your books, preparing
              your taxes, or understanding your business finances,
              we're here to help you identify the right next step.
            </p>

            <div class="nct-info-divider"></div>

            <div class="nct-info-item">
              <div class="nct-info-item__icon">01</div>
              <div>
                <h3>Tell us about your needs</h3>
                <p>
                  Share what you're looking for and the challenges
                  you're working through.
                </p>
              </div>
            </div>

            <div class="nct-info-item">
              <div class="nct-info-item__icon">02</div>
              <div>
                <h3>Help us understand your business</h3>
                <p>
                  Provide the context we need to better understand
                  your request.
                </p>
              </div>
            </div>

            <div class="nct-info-item">
              <div class="nct-info-item__icon">03</div>
              <div>
                <h3>Explore the next step</h3>
                <p>
                  Our goal is to help you determine which services
                  may be appropriate for your situation.
                </p>
              </div>
            </div>

            <div class="nct-info-note">
              <span>✳</span>
              <p>
                Serving business owners since 1993.
                <strong>Together… Focused on a Better Future.</strong>
              </p>
            </div>
          </aside>

          <div class="nct-form-panel nct-reveal">
            <div class="nct-form-panel__heading">
              <span class="nct-form-panel__step">LET'S CONNECT</span>
              <h2>How can we help?</h2>
              <p>
                Tell us a little about your business and the services
                you're looking for. Our team will use your information
                to understand your inquiry.
              </p>
            </div>

            <div class="nct-bitrix-form"></div>

            <p class="nct-form__disclaimer">
              Submitting this form does not establish an accountant-client
              relationship or guarantee acceptance of your request.
            </p>
          </div>

        </div>
      </section>

      <section class="nct-bottom-cta">
        <div class="nct-container nct-bottom-cta__inner nct-reveal">
          <div>
            <span class="nct-eyebrow nct-eyebrow--light">
              <span></span>
              A BETTER WAY FORWARD
            </span>

            <h2>
              Clarity for today.
              <span>Confidence for what's next.</span>
            </h2>
          </div>

          <div class="nct-bottom-cta__mark">
  <img
    src="/assets/img/BLANCO-02.png"
    alt="NAVA Services Group"
    loading="lazy"
  >
</div>
        </div>
      </section>
    `;

    this.mountBitrixForm();
    this.setupRevealAnimations();
  }

  mountBitrixForm() {
    const container = this.querySelector(".nct-bitrix-form");

    if (!container || container.dataset.loaded === "true") return;

    container.dataset.loaded = "true";

    const embedScript = document.createElement("script");

    embedScript.setAttribute("data-b24-form", "inline/63/sg2p8b");
    embedScript.setAttribute(
      "data-b24-form-telemetry-sign",
      "v1:63:site.7349b8c5a8ffa9e43cdfd32e00bb166813240dbd4a3d948aa386e579b326ccd8",
    );
    embedScript.setAttribute("data-skip-moving", "true");

    embedScript.textContent = `
      (function(w,d,u){
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b35221911/crm/form/loader_63.js');
    `;

    container.appendChild(embedScript);
  }

  setupRevealAnimations() {
    const elements = this.querySelectorAll(".nct-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("nct-is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nct-is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
  }
}

if (!customElements.get("nava-contact")) {
  customElements.define("nava-contact", NavaContact);
}
