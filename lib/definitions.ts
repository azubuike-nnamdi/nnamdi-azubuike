type PortfolioItem = {
  id: string | number
  name: string
  uri: string
}

type ProjectDataType = {
  id: string | number
  name: string
  slug?: string | null
  proof?: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  desc?: string | null
  action: string
  uri: string
  image?: string | null
  imageUrl?: string | null
  seoDescription?: string | null
  technologies: string[]
  order?: number
  featured?: boolean
}

type NavLinks = {
  id: string | number
  name: string
  href: string
}

type Article = {
  id: string | number
  date: string
  readTime: string
  title: string
  desc?: string
  summary?: string | null
  category: string[]
  readMore?: string
  uri?: string
  href?: string
  image?: string
  views?: number
  kind?: 'external' | 'full'
  slug?: string | null
}

type FooterLink = {
  id: string | number
  label: string
  url: string
  isEmail?: boolean | null
}

type FooterColumn = {
  id: string | number
  title: string
  links: FooterLink[]
}

type AnimatedLinkProps = {
  children: React.ReactNode
  href: string
  isActive?: boolean
  className?: string
  target?: string
}

export type {
  AnimatedLinkProps,
  Article,
  FooterColumn,
  FooterLink,
  NavLinks,
  PortfolioItem,
  ProjectDataType,
}
