type PortfolioItem = {
  id: number;
  name: string;
  uri: string;
};

type ProjectDataType = {
  id: number;
  name: string;
  desc: string;
  action: string;
  uri: string;
};

type NavLinks = {
  id: number;
  name: string;
  href: string;
};

type ArticlesDataType = {
  id: number;
  date: string;
  readTime: string;
  title: string;
  desc?: string;
  readMore?: string;
  uri: string;
  image?: string;
};

type FooterItemType = {
  id: number;
  title: string;
  [key: string]: string | number | undefined; // Allow any string key with string or number value
};

type AnimatedLinkProps = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  className?: string;
  target?: string;
}

export type { PortfolioItem, ProjectDataType, NavLinks, ArticlesDataType, FooterItemType, AnimatedLinkProps };
