import { Link } from "react-router-dom";
import { profile } from "../data/content.js";

// Custom logo: a hand-built hexagon mark with the owner's initials.
// This is original artwork (not a third-party brand asset), built
// with plain SVG so it stays crisp at any size and needs no image file.
export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${profile.legalName} — Home`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
      >
        <polygon
          points="32,4 58,18 58,46 32,60 6,46 6,18"
          fill="var(--ink)"
        />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="22"
          fill="var(--accent)"
        >
          {profile.initials}
        </text>
      </svg>
      <span className="logo-name">{profile.legalName}</span>
    </Link>
  );
}
