class NavaServicesPage extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized) return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <!-- HERO -->
      <section class="nsp-hero">
        <div class="nsp-hero__grid"></div>
        <div class="nsp-hero__glow nsp-hero__glow--one"></div>
        <div class="nsp-hero__glow nsp-hero__glow--two"></div>

        <div class="nsp-container nsp-hero__layout">
          <div class="nsp-hero__content nsp-reveal">
            <span class="nsp-eyebrow nsp-eyebrow--light">
              <span class="nsp-eyebrow__line"></span>
              OUR SERVICES
            </span>

            <h1>
              Financial clarity.
              <span>Strategic direction.</span>
            </h1>

            <p class="nsp-hero__description">
              Accounting, tax, and advisory services designed to help
              business owners understand their numbers, plan ahead,
              and make more confident decisions.
            </p>

            <div class="nsp-hero__actions">
              <a class="nsp-button nsp-button--green" href="/contact.html">
                Schedule a Consultation
                <span aria-hidden="true">↗</span>
              </a>

              <a class="nsp-text-link nsp-text-link--light"
                 href="#accounting">
                Explore Our Services
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div class="nsp-hero__trust">
              <span class="nsp-hero__trust-icon">✓</span>
              <span>Serving business owners since 1993</span>
            </div>
          </div>

          <div class="nsp-hero-visual nsp-reveal">
            <div class="nsp-visual-orbit nsp-visual-orbit--outer"></div>
            <div class="nsp-visual-orbit nsp-visual-orbit--inner"></div>

            <div class="nsp-finance-card">
              <div class="nsp-finance-card__top">
                <div>
                  <span class="nsp-finance-card__label">
                    YOUR BUSINESS
                  </span>
                  <h2>Financial Overview</h2>
                </div>
                <span class="nsp-finance-card__status">
                  <span></span>
                  Planning ahead
                </span>
              </div>

              <div class="nsp-finance-card__metric">
                <span>Know your numbers.</span>
                <strong>Plan your next move.</strong>
              </div>

              <div class="nsp-chart">
                <div class="nsp-chart__guides">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <svg viewBox="0 0 440 180"
                     role="img"
                     aria-label="Illustration of a rising financial trend">
                  <defs>
                    <linearGradient id="nsp-chart-fill"
                      x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#69AD49"
                        stop-opacity=".3"/>
                      <stop offset="100%" stop-color="#69AD49"
                        stop-opacity="0"/>
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 148 C38 137 45 112 80 122
                    S127 141 164 94 S221 112 253 72
                    S310 89 345 45 S400 49 440 14
                    L440 180 L0 180 Z"
                    fill="url(#nsp-chart-fill)"
                  />

                  <path
                    d="M0 148 C38 137 45 112 80 122
                    S127 141 164 94 S221 112 253 72
                    S310 89 345 45 S400 49 440 14"
                    fill="none"
                    stroke="#69AD49"
                    stroke-width="4"
                    stroke-linecap="round"
                  />

                  <circle cx="345" cy="45" r="6" fill="#F5A900"/>
                  <circle cx="440" cy="14" r="6" fill="#69AD49"/>
                </svg>
              </div>

              <div class="nsp-finance-card__bottom">
                <span>
                  <i class="nsp-dot nsp-dot--green"></i>
                  Accounting
                </span>
                <span>
                  <i class="nsp-dot nsp-dot--yellow"></i>
                  Tax strategy
                </span>
                <span>
                  <i class="nsp-dot nsp-dot--white"></i>
                  Advisory
                </span>
              </div>
            </div>

            <div class="nsp-floating-note nsp-floating-note--top">
              <span class="nsp-floating-note__icon">↗</span>
              <div>
                <strong>See the bigger picture</strong>
                <span>Beyond the numbers</span>
              </div>
            </div>

            <div class="nsp-floating-note nsp-floating-note--bottom">
              <span class="nsp-floating-note__check">✓</span>
              <div>
                <strong>Make informed decisions</strong>
                <span>With greater confidence</span>
              </div>
            </div>
          </div>
        </div>

        <div class="nsp-hero__bottom">
          <span>ACCOUNTING</span>
          <span class="nsp-hero__bottom-line"></span>
          <span>TAXES</span>
          <span class="nsp-hero__bottom-line"></span>
          <span>STRATEGY</span>
        </div>
      </section>

      <!-- INTRO -->
      <section class="nsp-intro nsp-section">
        <div class="nsp-container nsp-intro__layout">
          <div class="nsp-intro__heading nsp-reveal">
            <span class="nsp-eyebrow">
              <span class="nsp-eyebrow__line"></span>
              HOW WE HELP
            </span>

            <h2>
              More than accounting.
              <span>Insight you can act on.</span>
            </h2>
          </div>

          <div class="nsp-intro__copy nsp-reveal">
            <p>
              Your financial statements should do more than show you
              what has already happened. They should help you understand
              what your numbers mean, identify opportunities, anticipate
              challenges, and plan what comes next.
            </p>

            <p>
              We bring accounting, tax, and advisory services together
              to help you see your business more clearly.
            </p>

            <div class="nsp-intro__signature">
              <span class="nsp-intro__signature-line"></span>
              <span>Accounting gives you the numbers. Advisory helps
                you use them.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ACCOUNTING -->
      <section class="nsp-service nsp-service--light"
               id="accounting">
        <div class="nsp-container nsp-service__layout">
          <div class="nsp-service__visual nsp-reveal">
            <div class="nsp-illustration nsp-illustration--accounting">
              <div class="nsp-illustration__backdrop"></div>

              <div class="nsp-document">
                <div class="nsp-document__header">
                  <span class="nsp-document__logo">N</span>
                  <span class="nsp-document__label">FINANCIAL REPORT</span>
                </div>

                <div class="nsp-document__title"></div>
                <div class="nsp-document__subtitle"></div>

                <div class="nsp-document__numbers">
                  <div>
                    <span>INCOME</span>
                    <i></i>
                    <i></i>
                  </div>
                  <div>
                    <span>EXPENSES</span>
                    <i></i>
                    <i></i>
                  </div>
                </div>

                <div class="nsp-document__bars">
                  <span style="height:38%"></span>
                  <span style="height:58%"></span>
                  <span style="height:47%"></span>
                  <span style="height:75%"></span>
                  <span style="height:63%"></span>
                  <span style="height:92%"></span>
                </div>
              </div>

              <div class="nsp-illustration__badge">
                <span>✓</span>
                Organized financials
              </div>

              <span class="nsp-illustration__spark nsp-illustration__spark--one">✳</span>
              <span class="nsp-illustration__spark nsp-illustration__spark--two">✳</span>
            </div>
          </div>

          <div class="nsp-service__content nsp-reveal">
            <span class="nsp-service__number">01 / ACCOUNTING</span>

            <span class="nsp-eyebrow">
              <span class="nsp-eyebrow__line"></span>
              ACCOUNTING SERVICES
            </span>

            <h2>
              Know where your
              <span>business stands.</span>
            </h2>

            <p class="nsp-service__description">
              Accurate, organized bookkeeping provides the foundation
              for better financial decisions. Understand your business
              performance with financial information you can use.
            </p>

            <h3>Monthly bookkeeping can include:</h3>

            <ul class="nsp-check-list">
              <li>Recording financial transactions</li>
              <li>Bank and credit card reconciliations</li>
              <li>Monthly financial statements</li>
              <li>Profit and loss statements</li>
              <li>Balance sheet review</li>
              <li>Account reconciliation and financial reporting</li>
            </ul>

            <a class="nsp-button nsp-button--navy"
               href="/contact.html">
              Discuss Your Accounting Needs
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <!-- TAX -->
      <section class="nsp-service nsp-service--navy" id="tax">
        <div class="nsp-service__pattern"></div>

        <div class="nsp-container nsp-service__layout nsp-service__layout--reverse">
          <div class="nsp-service__visual nsp-reveal">
            <div class="nsp-illustration nsp-illustration--tax">
              <div class="nsp-tax-orbit nsp-tax-orbit--one"></div>
              <div class="nsp-tax-orbit nsp-tax-orbit--two"></div>

              <div class="nsp-tax-card">
                <div class="nsp-tax-card__top">
                  <span class="nsp-tax-card__symbol">$</span>
                  <span class="nsp-tax-card__tag">TAX PLANNING</span>
                </div>

                <div class="nsp-tax-card__title">
                  Plan with purpose.
                </div>

                <div class="nsp-tax-card__line"></div>
                <div class="nsp-tax-card__line nsp-tax-card__line--short"></div>

                <div class="nsp-tax-card__steps">
                  <span><i>1</i> Prepare</span>
                  <span><i>2</i> Review</span>
                  <span><i>3</i> Plan ahead</span>
                </div>
              </div>

              <div class="nsp-tax-stamp">
                <span>✓</span>
                <strong>Strategic</strong>
                <small>Perspective</small>
              </div>
            </div>
          </div>

          <div class="nsp-service__content nsp-reveal">
            <span class="nsp-service__number">02 / TAX SERVICES</span>

            <span class="nsp-eyebrow nsp-eyebrow--light">
              <span class="nsp-eyebrow__line"></span>
              TAX PREPARATION & PLANNING
            </span>

            <h2>
              Prepare for tax season.
              <span>Plan beyond it.</span>
            </h2>

            <p class="nsp-service__description">
              Tax services should be about more than completing forms.
              We take a strategic perspective to help you understand
              your tax obligations and consider how today's decisions
              may affect tomorrow.
            </p>

            <h3>Business tax preparation</h3>

            <ul class="nsp-check-list nsp-check-list--light">
              <li>Federal and state business tax returns</li>
              <li>S corporations and C corporations</li>
              <li>Partnerships and LLCs</li>
              <li>Sole proprietorships</li>
              <li>Review of tax considerations affecting your business</li>
            </ul>

            <div class="nsp-tax-planning">
              <span class="nsp-tax-planning__icon">↗</span>
              <div>
                <h3>Tax planning and estimated payments</h3>
                <p>
                  Consider estimated tax projections, tax planning
                  strategies, and financial factors that can influence
                  future tax obligations.
                </p>
              </div>
            </div>

            <a class="nsp-button nsp-button--green"
               href="/contact.html">
              Discuss Your Tax Needs
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ADVISORY -->
      <section class="nsp-service nsp-service--light"
               id="advisory">
        <div class="nsp-container nsp-service__layout">
          <div class="nsp-service__visual nsp-reveal">
            <div class="nsp-illustration nsp-illustration--advisory">
              <div class="nsp-advisory-circle nsp-advisory-circle--one"></div>
              <div class="nsp-advisory-circle nsp-advisory-circle--two"></div>

              <div class="nsp-advisory-board">
                <span class="nsp-advisory-board__label">
                  BUSINESS INSIGHTS
                </span>

                <h3>From information<br>to direction.</h3>

                <div class="nsp-advisory-board__metric">
                  <div class="nsp-advisory-board__icon">↗</div>
                  <div>
                    <span>Understand</span>
                    <strong>Your financial position</strong>
                  </div>
                </div>

                <div class="nsp-advisory-board__metric">
                  <div class="nsp-advisory-board__icon nsp-advisory-board__icon--yellow">◎</div>
                  <div>
                    <span>Identify</span>
                    <strong>Areas of opportunity</strong>
                  </div>
                </div>

                <div class="nsp-advisory-board__metric">
                  <div class="nsp-advisory-board__icon">⌁</div>
                  <div>
                    <span>Plan</span>
                    <strong>Your next steps</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nsp-service__content nsp-reveal">
            <span class="nsp-service__number">03 / BUSINESS ADVISORY</span>

            <span class="nsp-eyebrow">
              <span class="nsp-eyebrow__line"></span>
              ADVISORY SERVICES
            </span>

            <h2>
              Turn financial information
              <span>into better decisions.</span>
            </h2>

            <p class="nsp-service__description">
              Understanding your financial statements is only the
              beginning. Advisory services help you interpret your
              numbers, recognize trends, and evaluate opportunities
              to move your business forward.
            </p>

            <h3>Our advisory approach can include:</h3>

            <ul class="nsp-check-list">
              <li>Financial analysis and performance reviews</li>
              <li>Profitability review</li>
              <li>Identification of business trends</li>
              <li>Review of financial results and key indicators</li>
              <li>Strategic recommendations for business decisions</li>
              <li>Support for forward-looking financial planning</li>
            </ul>

            <a class="nsp-button nsp-button--navy"
               href="/contact.html">
              Explore Advisory Services
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <!-- PROCESS -->
      <section class="nsp-process nsp-section">
        <div class="nsp-container">
          <div class="nsp-section-heading nsp-reveal">
            <span class="nsp-eyebrow">
              <span class="nsp-eyebrow__line"></span>
              A CLEARER WAY FORWARD
            </span>

            <h2>
              Understand your numbers.
              <span>Move forward with confidence.</span>
            </h2>

            <p>
              A stronger financial picture starts with understanding
              where you are and deciding where you want to go.
            </p>
          </div>

          <div class="nsp-process__grid">
            <article class="nsp-process-card nsp-reveal">
              <span class="nsp-process-card__number">01</span>
              <div class="nsp-process-card__icon">◎</div>
              <h3>Understand</h3>
              <p>
                Get a clearer picture of your accounting, taxes,
                and financial position.
              </p>
            </article>

            <article class="nsp-process-card nsp-reveal">
              <span class="nsp-process-card__number">02</span>
              <div class="nsp-process-card__icon">⌁</div>
              <h3>Evaluate</h3>
              <p>
                Review financial results, recognize trends,
                and identify areas that deserve attention.
              </p>
            </article>

            <article class="nsp-process-card nsp-reveal">
              <span class="nsp-process-card__number">03</span>
              <div class="nsp-process-card__icon">↗</div>
              <h3>Plan Ahead</h3>
              <p>
                Use meaningful financial insights to inform
                your next business decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="nsp-final-cta">
        <div class="nsp-final-cta__glow"></div>

        <div class="nsp-container nsp-final-cta__inner nsp-reveal">
          <div class="nsp-final-cta__content">
            <span class="nsp-eyebrow nsp-eyebrow--light">
              <span class="nsp-eyebrow__line"></span>
              LET'S TALK
            </span>

            <h2>
              Your business deserves
              <span>more than reports.</span>
            </h2>

            <p>
              Get greater clarity around your accounting, taxes,
              and financial decisions. Let's talk about what your
              business needs next.
            </p>

            <a class="nsp-button nsp-button--green"
               href="/contact.html">
              Schedule a Consultation
              <span aria-hidden="true">↗</span>
            </a>
          </div>

         <div class="nsp-final-cta__mark">
  <img
    src="/assets/img/BLANCO-02.png"
    alt="NAVA Services Group"
    loading="lazy"
  >
</div>
        </div>

        <div class="nsp-final-cta__tagline">
          Together… Focused on a Better Future.
        </div>
      </section>
    `;

    this.setupRevealAnimations();
  }

  setupRevealAnimations() {
    const elements = this.querySelectorAll(".nsp-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("nsp-is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nsp-is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
  }
}

if (!customElements.get("nava-services-page")) {
  customElements.define("nava-services-page", NavaServicesPage);
}
