// Projects page: one card per project (image, role, description, tags, link) from content.js.
import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="section-heading">Projects</h1>
        <p className="section-lede">
          A selection of things I've built. Where available, each one links to
          its source repository.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image project-image-placeholder">
                  <span>Add image in content.js</span>
                </div>
              )}

              <div className="project-body">
                <h2 className="project-title">{project.title}</h2>
                <p className="eyebrow-note">{project.role}</p>
                <p>{project.description}</p>

                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {/* Show the link button when the project has a repo/demo URL;
                    otherwise show a short note (e.g. group work with no repo) */}
                {project.link ? (
                  <a
                    href={project.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project
                  </a>
                ) : (
                  project.linkNote && (
                    <p className="eyebrow-note">{project.linkNote}</p>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
