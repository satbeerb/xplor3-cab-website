import ujjainImage from "../assets/destinations/ujjain.jpg";
import omkareshwarImage from "../assets/destinations/omkareshwar.jpg";
import indoreImage from "../assets/destinations/indore.jpg";

const packages = [
  {
    title: "Ujjain Darshan",
    subtitle: "Spiritual Journey",
    image: ujjainImage,
    description:
      "Travel from Indore to Ujjain for Mahakaleshwar Darshan and explore prominent temples around the holy city.",
    highlights: [
      "Indore pickup & drop",
      "Mahakaleshwar Darshan",
      "Local temple sightseeing",
    ],
  },
  {
    title: "Omkareshwar Darshan",
    subtitle: "Jyotirlinga Journey",
    image: omkareshwarImage,
    description:
      "Enjoy a comfortable journey from Indore to Omkareshwar with flexible time for darshan and local sightseeing.",
    highlights: [
      "Indore pickup & drop",
      "Omkareshwar Jyotirlinga",
      "Comfortable round trip",
    ],
  },
  {
    title: "Indore Local Tour",
    subtitle: "Explore Indore",
    image: indoreImage,
    description:
      "Discover some of Indore's popular attractions with a flexible sightseeing plan tailored to your available time.",
    highlights: [
      "Flexible itinerary",
      "Popular city attractions",
      "Pickup & drop in Indore",
    ],
  },
  {
    title: "Ujjain + Omkareshwar",
    subtitle: "Popular Pilgrimage Package",
    images: [ujjainImage, omkareshwarImage],
    description:
      "A customized pilgrimage journey covering two of Madhya Pradesh's important Jyotirlinga destinations.",
    highlights: [
      "Customized itinerary",
      "Ujjain & Omkareshwar",
      "Multi-day options available",
    ],
  },
];

function Packages() {
  const phoneNumber = "919131716558";

  const createWhatsAppLink = (packageName) => {
    const message =
      `Hello Xplor3 Cab Services, I would like to enquire about the ${packageName} package. Please share details and pricing.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="packages-section" id="packages">
      <div className="section-heading">
        <p className="section-eyebrow">POPULAR JOURNEYS</p>

        <h2>Explore our popular packages</h2>

        <p>
          Comfortable and flexible travel options from Indore for pilgrimage,
          sightseeing and memorable journeys.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((travelPackage) => (
          <article className="package-card" key={travelPackage.title}>

            {travelPackage.images ? (
              <div className="package-image-split">
                {travelPackage.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={
                      index === 0
                        ? "Ujjain Mahakaleshwar"
                        : "Omkareshwar Jyotirlinga"
                    }
                  />
                ))}
              </div>
            ) : (
              <img
                className="package-image"
                src={travelPackage.image}
                alt={`${travelPackage.title} - Xplor3 Cab Services`}
              />
            )}

            <div className="package-content">
              <p className="package-subtitle">
                {travelPackage.subtitle}
              </p>

              <h3>{travelPackage.title}</h3>

              <p className="package-description">
                {travelPackage.description}
              </p>

              <ul>
                {travelPackage.highlights.map((highlight) => (
                  <li key={highlight}>✓ {highlight}</li>
                ))}
              </ul>

              <div className="package-footer">
                <span>Enquire for current pricing</span>

                <a
                  href={createWhatsAppLink(travelPackage.title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Packages;