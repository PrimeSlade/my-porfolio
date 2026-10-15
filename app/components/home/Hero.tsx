import Link from "next/link";
import { Download, GraduationCap, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import StatCount from "./StatCount";
import { site } from "@/lib/site";

const Hero = () => (
  <>
    <div className="hero">
      <span className="badge">
        <span className="dot" />
        Available for work
      </span>
      <h1>{site.name}</h1>
      <p className="role">{site.role}</p>
      <p className="lede">
        I build web applications that businesses run on, from a point-of-sale system used daily by a
        medical clinic to a real-time chat app. My strength is the back end: the part that keeps data
        safe, fast and reliable.
      </p>
      <div className="meta">
        <span>
          <MapPin aria-hidden="true" />
          Bangkok · open to {site.workModes}
        </span>
        <span>
          <GraduationCap aria-hidden="true" />
          B.Sc. Computer Science, KMUTT
        </span>
      </div>
      <div className="actions">
        <Link className="btn btn-default" href="/projects">
          See my work
        </Link>
        <a className="btn btn-outline" href="/resume.pdf" download>
          <Download aria-hidden="true" />
          Résumé
        </a>
        <a className="btn btn-ghost btn-icon" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <SiGithub aria-hidden="true" />
        </a>
        <a className="btn btn-ghost btn-icon" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <SiLinkedin aria-hidden="true" />
        </a>
      </div>
    </div>

    <div className="stats boxed">
      <div className="card">
        <p className="card-desc">Projects shipped</p>
        <p className="num">
          <StatCount value={9} />+
        </p>
      </div>
      <div className="card">
        <p className="card-desc">Students mentored</p>
        <p className="num">
          <StatCount value={40} />+
        </p>
      </div>
      <div className="card">
        <p className="card-desc">Message delivery in Slade Chat</p>
        <p className="num">
          <StatCount value={99.9} decimals={1} />%
        </p>
      </div>
    </div>
  </>
);

export default Hero;
