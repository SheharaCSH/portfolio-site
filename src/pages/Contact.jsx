// Contact page: contact details panel plus a controlled form (first/last name, phone, email, message).
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/content.js";

const emptyForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyForm);

  // Update a single field in state as the user types.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  // Capture the submitted message, then send the visitor back to the
  // Home page. This does not call a backend yet — swap this handler
  // for a real API/email request when the site is wired up to one.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submission:", formData);
    navigate("/", { state: { messageSent: true } });
  };

  return (
    <div className="page">
      <div className="container contact-grid">
        <div className="contact-info-panel">
          <h1 className="section-heading">Contact</h1>
          <p>
            The fastest way to reach me is email. I'm happy to talk about
            opportunities, collaborations, or questions about my work.
          </p>
          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Contact number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
