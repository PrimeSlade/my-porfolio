"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[57px] flex items-center justify-between">
        {/* Left - Brand */}
        <Link
          href="/"
          className="font-mono text-[13px] tracking-[0.2em] uppercase font-bold"
        >
          <span className="text-white">Prime</span>
          <span className="text-neutral-500">Slade</span>
          <span className="ml-2 text-[10px] tracking-[0.3em] text-neutral-600 hidden sm:inline">
            — Sai Zayar Hein
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase font-mono">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 border transition-colors ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "text-neutral-400 border-transparent hover:text-white hover:border-white/15"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[11px] tracking-[0.2em] uppercase font-mono px-4 py-3 border transition-all transform ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                } ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
