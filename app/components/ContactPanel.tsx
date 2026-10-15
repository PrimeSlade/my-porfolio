import { Download } from "lucide-react";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import CopyButton from "./CopyButton";
import { site } from "@/lib/site";

const ContactPanel = () => {
  return (
    <div className="contact boxed">
      <div className="card lead" data-hue="live">
        <div className="card-header">
          <h2>Let&apos;s work together</h2>
          <p>I&apos;m open to back-end or full-stack roles and freelance projects. I usually reply within a day.</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-outline btn-sm" href={site.github} target="_blank" rel="noopener noreferrer">
            <SiGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="btn btn-outline btn-sm" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <SiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a className="btn btn-outline btn-sm" href={site.leetcode} target="_blank" rel="noopener noreferrer">
            <SiLeetcode aria-hidden="true" />
            LeetCode
          </a>
        </div>
      </div>
      <div className="card ways">
        <div className="field">
          <span className="k">Email</span>
          <a className="v" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <CopyButton value={site.email} label="Copy email" />
        </div>
        <div className="field">
          <span className="k">Phone</span>
          <a className="v" href={site.phoneHref}>
            {site.phone}
          </a>
          <CopyButton value={site.phone.replace(/\s/g, "")} label="Copy phone number" />
        </div>
        <div className="field">
          <span className="k">Résumé</span>
          <a className="v" href="/resume.pdf" download>
            resume.pdf
          </a>
          <a className="btn btn-ghost btn-icon btn-sm" href="/resume.pdf" download aria-label="Download résumé">
            <Download aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
