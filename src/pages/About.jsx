// About page: legal name, headshot, short bio, and a link to the PDF resume.
import { profile } from "../data/content.js";

export default function About() {
  return (
    <div className="page">
      <div className="container about-grid">
        <div className="about-photo-wrap">
          {profile.headshotSrc ? (
            <img
              src={profile.headshotSrc}
              alt={`Headshot of ${profile.legalName}`}
              className="about-photo"
            />
          ) : (
            // Placeholder shown until a real headshot is added in
            // src/data/content.js (headshotSrc).
            <div className="about-photo about-photo-placeholder">
              <span>Add your headshot — see content.js</span>
            </div>
          )}
        </div>

        <div>
          <h1 className="section-heading">{profile.legalName}</h1>
          <p className="eyebrow-note">{profile.tagline}</p>
          <p className="about-bio">{profile.aboutParagraph}</p>

          {profile.resumeSrc ? (
            <a
              href={profile.resumeSrc}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download my resume (PDF)
            </a>
          ) : (
            <p className="eyebrow-note">
              Resume link: add your PDF to <code>/public/resume.pdf</code>{" "}
              and set <code>resumeSrc</code> in{" "}
              <code>src/data/content.js</code>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
