"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-row">
          <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
            Prime<b>Slade</b>
          </Link>

          <div className="links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "on" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a className="pill solid resume" href="/resume.pdf" download>
              Download résumé ↓
            </a>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu${isOpen ? " open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={pathname === link.href ? "on" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a href="/resume.pdf" download onClick={() => setIsOpen(false)}>
            Download résumé ↓
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
