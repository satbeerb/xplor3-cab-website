function Contact() {
  const whatsappMessage =
    "Hello Xplor3 Cab Services, I would like to enquire about a cab booking.";

  const whatsappLink =
    `https://wa.me/919131716558?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-intro">
          <p className="contact-eyebrow">PLAN YOUR JOURNEY</p>

          <h2>Ready to travel with Xplor3?</h2>

          <p>
            Tell us where you would like to go. Contact us for cab
            availability, trip planning and current package pricing.
          </p>

          <div className="contact-actions">
            <a
              className="contact-primary"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>

            <a
              className="contact-secondary"
              href="tel:+919131716558"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span>📞</span>

            <div>
              <small>CALL US</small>

              <a href="tel:+919131716558">
                +91 91317 16558
              </a>

              <a href="tel:+918109419396">
                +91 81094 19396
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>

            <div>
              <small>EMAIL</small>

              <a href="mailto:xplorecabs@gmail.com">
                xplorecabs@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>

            <div>
              <small>LOCATION</small>

              <p>
                B13 Avasa Avenue, Bijalpur
                <br />
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;