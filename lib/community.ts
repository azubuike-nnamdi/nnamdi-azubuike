export type CommunityLink = {
  label: string
  href: string
}

export type CommunityLogo = {
  src: string
  alt: string
  /** Square marks need more height than wide wordmarks. */
  mark?: boolean
}

export type CommunityRole = {
  shortName?: string
  period?: string
  role: string
  organization: string
  summary: string
  responsibilities?: string[]
  logos: CommunityLogo[]
  links?: CommunityLink[]
}

const gdgLogo: CommunityLogo = {
  src: '/img/community/gdg.png',
  alt: 'Google Developer Groups',
}

const kwasuLogo: CommunityLogo = {
  src: '/img/community/kwasu.png',
  alt: 'Kwara State University',
}

const nacosLogo: CommunityLogo = {
  src: '/img/community/nacos.png',
  alt: 'Nigeria Association of Computing Students',
}

const kwasuLink: CommunityLink = {
  label: 'Kwara State University',
  href: 'https://kwasu.edu.ng/',
}

const nacosLink: CommunityLink = {
  label: 'NACOS',
  href: 'https://nacos.org.ng/',
}

/** Campus and community seats, earliest first. Not employment. */
export const defaultCommunityRoles: CommunityRole[] = [
  {
    shortName: 'Google Developer Groups on Campus',
    period: 'November 2017',
    role: 'Core team',
    organization: 'Google Developer Groups on Campus, Kwara State University',
    summary:
      'I was on the core team of the Google Developer Student Clubs chapter at Kwara State University, now Google Developer Groups on Campus. With the NACOS vice president seat, I co-organized the first bootcamp and hackathon on campus.',
    responsibilities: [
      'Mentored students who were finding a way into tech.',
      'Co-organized the first bootcamp and hackathon on campus.',
    ],
    logos: [gdgLogo, kwasuLogo],
    links: [
      {
        label: 'Chapter',
        href: 'https://gdg.community.dev/gdg-on-campus-kwara-state-university-malete-nigeria/',
      },
      kwasuLink,
    ],
  },
  {
    shortName: 'NACOS',
    period: '300 level',
    role: 'Vice President',
    organization:
      'Nigeria Association of Computing Students (NACOS), Kwara State University',
    summary:
      'I was vice president of the Nigeria Association of Computing Students, Kwara State University chapter. With the campus Google Developer Groups core team, I co-organized the first bootcamp and hackathon on campus.',
    responsibilities: [
      'Co-organized the first bootcamp and hackathon on campus.',
      'Helped run summits and bootcamps for the chapter.',
      'Stayed with members when the room strained, and carried issues between the association, the college, and the faculty.',
    ],
    logos: [nacosLogo, kwasuLogo],
    links: [nacosLink, kwasuLink],
  },
  {
    shortName: 'NACOS',
    period: 'August 2020 – 2021',
    role: 'Executive President',
    organization:
      'Nigeria Association of Computing Students (NACOS), Kwara State University',
    summary:
      'In my final year I was president of the same association. The bootcamp and hackathon campaign continued, and the winners left with prizes and internship places.',
    responsibilities: [
      'Kept the campus bootcamp and hackathon going through the final year.',
      'Secured internship opportunities for the hackathon winners.',
      'Prizes went to the hackathon winners.',
      'Held the chapter, and the students in it, through the last year of the degree.',
    ],
    logos: [nacosLogo, kwasuLogo],
    links: [nacosLink, kwasuLink],
  },
  {
    shortName: 'Google Developer Groups Ilorin',
    period: 'January 2022 – December 2022',
    role: 'Community Lead',
    organization: 'Google Developer Groups Ilorin',
    summary:
      'I took the lead of Google Developer Groups Ilorin in March 2022. A chapter lead keeps a local room where developers learn Google’s tools, meet one another, and build. Ilorin’s year included Google I/O Extended.',
    responsibilities: [
      'Set the chapter plan with the organizing team: a calendar of events, steady communication with the previous lead, and knowledge shared across the team.',
      'Led Google I/O Extended Ilorin ’22 on 18 June 2022 at Malhub. I opened the day, introduced the keynote stream of Google’s product updates, and closed the event.',
      'Ran activities for developers and designers, and mentored people moving into tech.',
      'Worked with members to name the community’s problems, and surveyed what should be built.',
    ],
    logos: [gdgLogo],
    links: [
      {
        label: 'The genesis as lead',
        href: 'https://medium.com/gdg-ilorin/the-genesis-as-lead-of-gdg-ilorin-ac2388edc940',
      },
      {
        label: 'Google I/O Extended Ilorin ’22',
        href: 'https://medium.com/gdg-ilorin/google-io-extended-ilorin22-61ed01e3161',
      },
    ],
  },
  {
    shortName: 'KwaraBuild',
    period: 'January 2022 – December 2022',
    role: 'Community Program Manager',
    organization: 'KwaraBuild',
    summary:
      'I managed community programmes for KwaraBuild, the Ilorin community that builds Kwara’s tech ecosystem through training, founder rooms, and the annual conference.',
    responsibilities: [
      'Looked after Startup Build: startup education, founder connections, and the sessions where people share how to raise and grow.',
      'Looked after Career in Tech: workshops and mentorship that open tech education to people outside the usual path.',
      'Supported the annual Kwarabuild Tech Conference, the gathering of builders, founders, and the wider Kwara tech community.',
    ],
    logos: [
      {
        src: '/img/community/kwarabuild.png',
        alt: 'KwaraBuild',
      },
    ],
    links: [{ label: 'KwaraBuild', href: 'https://kwarabuild.org/' }],
  },
  {
    shortName: "Africa's Talking",
    role: 'Community Lead',
    organization: "Africa's Talking",
    summary: 'I led the community for Africa’s Talking.',
    logos: [
      {
        src: '/img/community/africastalking.png',
        alt: "Africa's Talking",
        mark: true,
      },
    ],
    links: [{ label: "Africa's Talking", href: 'https://africastalking.com/' }],
  },
]

/** Homepage strip. Repeated short names, such as the two NACOS seats, appear once. */
export function communityNamesFrom(roles: CommunityRole[]): string[] {
  const names: string[] = []

  for (const role of roles) {
    const name = role.shortName?.trim() || role.organization
    if (name && !names.includes(name)) names.push(name)
  }

  return names
}

export function communityRolesForCms(roles: CommunityRole[] = defaultCommunityRoles) {
  return roles.map((item) => ({
    shortName: item.shortName,
    period: item.period,
    role: item.role,
    organization: item.organization,
    summary: item.summary,
    responsibilities: (item.responsibilities ?? []).map((text) => ({ text })),
    logos: item.logos.map((logo) => ({
      src: logo.src,
      alt: logo.alt,
      mark: Boolean(logo.mark),
    })),
    links: (item.links ?? []).map((link) => ({
      label: link.label,
      href: link.href,
    })),
  }))
}
