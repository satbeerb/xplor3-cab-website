const reasons = [
  {
    icon: "🛡️",
    title: "Safe & Reliable",
    description:
      "Customer-focused travel with dependable pickup and comfortable journeys.",
  },
  {
    icon: "✨",
    title: "Clean & Comfortable Cabs",
    description:
      "A comfortable travel experience for families, individuals and business travellers.",
  },
  {
    icon: "🤝",
    title: "Personalized Service",
    description:
      "Flexible travel plans designed around your schedule and journey requirements.",
  },
  {
    icon: "💳",
    title: "Transparent Pricing",
    description:
      "Clear trip pricing shared before your journey, helping you plan with confidence.",
  },
  {
    icon: "📍",
    title: "Local Travel Expertise",
    description:
      "Indore-based service with knowledge of popular destinations across Madhya Pradesh.",
  },
  {
    icon: "💬",
    title: "Easy Booking",
    description:
      "Contact us directly by phone or WhatsApp for quick enquiries and trip planning.",
  },
];

function WhyUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="section-heading">
        <p className="section-eyebrow">WHY XPLOR3</p>

        <h2>More than just a cab ride</h2>

        <p>
          We focus on making your journey comfortable, convenient and
          personalized from pickup to destination.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <article className="why-card" key={reason.title}>
            <div className="why-icon">{reason.icon}</div>

            <div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;