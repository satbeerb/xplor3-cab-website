function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Airport Transfers",
      description:
        "Reliable pickup and drop services between Indore Airport and your destination.",
    },
    {
      icon: "🏙️",
      title: "Indore City Tours",
      description:
        "Explore Indore comfortably with flexible local sightseeing options.",
    },
    {
      icon: "🛕",
      title: "Ujjain Trips",
      description:
        "Comfortable cab services for Mahakaleshwar Darshan and Ujjain sightseeing.",
    },
    {
      icon: "🙏",
      title: "Omkareshwar Trips",
      description:
        "Convenient travel from Indore to Omkareshwar Jyotirlinga and back.",
    },
    {
      icon: "💼",
      title: "Corporate Travel",
      description:
        "Professional transportation solutions for business and corporate travel.",
    },
    {
      icon: "🚕",
      title: "Madhya Pradesh Tours",
      description:
        "Customized cab tours to explore destinations across Madhya Pradesh.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p className="section-eyebrow">OUR SERVICES</p>

        <h2>Travel your way with Xplor3</h2>

        <p>
          From everyday transfers to memorable journeys, choose a service
          designed around your travel needs.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">Enquire Now →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;