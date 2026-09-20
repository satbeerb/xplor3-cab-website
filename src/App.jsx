import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Header />
        

      <main>
        <Hero />
       

        <section id="services">
          <h2>Our Services</h2>

          <ul>
            <li>Airport Transfers</li>
            <li>Indore City Tours</li>
            <li>Ujjain Trips</li>
            <li>Omkareshwar Trips</li>
            <li>Corporate Cab Services</li>
            <li>Madhya Pradesh Tours</li>
          </ul>
        </section>

        <section id="packages">
          <h2>Popular Packages</h2>

          <h3>Indore – Ujjain</h3>
          <p>Comfortable travel with flexible trip options.</p>

          <h3>Indore – Omkareshwar</h3>
          <p>Convenient round-trip cab service.</p>

          <h3>Madhya Pradesh Tours</h3>
          <p>Customized travel plans for families and groups.</p>

          <p>Contact us for current package pricing.</p>
        </section>

        <section id="why-us">
          <h2>Why Choose Xplor3?</h2>

          <ul>
            <li>Safe and reliable travel</li>
            <li>Clean and comfortable cabs</li>
            <li>Personalized service</li>
            <li>Transparent and competitive pricing</li>
            <li>Local travel expertise</li>
          </ul>
        </section>

        <section id="about">
          <h2>About Xplor3</h2>

          <p>
            Xplor3 Cab Services provides reliable transportation solutions
            from Indore for local journeys, pilgrimage trips, airport
            transfers, corporate travel and Madhya Pradesh tours.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Xplor3</h2>

          <p>📞 +91 91317 16558</p>
          <p>📞 +91 81094 19396</p>
          <p>✉️ xplorecabs@gmail.com</p>
          <p>📍 Indore, Madhya Pradesh</p>

          <a href="tel:+919131716558">Call Xplor3</a>
          {" | "}
          <a href="https://wa.me/919131716558" target="_blank" rel="noreferrer">
            WhatsApp Xplor3
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Xplor3 Cab Services. All rights reserved.</p>
        <p>Your happiness is what drives us.</p>
      </footer>
    </div>
  );
}

export default App;