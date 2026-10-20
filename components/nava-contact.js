
class NavaContact extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized) return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <section class="nct-hero">
        <div class="nct-hero__grid"></div>
        <div class="nct-hero__glow"></div>

        <div class="nct-container nct-hero__inner">
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

          <div class="nct-hero__visual nct-reveal">
            <div class="nct-hero-art">
              <div class="nct-hero-art__ring nct-hero-art__ring--one"></div>
              <div class="nct-hero-art__ring nct-hero-art__ring--two"></div>

              <div class="nct-message-card">
                <div class="nct-message-card__top">
                  <div class="nct-message-card__logo">N</div>
                  <div>
                    <span>NAVA SERVICES GROUP</span>
                    <strong>Let's get started</strong>
                  </div>
                </div>

                <div class="nct-message-card__line"></div>
                <div class="nct-message-card__line nct-message-card__line--short"></div>

                <div class="nct-message-card__prompt">
                  <span class="nct-message-card__prompt-icon">✳</span>
                  <div>
                    <strong>What does your business need?</strong>
                    <p>
                      Accounting. Taxes. Strategy.
                    </p>
                  </div>
                </div>

                <div class="nct-message-card__bottom">
                  <span>YOUR NEXT CHAPTER STARTS HERE</span>
                  <span>↗</span>
                </div>
              </div>

              <div class="nct-art-note">
                <span class="nct-art-note__dot"></span>
                <span>Focused on your future</span>
              </div>
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
                Complete the form below to tell us about your needs.
                Fields marked with * are required.
              </p>
            </div>

            <form class="nct-form" novalidate>
              <div class="nct-form__grid">
                <div class="nct-field">
                  <label for="nct-name">Full name <span>*</span></label>
                  <input
                    id="nct-name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    placeholder="Your full name"
                    minlength="2"
                    maxlength="120"
                    required
                  >
                  <small class="nct-field__error" data-error="name"></small>
                </div>

                <div class="nct-field">
                  <label for="nct-email">Business email <span>*</span></label>
                  <input
                    id="nct-email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@company.com"
                    maxlength="254"
                    required
                  >
                  <small class="nct-field__error" data-error="email"></small>
                </div>

                <div class="nct-field">
                  <label for="nct-phone">Phone number</label>
                  <input
                    id="nct-phone"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="Your phone number"
                    maxlength="30"
                  >
                  <small class="nct-field__error" data-error="phone"></small>
                </div>

                <div class="nct-field">
                  <label for="nct-company">Business name</label>
                  <input
                    id="nct-company"
                    name="company"
                    type="text"
                    autocomplete="organization"
                    placeholder="Your company"
                    maxlength="160"
                  >
                </div>

                <div class="nct-field nct-field--full">
                  <label for="nct-service">What can we help you with? <span>*</span></label>
                  <select id="nct-service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="Accounting and monthly bookkeeping">
                      Accounting & Monthly Bookkeeping
                    </option>
                    <option value="Business tax preparation">
                      Business Tax Preparation
                    </option>
                    <option value="Individual tax preparation">
                      Individual Tax Preparation
                    </option>
                    <option value="Tax planning and estimated payments">
                      Tax Planning & Estimated Payments
                    </option>
                    <option value="Business financial advisory">
                      Business Financial Advisory
                    </option>
                    <option value="Multiple services">
                      Multiple Services
                    </option>
                    <option value="Other or not sure yet">
                      Other / Not Sure Yet
                    </option>
                  </select>
                  <small class="nct-field__error" data-error="service"></small>
                </div>

                <div class="nct-field nct-field--full">
                  <label for="nct-message">Tell us about your needs <span>*</span></label>
                  <textarea
                    id="nct-message"
                    name="message"
                    rows="5"
                    minlength="10"
                    maxlength="3000"
                    placeholder="What would you like help with?"
                    required
                  ></textarea>
                  <div class="nct-field__meta">
                    <small class="nct-field__error" data-error="message"></small>
                    <small class="nct-char-count">0 / 3000</small>
                  </div>
                </div>
              </div>

              <!-- Honeypot field for basic bot filtering -->
              <div class="nct-honeypot" aria-hidden="true">
                <label for="nct-website">Leave this field empty</label>
                <input
                  id="nct-website"
                  name="website"
                  type="text"
                  tabindex="-1"
                  autocomplete="off"
                >
              </div>

              <div class="nct-form__privacy">
                <span class="nct-form__privacy-icon">✓</span>
                <p>
                  Please do not include Social Security numbers,
                  tax identification numbers, account numbers,
                  passwords, or other sensitive financial information.
                </p>
              </div>

              <div
                class="nct-form__status"
                role="status"
                aria-live="polite"
                hidden
              ></div>

              <button class="nct-submit" type="submit">
                <span class="nct-submit__label">Submit Inquiry</span>
                <span class="nct-submit__arrow" aria-hidden="true">↗</span>
              </button>

              <p class="nct-form__disclaimer">
                Submitting this form does not establish an accountant-client
                relationship or guarantee acceptance of your request.
              </p>
            </form>
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

          <div class="nct-bottom-cta__mark" aria-hidden="true">N</div>
        </div>
      </section>
    `;

    this.setupForm();
    this.setupRevealAnimations();
  }

  setupForm() {
    const form = this.querySelector(".nct-form");
    const message = this.querySelector("#nct-message");
    const charCount = this.querySelector(".nct-char-count");
    const status = this.querySelector(".nct-form__status");

    // Keep this false until a real, secured CRM endpoint is configured.
    const CRM_ENDPOINT = "";

    message.addEventListener("input", () => {
      charCount.textContent = `${message.value.length} / 3000`;
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        const error = this.querySelector(
          `[data-error="${field.name}"]`
        );

        if (error) error.textContent = "";

        field.removeAttribute("aria-invalid");
      });

      field.addEventListener("change", () => {
        const error = this.querySelector(
          `[data-error="${field.name}"]`
        );

        if (error) error.textContent = "";

        field.removeAttribute("aria-invalid");
      });
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      status.hidden = true;
      status.className = "nct-form__status";

      const fields = [
        "name",
        "email",
        "phone",
        "company",
        "service",
        "message"
      ];

      fields.forEach((name) => {
        const error = this.querySelector(`[data-error="${name}"]`);
        if (error) error.textContent = "";
      });

      const honeypot = form.elements.namedItem("website");

      // Basic bot filtering. This is not a substitute for server-side protection.
      if (honeypot && honeypot.value.trim()) {
        status.textContent =
          "We couldn't process this submission. Please try again.";
        status.classList.add("nct-form__status--error");
        status.hidden = false;
        return;
      }

      let firstInvalid = null;

      fields.forEach((name) => {
        const field = form.elements.namedItem(name);
        if (!field || !["name", "email", "service", "message"].includes(name)) {
          return;
        }

        let errorText = "";

        if (!field.value.trim()) {
          errorText = "This field is required.";
        } else if (name === "name" && field.value.trim().length < 2) {
          errorText = "Please enter your full name.";
        } else if (name === "email" && !field.validity.valid) {
          errorText = "Please enter a valid email address.";
        } else if (name === "message" && field.value.trim().length < 10) {
          errorText = "Please provide a little more detail (at least 10 characters).";
        }

        if (errorText) {
          const error = this.querySelector(`[data-error="${name}"]`);
          if (error) error.textContent = errorText;

          field.setAttribute("aria-invalid", "true");
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // Do not claim that a lead was sent when no CRM endpoint exists.
      if (!CRM_ENDPOINT) {
        status.textContent =
          "The contact form is ready for review, but online submissions are not yet connected. Please contact the site administrator to finish the CRM integration before publishing this form.";
        status.classList.add("nct-form__status--warning");
        status.hidden = false;
        return;
      }

      const submitButton = form.querySelector(".nct-submit");
      const submitLabel = submitButton.querySelector(".nct-submit__label");

      const payload = {
        name: form.elements.namedItem("name").value.trim(),
        email: form.elements.namedItem("email").value.trim(),
        phone: form.elements.namedItem("phone").value.trim(),
        company: form.elements.namedItem("company").value.trim(),
        service: form.elements.namedItem("service").value,
        message: form.elements.namedItem("message").value.trim()
      };

      submitButton.disabled = true;
      submitLabel.textContent = "Submitting...";

      try {
        const response = await fetch(CRM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("CRM submission failed.");
        }

        status.textContent =
          "Thank you. Your inquiry has been submitted successfully.";
        status.classList.add("nct-form__status--success");
        status.hidden = false;

        form.reset();
        charCount.textContent = "0 / 3000";
      } catch (error) {
        status.textContent =
          "We couldn't submit your inquiry. Please try again later.";
        status.classList.add("nct-form__status--error");
        status.hidden = false;
      } finally {
        submitButton.disabled = false;
        submitLabel.textContent = "Submit Inquiry";
      }
    });
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
        rootMargin: "0px 0px -30px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));
  }
}

if (!customElements.get("nava-contact")) {
  customElements.define("nava-contact", NavaContact);
}
