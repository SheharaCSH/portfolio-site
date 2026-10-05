import { services } from "../data/content.js";

// Small set of geometric icons drawn inline as SVG so the page needs
// no external icon library or image assets.
const icons = {
  "service-fullstack": (
    <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
      <rect
        x="4"
        y="8"
        width="32"
        height="24"
        rx="2"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <path d="M12 20l4 4-4 4" stroke="var(--accent)" strokeWidth="2" fill="none" />
      <path d="M20 28h8" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  ),
  "service-ai": (
    <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <path d="M20 12v8l6 4" stroke="var(--accent)" strokeWidth="2" fill="none" />
    </svg>
  ),
  "service-requirements": (
    <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
      <rect
        x="12"
        y="4"
        width="16"
        height="32"
        rx="2"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <circle cx="20" cy="30" r="1.5" fill="var(--accent)" />
    </svg>
  ),
};

export default function Services() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="section-heading">Services</h1>
        <p className="section-lede">
          Here's what I can help with. Reach out on the contact page if
          any of this fits what you're looking for.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {icons[service.id]}
              <h2 className="service-title">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
