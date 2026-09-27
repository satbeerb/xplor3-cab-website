function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>
            <span>Xplor3</span> Cab Services
          </h3>

          <p>Your happiness is what drives us.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#why-us">Why Xplor3</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Popular Trips</h4>

          <a href="#packages">Ujjain Darshan</a>
          <a href="#packages">Omkareshwar Darshan</a>
          <a href="#packages">Indore Local Tour</a>
          <a href="#packages">Madhya Pradesh Tours</a>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>

          <a href="tel:+919131716558">
            +91 91317 16558
          </a>

          <a href="mailto:xplorecabs@gmail.com">
            xplorecabs@gmail.com
          </a>

          <p>Indore, Madhya Pradesh</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Xplor3 Cab Services. All rights reserved.
        </p>

        <p className="photo-credit">
          Selected destination photography used under applicable
          Wikimedia Commons licenses.
        </p>
      </div>
    </footer>
  );
}

export default Footer;