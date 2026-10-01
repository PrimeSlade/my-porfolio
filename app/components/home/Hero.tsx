import Link from "next/link";
import { Mail } from "lucide-react";
import StatCount from "./StatCount";

const NAME = "Sai Zayar Hein";

const Hero = () => {
  return (
    <header>
      <h1 className="hero-title" aria-label={NAME}>
        {NAME.split("").map((c, i) => (
          <span
            key={i}
            className="ch"
            aria-hidden="true"
            style={{ "--i": i } as React.CSSProperties}
          >
            {c === " " ? " " : c}
          </span>
        ))}
      </h1>

      <div className="bento">
        <div className="tile intro">
          <span className="status">
            <span className="dot" />
            Available for work
          </span>
          <p className="role">Full-stack software engineer</p>
          <p>
            I build web applications that businesses run on, from a point-of-sale
            system used by a medical clinic to a real-time chat app. My strength is
            the back end: the part that keeps data safe, fast and reliable.
          </p>
          <div className="facts">
            <div>
              <span>Based in</span>
              <b>Bangkok · open to remote</b>
            </div>
            <div>
              <span>Studying</span>
              <b>B.Sc. Computer Science, KMUTT</b>
            </div>
            <div>
              <span>Main tools</span>
              <b>TypeScript, Java, React</b>
            </div>
          </div>
          <div className="ctas">
            <Link className="pill solid" href="/projects">
              See my work
            </Link>
            <Link className="pill" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="tile feature spot">
          <div className="notch">
            <Link className="pill accent" href="/contact">
              Contact me
            </Link>
            <a
              className="pill accent icon-btn"
              href="mailto:saib6064@gmail.com"
              aria-label="Email me"
            >
              <Mail size={18} />
            </a>
          </div>
          <div className="tag">
            <strong>#In production</strong>
            <small>Used daily by a real clinic since July 2025</small>
          </div>
          <h2>Medical Clinic POS</h2>
          <p>
            A system that runs a clinic&apos;s front desk and pharmacy: patient
            records, treatments, medicine stock, invoices and reports, across any
            number of branches.
          </p>
          <a
            className="more"
            href="https://medpos.primeslade.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the live demo ↗
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <b>
              <StatCount value={7} />
              <em>+</em>
            </b>
            <span>Projects built and shipped</span>
          </div>
          <div className="stat">
            <b>
              <StatCount value={40} />
              <em>+</em>
            </b>
            <span>Students mentored in back-end development</span>
          </div>
          <div className="stat">
            <b>
              <StatCount value={99.9} decimals={1} />
              <em>%</em>
            </b>
            <span>Message delivery rate in Slade Chat</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
