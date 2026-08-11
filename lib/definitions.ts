type PortfolioItem = {
  id: string | number
  name: string
  uri: string
}

type ProjectDataType = {
  id: string | number
  name: string
  desc: string
  action: string
  uri: string
  technologies: string[]
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
