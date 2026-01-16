import { ARTICLE_URL, GITHUB_URL, LINKEDIN_URL, PROJECT_URL, RESUME_URL, TWITTER_URL } from "@/config/routes";
import { ArticlesDataType, FooterItemType, NavLinks, PortfolioItem, ProjectDataType } from "@/lib/definitions";

export const NavData: NavLinks[] = [
  {
    id: 1,
    name: "Projects",
    href: PROJECT_URL,
  },
  {
    id: 2,
    name: "Articles",
    href: ARTICLE_URL,
  },
  // {
  //   id: 3,
  //   name: "Talks",
  //   href: "/talks",
  // },
];

export const PortfolioData: PortfolioItem[] = [
  {
    id: 1,
    name: "Github",
    uri: GITHUB_URL,
  },
  {
    id: 2,
    name: "Twitter",
    uri: TWITTER_URL,
  },
  {
    id: 3,
    name: "LinkedIn",
    uri: LINKEDIN_URL,
  },
  {
    id: 4,
    name: "Resume/CV",
    uri: RESUME_URL,
  },
];

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    name: "Numoni ",
    desc: "Numoni Web is a modern, high-performance merchant portal built with Next.js 15+ and React 19. It provides merchants with a comprehensive dashboard to manage branches, track transactions, and configure business settings with a premium UI/UX.",
    action: "View Project",
    uri: "https://merchant.numoni.io/",
    technologies: ["Zustand", "Next.js", "Tailwind CSS", "TanStack Query", "TypeScript", "React", "shadcn"],
  },
  {
    id: 2,
    name: "MTN FibreX Portal",
    desc: "MTN FibreX Portal provides a seamless platform where customers can top up, upgrade their fibre data plans, and make payments with a premium UI/UX.",
    action: "View Project",
    uri: "https://fibrex.mtn.ng/",
    technologies: ["Zustand", "Next.js", "Tailwind CSS", "TanStack Query", "TypeScript", "React", "shadcn"],
  },
  {
    id: 3,
    name: "MTN Self-Service Portal",
    desc: "MTN Self-Service Portal is a platform that allows MTN customers to manage services. Services include: airtime top-up, data purchase, bill payment, and account information.",
    action: "View Project",
    uri: "https://selfservice.mtn.ng/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    name: "Weavii",
    desc: "Weavii is a platform that connect and collaborate with other artists, discover gigs and opportunities, portray your artistic world & more.",
    action: "View Project",
    uri: "https://weavii.io/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    name: "MTN Bulk SMS",
    desc: "MTN Bulk SMS is a platform that allows MTN customers to send bulk SMS to their customers.",
    action: "View Project",
    uri: "https://bulksms.mtn.ng/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    name: 'Hyeameha',
    desc: 'Hyeameha is designed to make your travel experience seamless, enjoyable, and unforgettable by offering a wide range of services tailored to meet all your travel needs',
    action: 'View Project',
    uri: 'https://www.hyeameha.com/',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    id: 7,
    name: "Clouder",
    desc: "Clouder is Nigeria's first e-portfolio platform for students in the health sciences and health care practitioners. ",
    action: "View Project",
    uri: "https://clouder-nu.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Python", "MongoDB"],
  },
  {
    id: 8,
    name: "Triple R Salon",
    desc: "Triple R is a renowned full- service beauty salon that is synonymous with exceptional quality and unparalleled luxury.",
    action: "View Project",
    uri: "https://www.triplerunisexsalon.com/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
  },
  {
    id: 9,
    name: "Hostelpaddy",
    desc: "Your No.1 Solution for hostel accommodation An innovating way to relieve you of the hassle of hostel- hunting.",
    action: "View Project",
    uri: "https://hostelpaddy.netlify.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
  },
];

export const ArticlesData: ArticlesDataType[] = [
  {
    id: 1,
    date: "February, 22, 2023",
    readTime: "10",
    title: "Version Control System -  Introduction to Git & GitHub for beginners",
    desc: "Teamwork and collaboration are core parts of being a developer.With the help of a version control system, this has been made easier.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/version-control-system-introduction-to-git-github-for-beginners",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677067733526/9596f4ef-a1f5-4e8b-9923-1a75f7825e9f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "Development"
  },
  {
    id: 2,
    date: "February, 16, 2023",
    readTime: "2",
    title: "Firebase Cloud Storage",
    desc: "Firebase Cloud Storage is a service that developers can use to store and download files generated directly by clients.No server - side code is needed.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/firebase-cloud-storage",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676491396712/58d4f90e-7e04-4263-a693-193ead1dcd64.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "Firebase"
  },
  {
    id: 3,
    date: "February, 14, 2023",
    readTime: "3",
    title: "Firebase Authentication",
    readMore: "Read Articles",
    desc: "Google Firebase is a Google - backed application development software that enables developers to develop iOS, Android, and Web apps.",
    uri: "https://iamclement.hashnode.dev/firebase-google-authentication-in-react",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676374457613/22ef4d3a-ce0a-4713-9672-08635781c99b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "Firebase"
  },
  {
    id: 4,
    date: "October, 15 2022",
    readTime: "1",
    title: "How to send bearer token in header with Axios",
    uri: "https://iamclement.hashnode.dev/how-to-send-bearer-token-in-a-header-with-axios",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1665831450916/fMX8AtuCK.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "API"
  },
  {
    id: 5,
    date: "August, 27 2022",
    readTime: "3",
    title: "Deploy a Full-Stack Application with AWS",
    uri: "https://iamclement.hashnode.dev/deploy-a-full-stack-react-application-aws",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661595560452/0SwqaZg_j.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "DevOps"
  },
  {
    id: 6,
    date: "August, 4 2022",
    readTime: "4",
    title: "Javascript Variable",
    uri: "https://iamclement.hashnode.dev/javascript-variables",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661168848738/CHspYHa_l.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "JavaScript"
  },
  {
    id: 7,
    date: "May, 21 2022",
    readTime: "4",
    title: "HTML, and why it is a must for every website",
    uri: "https://iamclement.hashnode.dev/html-and-why-it-is-a-must-for-every-website",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1653134833768/2nusBVtgN.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "HTML"
  },
  {
    id: 8,
    date: "May, 13 2022",
    readTime: "4",
    title: "Axios for API Call",
    uri: "https://iamclement.hashnode.dev/axios-for-api-call",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1652430698141/spGdpbGem.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: "API"
  }
];

export const FooterData: FooterItemType[] = [
  {
    id: 1,
    title: "Where To Find Me",
    github: "GitHub",
    githubUri: "https://github.com/iamclement1",
    linkedIn: "LinkedIn",
    linkedInUri: "https://www.linkedin.com/in/clementnnamdi/",
    twitter: "Twitter",
    twitterUri: "https://twitter.com/_iamclement_",
    email: "Email",
    emailUri: "acu.nnamdi@gmail.com",
  },
  {
    id: 2,
    title: "Communities",
    gdgIlorin: "GDG Ilorin",
    gdgIlorinUri: "https://gdg.community.dev/gdg-ilorin/",
    gdgIbadan: "GDG Ibadan",
    gdgIbadanUri: "https://gdg.community.dev/gdg-ibadan/",
    kwarabuild: "Kwarabuild",
    kwarabuildUri: "https://kwarabuild.com/",
    africa: "Africa's Talking",
    africaUri: "https://africastalking.com/",
  },
  {
    id: 3,
    title: "Quick Links",
    home: "Home",
    homeUri: "/",
    projects: "Projects",
    projectsUri: PROJECT_URL,
    articles: "Articles",
    articlesUri: ARTICLE_URL,
  },
];
