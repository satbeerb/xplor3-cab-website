import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import Packages from "./components/Packages.jsx";
import WhyUs from "./components/WhyUs.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
    <main>
       <Hero />
       <Services />
       <Packages />
       <WhyUs />
       <About />
      <Contact />
    
      </main>

      <Footer />
    </div>
  );
}

export default App;