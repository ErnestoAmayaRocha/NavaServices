
class NavaAbout extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;
    this.dataset.initialized = "true";

    this.innerHTML = `
      <!-- HERO -->
      <section class="nava-about__hero">
        <div class="nava-about__hero-bg" aria-hidden="true">
          <div class="nava-about__glow"></div>
          <div class="nava-about__grid-pattern"></div>
          <div class="nava-about__hero-orb"></div>
        </div>

        <div class="nava-about__container nava-about__hero-content nava-about__animate">
          <span class="nava-about__eyebrow">
            ABOUT NAVA SERVICES GROUP
          </span>

          <h1>
            Built on Experience.
            <span>Focused on What's Next.</span>
          </h1>

          <p>
            Since 1993, Nava Services has helped business owners navigate
            accounting, taxes, and the financial decisions that shape their
            companies.
          </p>

          <a href="/contact.html" class="nava-about__button">
            Let's Talk About Your Business
            <span aria-hidden="true">↗</span>
          </a>

          <div class="nava-about__hero-note">
            <span></span>
            More than three decades of experience
          </div>
        </div>
      </section>

      <!-- OUR EXPERIENCE -->
      <section class="nava-about__experience">
        <div class="nava-about__container nava-about__experience-grid">

          <div class="nava-about__experience-copy nava-about__animate">
            <span class="nava-about__eyebrow nava-about__eyebrow--light">
              OUR EXPERIENCE
            </span>

            <h2>
              A Legacy of Experience.
              <span>A Focus on Your Future.</span>
            </h2>

            <p>
              Since 1993, we have worked with business owners to help them
              understand their finances, navigate tax responsibilities,
              and make more informed decisions.
            </p>

            <p>
              Our approach goes beyond traditional accounting. We believe
              financial information should help you understand where your
              business stands and prepare for what comes next.
            </p>
          </div>

          <div class="nava-about__experience-card nava-about__animate">
            <div class="nava-about__experience-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M8 52h48"/>
                <path d="M14 44V32h9v12"/>
                <path d="M28 44V22h9v22"/>
                <path d="M42 44V12h9v32"/>
                <path d="m12 25 15-10 12 3 14-12"/>
              </svg>
            </div>

            <span class="nava-about__experience-year">ESTABLISHED</span>
            <strong>1993</strong>
            <span class="nava-about__experience-caption">
              Supporting business owners for over three decades
            </span>
          </div>

        </div>
      </section>

      
<!-- LEADERSHIP -->
<section class="nava-about__leadership">
  <div class="nava-about__container">

    <div class="nava-about__section-heading nava-about__animate">
      <span class="nava-about__eyebrow">OUR LEADERSHIP</span>

      <h2>
        Experience That
        <span>Moves You Forward.</span>
      </h2>

      <p>
        Meet the professionals dedicated to helping business owners
        better understand their numbers and make informed decisions.
      </p>
    </div>

    <div class="nava-about__leaders">

      <!-- Laura Nava -->
      <article class="nava-about__leader nava-about__animate">
        <div class="nava-about__leader-accent"></div>

        <div class="nava-about__leader-photo">
          <img
            src="/assets/img/laury.JPG"
            alt="Laura Nava, CPA and Certified Tax Coach"
            loading="lazy"
          >
          <div class="nava-about__leader-photo-overlay"></div>

          <div class="nava-about__leader-photo-caption">
            <span>CPA · CTC</span>
            <h3>Laura Nava</h3>
            <p>Certified Public Accountant</p>
          </div>
        </div>

        <div class="nava-about__leader-body">
          <p>
            Laura Nava is a Certified Public Accountant (CPA) and
            Certified Tax Coach (CTC) with The NAVA Group Co.
          </p>

          <p>
            She graduated Magna Cum Laude from the University of
            San Francisco and began her career at one of the largest
            public accounting firms in the United States.
          </p>

          <p>
            She later joined the family business and has dedicated
            her career to helping entrepreneurs strengthen their
            businesses through accounting, tax strategy, and advisory
            services.
          </p>

          <p>
            Laura also speaks nationally to tax and accounting
            professionals about accounting, taxes, and professional
            firm management.
          </p>

          <div class="nava-about__leader-quote">
            <span>HER APPROACH</span>
            <p>
              Help business owners understand their numbers and use
              that information to make better decisions.
            </p>
          </div>
        </div>
      </article>

      <!-- Antonio Nava -->
      <article class="nava-about__leader nava-about__animate">
        <div class="nava-about__leader-accent"></div>

        <div class="nava-about__leader-photo">
          <img
            src="/assets/img/ANTONIO.webp"
            alt="Antonio Nava, Enrolled Agent, entrepreneur, speaker and author"
            loading="lazy"
          >
          <div class="nava-about__leader-photo-overlay"></div>

          <div class="nava-about__leader-photo-caption">
            <span>ENROLLED AGENT</span>
            <h3>Antonio Nava</h3>
            <p>Entrepreneur, Speaker &amp; Author</p>
          </div>
        </div>

        <div class="nava-about__leader-body">
          <p>
            Antonio Nava is an Enrolled Agent, entrepreneur, national
            speaker, and author of an international Amazon bestseller.
          </p>

          <p>
            With 33 years of experience representing taxpayers and
            running his own businesses, Antonio shares his knowledge
            with business owners, accountants, and tax preparers.
          </p>

          <p>
            His mission is to help them turn their experience and
            profession into a thriving, successful, and organized
            business that offers greater stability, freedom, and the
            opportunity to build a better future.
          </p>

          <div class="nava-about__leader-quote">
            <span>HIS MISSION</span>
            <p>
              Help professionals build successful businesses that
              create greater stability, freedom, and opportunity.
            </p>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>


      <!-- OUR VALUES -->
      <section class="nava-about__values">
        <div class="nava-about__container">

          <div class="nava-about__section-heading nava-about__animate">
            <span class="nava-about__eyebrow">OUR VALUES</span>

            <h2>
              Excellence in Character.
              <span>Excellence in Service.</span>
            </h2>

            <p>
              We are a team committed to excellence in our character,
              our service, and our results.
            </p>
          </div>

          <div class="nava-about__values-grid">

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">01</span>
              <h3>Honesty</h3>
              <p>We communicate openly and act with honesty.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">02</span>
              <h3>Respect</h3>
              <p>We value the people we serve and work alongside.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">03</span>
              <h3>Integrity</h3>
              <p>We uphold strong principles in our work and decisions.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">04</span>
              <h3>Responsibility</h3>
              <p>We take ownership of our commitments and our work.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">05</span>
              <h3>Results-Driven</h3>
              <p>We focus on meaningful outcomes for our clients.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">06</span>
              <h3>Enthusiasm</h3>
              <p>We bring energy and dedication to the work we do.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">07</span>
              <h3>Innovation</h3>
              <p>We embrace better ways to solve problems and serve clients.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">08</span>
              <h3>Initiative</h3>
              <p>We take action and look for opportunities to improve.</p>
            </article>

            <article class="nava-about__value nava-about__animate">
              <span class="nava-about__value-number">09</span>
              <h3>Personal Development</h3>
              <p>We continually pursue learning and personal growth.</p>
            </article>

          </div>

          <div class="nava-about__values-footer nava-about__animate">
            <span></span>
            <p>Together… Focused on a Better Future.</p>
            <span></span>
          </div>

        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="nava-about__cta">
        <div class="nava-about__container nava-about__cta-inner nava-about__animate">
          <div>
            <span class="nava-about__eyebrow nava-about__eyebrow--light">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Let's Talk About
              <span>Your Business.</span>
            </h2>

            <p>
              Discover how accounting, tax planning, and advisory services
              can help you make more informed financial decisions.
            </p>
          </div>

          <a href="/contact.html" class="nava-about__button">
            Schedule a Consultation
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    `;

    const animatedElements = this.querySelectorAll(
      ".nava-about__animate"
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
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
}

if (!customElements.get("nava-about")) {
  customElements.define("nava-about", NavaAbout);
}
