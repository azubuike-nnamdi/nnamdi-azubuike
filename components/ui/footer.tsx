import { CONTACT_URL } from "@/config/routes";
import { formatUtcOffset, getCurrentYear } from "@/lib/helper";
import type { CmsFooterBrand } from "@/lib/cms";
import type { FooterColumn, FooterLink, PortfolioItem } from "@/lib/definitions";
import Link from "next/link";

type FooterProps = {
  columns: FooterColumn[];
  socialLinks?: PortfolioItem[];
  brand?: CmsFooterBrand;
};

function withContactRoute(links: FooterLink[]): FooterLink[] {
  const hasContact = links.some((link) => link.url === CONTACT_URL);
  if (hasContact) return links;

  return [...links, { id: "contact", label: "Contact", url: CONTACT_URL }];
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

  const routes = withContactRoute(
    columns.find((column) => column.title.toLowerCase().includes("quick"))?.links ??
      columns[columns.length - 1]?.links ??
      [],
  );

  const year = getCurrentYear();
  const copyrightName = brand?.copyrightName || "NNAMDI AZUBUIKE";
  const location = brand?.location || "LAGOS, NIGERIA";
  const utcOffset = formatUtcOffset(brand?.timezone || "Africa/Lagos");

  return (
    <footer className="mt-20 border-t border-border pt-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="section-label mb-4">Find me elsewhere</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {elsewhere.map((link) => (
              <li key={link.id}>
                <Link href={link.uri} target="_blank" rel="noopener noreferrer" className="soft-link">
                  {link.name.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="section-label mb-4">Routes</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {routes.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="soft-link">
                  {link.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-10 space-y-1 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
        <p>
          &copy; {year} {copyrightName}
        </p>
        <p>
          {location} · {utcOffset}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
