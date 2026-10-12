"use client";

import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, INSIGHTS_URL, NOTES_URL } from "@/config/routes";
import type { NavLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  navLinks?: NavLinks[];
};

const fallbackNav: NavLinks[] = [
  { id: 1, name: "Work", href: "/projects" },
  { id: 2, name: "Notes", href: NOTES_URL },
  { id: 3, name: "Insights", href: INSIGHTS_URL },
  { id: 4, name: "About", href: ABOUT_URL },
  { id: 5, name: "Experience", href: EXPERIENCE_URL },
  { id: 6, name: "Contact", href: CONTACT_URL },
];

const navOrder = ["/projects", NOTES_URL, INSIGHTS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL];

const navLabels: Record<string, string> = {
  "/projects": "Work",
  [NOTES_URL]: "Notes",
  [INSIGHTS_URL]: "Insights",
  [ABOUT_URL]: "About",
  [EXPERIENCE_URL]: "Experience",
  [CONTACT_URL]: "Contact",
};

function normalizeHref(href: string) {
  const path = href.startsWith("/") ? href : `/${href}`;
  if (path === "/articles") return NOTES_URL;
  return path;
}

function presentNav(links: NavLinks[]): NavLinks[] {
  const byHref = new Map<string, NavLinks>();

  for (const link of links) {
    const href = normalizeHref(link.href);
    byHref.set(href, {
      ...link,
      href,
      name: navLabels[href] ?? link.name,
    });
  }

  const required: NavLinks[] = [
    { id: "notes", name: "Notes", href: NOTES_URL },
    { id: "insights", name: "Insights", href: INSIGHTS_URL },
    { id: "about", name: "About", href: ABOUT_URL },
    { id: "experience", name: "Experience", href: EXPERIENCE_URL },
    { id: "contact", name: "Contact", href: CONTACT_URL },
  ];

  for (const link of required) {
    if (!byHref.has(link.href)) byHref.set(link.href, link);
  }

  const ordered = navOrder
    .map((href) => byHref.get(href))
    .filter((link): link is NavLinks => Boolean(link));

  const extras = [...byHref.values()].filter((link) => !navOrder.includes(link.href));

  return [...ordered, ...extras];
}

const Header = ({ navLinks = fallbackNav }: HeaderProps) => {
  const pathname = usePathname();
  const links = presentNav(navLinks);

  return (
    <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-b border-border pb-5">
      <Link href="/" className="group">
        <span className="font-display text-2xl font-medium tracking-tight text-foreground">
          Nnamdi Azubuike
        </span>
        <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Lagos
        </span>
      </Link>

      <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 pb-1">
        {links.map((nav) => {
          const href = nav.href.startsWith("/") ? nav.href : `/${nav.href}`;
          const isActive =
            pathname === href ||
            pathname.startsWith(`${href}/`) ||
            (href === NOTES_URL && pathname.startsWith("/articles"));

          return (
            <Link
              key={nav.id}
              href={href}
              className={`text-sm ${
                isActive
                  ? "text-foreground underline decoration-foreground/40 underline-offset-[6px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
