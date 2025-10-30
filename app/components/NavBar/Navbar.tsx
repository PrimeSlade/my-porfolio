"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-lg">
          {links.map((link) => {
            const isActive = pathname === link.href; // highlight active
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
      </div>
    </nav>
  );
};

export default Navbar;
