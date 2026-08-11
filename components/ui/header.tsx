"use client";

import type { NavLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  navLinks?: NavLinks[];
};

const fallbackNav: NavLinks[] = [
  { id: 1, name: "Projects", href: "/projects" },
  { id: 2, name: "Articles", href: "/articles" },
];

const Header = ({ navLinks = fallbackNav }: HeaderProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fade-up flex items-center justify-between gap-4">
      <Link
        href="/"
        className={`font-display text-lg font-semibold tracking-tight transition-colors ${
          isHome ? "text-highlight" : "text-foreground hover:text-highlight"
        }`}
      >
        Nnamdi!
      </Link>

      <nav className="flex flex-wrap justify-end gap-2">
        {navLinks.map((nav) => {
          const href = nav.href.startsWith("/") ? nav.href : `/${nav.href}`;
          const label = href === "/" ? "/home" : href;
          const isActive = pathname === href;

          return (
            <Link
              key={nav.id}
              href={href}
              className={`nav-chip ${isActive ? "border-highlight bg-highlight/10 text-highlight" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
