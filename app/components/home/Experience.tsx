import { experience } from "./experienceData";

const Experience = () => {
  return (
    <section className="section">
      <div className="sec-head">
        <h2>Experience</h2>
        <p>Where I&apos;ve worked and studied.</p>
      </div>
      <div className="xp">
        {experience.map((job) => (
          <div className={`job${job.education ? " edu" : ""}`} key={job.title}>
            <span className="when">{job.when}</span>
            <h3>{job.title}</h3>
            <span className="org">{job.org}</span>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
