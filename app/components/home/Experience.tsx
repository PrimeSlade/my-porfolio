import { experience } from "./experienceData";

const Experience = () => (
  <section id="experience">
    <div className="section-head">
      <div>
        <h2>Experience</h2>
        <p>Where I&apos;ve worked and studied.</p>
      </div>
    </div>
    <div className="card xp">
      {experience.map((job) => (
        <div className="row" key={job.title}>
          <h3>{job.title}</h3>
          <span className="when">{job.when}</span>
          <span className="org">{job.org}</span>
          {job.points.length > 0 && (
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
