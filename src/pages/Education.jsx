// Education page: renders each qualification (dates, credential, institution) from content.js.
import { education } from "../data/content.js";

export default function Education() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="section-heading">Education</h1>
        <p className="section-lede">
          My academic and professional qualifications to date.
        </p>

        <ol className="education-list">
          {education.map((entry) => (
            <li key={entry.id} className="education-item">
              <div className="education-dates">{entry.dates}</div>
              <div>
                <h2 className="education-credential">{entry.credential}</h2>
                <p className="education-institution">{entry.institution}</p>
                <p>{entry.details}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
