function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          CAB SERVICES • INDORE • MADHYA PRADESH
        </p>

        <h1>
          Comfortable journeys.
          <span> Memorable destinations.</span>
        </h1>

        <p className="hero-description">
          Reliable cab services from Indore for airport transfers,
          Ujjain, Omkareshwar, local sightseeing and customized
          Madhya Pradesh tours.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://wa.me/919131716558"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>

          <a className="secondary-button" href="tel:+919131716558">
            Call Now
          </a>
        </div>

        <div className="hero-features">
          <span>✓ Clean & Comfortable Cabs</span>
          <span>✓ Reliable Service</span>
          <span>✓ Local Travel Expertise</span>
        </div>
      </div>

      <div className="hero-card">
        <p className="hero-card-label">POPULAR JOURNEYS</p>

        <h2>Explore from Indore</h2>

        <div className="journey">
          <span>Indore</span>
          <strong>→</strong>
          <span>Ujjain</span>
        </div>

        <div className="journey">
          <span>Indore</span>
          <strong>→</strong>
          <span>Omkareshwar</span>
        </div>

        <div className="journey">
          <span>Indore</span>
          <strong>→</strong>
          <span>Airport</span>
        </div>

        <a href="#packages">Explore Packages →</a>
      </div>
    </section>
  );
}

export default Hero;