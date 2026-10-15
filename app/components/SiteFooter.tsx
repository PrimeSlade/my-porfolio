import Link from "next/link";
import { nav, site } from "@/lib/site";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="container">
      <span>
        © {new Date().getFullYear()} {site.name} · Bangkok, open to {site.workModes} work
      </span>
      <nav aria-label="Footer">
        {nav.slice(1).map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="/blog/rss.xml">RSS</a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
