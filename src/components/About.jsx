function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div>
          <p className="section-eyebrow">ABOUT XPLOR3</p>

          <h2>Your journey, our responsibility.</h2>
        </div>

        <div className="about-text">
          <p>
            Xplor3 Cab Services is an Indore-based travel service providing
            convenient cab solutions for local journeys, airport transfers,
            pilgrimage trips, corporate travel and tours across Madhya Pradesh.
          </p>

          <p>
            Whether you are travelling to Ujjain, visiting Omkareshwar,
            exploring Indore or planning a customized journey, our aim is to
            make your travel simple and comfortable.
          </p>

          <p className="about-tagline">
            Your happiness is what drives us.
          </p>

          <a
            className="about-button"
            href="https://wa.me/919131716558?text=Hello%20Xplor3%20Cab%20Services%2C%20I%20would%20like%20to%20plan%20a%20trip."
            target="_blank"
            rel="noreferrer"
          >
            Plan Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;