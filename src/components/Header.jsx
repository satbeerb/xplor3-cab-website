import logo from "../assets/xplor3-taxi-logo.png";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <img
          className="brand-logo"
          src={logo}
          alt="Xplor3 Cab Services"
        />

        <div className="brand-text">
          <div>
            <strong>Xplor3</strong>
            <span> Cab Services</span>
          </div>

          <small>Your happiness is what drives us</small>
        </div>
      </a>

      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#why-us">Why Xplor3</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-call" href="tel:+919131716558">
        Call Now
      </a>
    </header>
  );
}

export default Header;