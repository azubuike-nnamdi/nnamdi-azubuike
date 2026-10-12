import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, INSIGHTS_URL, NOTES_URL } from "@/config/routes";
import { formatUtcOffset, getCurrentYear } from "@/lib/helper";
import type { CmsFooterBrand } from "@/lib/cms";
import type { FooterColumn, FooterLink, PortfolioItem } from "@/lib/definitions";
import Link from "next/link";

type FooterProps = {
  columns: FooterColumn[];
  socialLinks?: PortfolioItem[];
  brand?: CmsFooterBrand;
};

function toTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/projects": "Work",
  [NOTES_URL]: "Notes",
  [INSIGHTS_URL]: "Insights",
  [ABOUT_URL]: "About",
  "/articles": "Notes",
  [EXPERIENCE_URL]: "Experience",
  [CONTACT_URL]: "Contact",
};

function normalizeRoute(url: string) {
  return url === "/articles" ? NOTES_URL : url;
}

function presentRoutes(links: FooterLink[]): FooterLink[] {
  const byUrl = new Map<string, FooterLink>();

  for (const link of links) {
    const url = normalizeRoute(link.url);
    byUrl.set(url, { ...link, url, label: routeLabels[url] ?? link.label });
  }

  const required = [NOTES_URL, INSIGHTS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL];
  for (const url of required) {
    if (!byUrl.has(url)) {
      byUrl.set(url, { id: url, label: routeLabels[url], url });
    }
  }

  const preferred = ["/projects", NOTES_URL, INSIGHTS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL];
  const ordered = preferred
    .map((url) => byUrl.get(url))
    .filter((link): link is FooterLink => Boolean(link));
  const extras = [...byUrl.values()].filter((link) => !preferred.includes(link.url));

  return [...ordered, ...extras];
}

const Footer = ({ columns, socialLinks = [], brand }: FooterProps) => {
  const elsewhere =
    socialLinks.length > 0
      ? socialLinks
      : columns
          .flatMap((column) => column.links)
          .filter((link) => !link.isEmail)
          .slice(0, 4)
          .map((link) => ({
            id: Number(link.id) || 0,
            name: link.label,
            uri: link.url,
          }));

  const routes = presentRoutes(
    columns.find((column) => column.title.toLowerCase().includes("quick"))?.links ??
      columns[columns.length - 1]?.links ??
      [],
  );

  const year = getCurrentYear();
  const copyrightName = toTitle(brand?.copyrightName || "Nnamdi Azubuike");
  const location = toTitle(brand?.location || "Lagos, Nigeria");
  const utcOffset = formatUtcOffset(brand?.timezone || "Africa/Lagos");

  return (
    <footer className="mt-24 border-t border-foreground/80 pt-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-medium">Nnamdi Azubuike</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {location} · {utcOffset}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-6">
          <ul className="space-y-2 text-sm">
            {routes.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="text-muted-foreground hover:text-foreground">
                  {routeLabels[link.url] ?? link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm">
            {elsewhere.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        © {year} {copyrightName}
      </p>
    </footer>
  );
};

export default Footer;
