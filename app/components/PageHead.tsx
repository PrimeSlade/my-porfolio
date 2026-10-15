import Link from "next/link";

type Crumb = { href: string; label: string };

// Top box of every inner page: optional breadcrumbs, the page's one h1, and a short lede.
const PageHead = ({ title, lede, crumbs, children }: { title: string; lede?: React.ReactNode; crumbs?: Crumb[]; children?: React.ReactNode }) => (
  <div className="page-head">
    {crumbs && (
      <nav className="crumbs" aria-label="Breadcrumb">
        {crumbs.map((c) => (
          <span key={c.href}>
            <Link href={c.href}>{c.label}</Link> /
          </span>
        ))}
      </nav>
    )}
    <h1>{title}</h1>
    {lede && <p className="lede">{lede}</p>}
    {children}
  </div>
);

export default PageHead;
