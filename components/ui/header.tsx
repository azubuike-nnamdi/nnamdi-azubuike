"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, FUN_URL, NOTES_URL } from "@/config/routes";
import type { NavLinks } from "@/lib/definitions";
import { PanelLeft, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderProps = {
  navLinks?: NavLinks[];
};

const fallbackNav: NavLinks[] = [
  { id: 1, name: "Work", href: "/projects" },
  { id: 2, name: "Notes", href: NOTES_URL },
  { id: 3, name: "About", href: ABOUT_URL },
  { id: 5, name: "Experience", href: EXPERIENCE_URL },
  { id: 6, name: "Fun projects", href: FUN_URL },
  { id: 7, name: "Contact", href: CONTACT_URL },
];

const navOrder = ["/projects", NOTES_URL, ABOUT_URL, EXPERIENCE_URL, FUN_URL, CONTACT_URL];

const onePageAnchors: Record<string, string> = {
  "/": "#top",
  "/projects": "#work",
  [NOTES_URL]: "#notes",
  "/articles": "#notes",
  [ABOUT_URL]: "#about",
  [EXPERIENCE_URL]: "#experience",
  [FUN_URL]: "#fun",
  [CONTACT_URL]: "#contact",
};

const navLabels: Record<string, string> = {
  "/projects": "Work",
  [NOTES_URL]: "Notes",
  [ABOUT_URL]: "About",
  [EXPERIENCE_URL]: "Experience",
  [FUN_URL]: "Fun projects",
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
    if (href === "/insights") continue;
    byHref.set(href, {
      ...link,
      href,
      name: navLabels[href] ?? link.name,
    });
  }

  const required: NavLinks[] = [
    { id: "notes", name: "Notes", href: NOTES_URL },
    { id: "about", name: "About", href: ABOUT_URL },
    { id: "experience", name: "Experience", href: EXPERIENCE_URL },
    { id: "fun", name: "Fun projects", href: FUN_URL },
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

function isCurrent(pathname: string, href: string) {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href === NOTES_URL && pathname.startsWith("/articles"))
  );
}

const Header = ({ navLinks = fallbackNav }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const onePage = pathname.startsWith("/for/");
  const links = presentNav(navLinks).map((link) =>
    onePage
      ? { ...link, href: onePageAnchors[normalizeHref(link.href)] ?? link.href }
      : link,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="flex items-center justify-between gap-x-6 border-b border-border pb-5">
      <Link href={onePage ? "#top" : "/"} className="group">
        <span className="font-display text-2xl font-medium tracking-tight text-foreground">
          Nnamdi Azubuike
        </span>
        <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Lagos
        </span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="text-foreground md:hidden"
          aria-label="Open menu"
        >
          <PanelLeft className="size-5" />
        </SheetTrigger>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-[min(100%,18rem)] gap-0 border-foreground/15 bg-background p-0 shadow-none"
        >
          <SheetHeader className="flex-row items-center justify-between border-b border-border px-5 py-4">
            <SheetTitle className="font-display text-xl font-medium">Menu</SheetTitle>
            <SheetDescription className="sr-only">Site pages</SheetDescription>
            <SheetClose
              className="text-foreground"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col px-5 py-4">
            {links.map((nav) => {
              const href = nav.href.startsWith("#") || nav.href.startsWith("/") ? nav.href : `/${nav.href}`;
              const isActive = isCurrent(pathname, href);

              return (
                <Link
                  key={nav.id}
                  href={href}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    if (href.startsWith("#")) {
                      const id = href.slice(1);
                      window.setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }, 200);
                      return;
                    }
                    router.push(href);
                  }}
                  className={`border-b border-border py-3 text-base ${
                    isActive
                      ? "text-foreground underline decoration-foreground/40 underline-offset-[6px]"
                      : "text-muted-foreground"
                  }`}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden flex-wrap justify-end gap-x-5 gap-y-2 pb-1 md:flex">
        {links.map((nav) => {
          const href = nav.href.startsWith("#") || nav.href.startsWith("/") ? nav.href : `/${nav.href}`;
          const isActive = isCurrent(pathname, href);

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
