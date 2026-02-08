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
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-700/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end md:justify-evenly">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-green-400"
                    : "text-gray-400 hover:text-green-400"
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
          className="md:hidden text-gray-400 hover:text-green-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-950 border-t border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-all text-lg transform ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                } ${
                  isActive
                    ? "text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
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
