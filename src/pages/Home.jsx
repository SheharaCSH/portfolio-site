// Home page: welcome message, mission statement, and buttons linking to About and Projects.
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/content.js";

export default function Home() {
  // The Contact page navigates here with { messageSent: true } after a
  // successful form submission, so we can show a quick confirmation.
  const location = useLocation();
  const messageSent = location.state?.messageSent;

  return (
    <div className="page hero-page">
      <div className="container hero-grid">
        <div>
          {messageSent && (
            <p className="confirmation-banner" role="status">
              Thanks — your message was received!
            </p>
          )}
          <p className="eyebrow-note">{profile.tagline}</p>
          <h1 className="hero-heading">
            Hi, I'm {profile.legalName.split(" ")[0]}.
          </h1>
          <p className="hero-mission">{profile.missionStatement}</p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn about me
            </Link>
            <Link to="/projects" className="btn btn-outline">
              See my projects
            </Link>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <svg width="220" height="220" viewBox="0 0 64 64">
            <polygon
              points="32,4 58,18 58,46 32,60 6,46 6,18"
              fill="var(--ink)"
            />
            <text
              x="32"
              y="41"
              textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontSize="22"
              fill="var(--accent)"
            >
              {profile.initials}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
