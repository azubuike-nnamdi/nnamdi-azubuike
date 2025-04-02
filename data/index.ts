import { ARTICLE_URL, PROJECT_URL } from "@/config/routes";
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
    uri: "https://github.com/iamclement1",
  },
  {
    id: 2,
    name: "Twitter",
    uri: "https://twitter.com/_iamclement_",
  },
  {
    id: 3,
    name: "LinkedIn",
    uri: "https://www.linkedin.com/in/nnamdi-azubuike/",
  },
];

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    name: "MTN Self-Service Portal",
    desc: "MTN Self-Service Portal is a platform that allows MTN customers to manage services. Services include: airtime top-up, data purchase, bill payment, and account information.",
    action: "View Project",
    uri: "https://selfservice.mtn.ng/",
  },
  {
    id: 2,
    name: "MTN Bulk SMS",
    desc: "MTN Bulk SMS is a platform that allows MTN customers to send bulk SMS to their customers.",
    action: "View Project",
    uri: "https://bulksms.mtn.ng/",
  },
  {
    id: 3,
    name: "Clouder",
    desc: "Clouder is Nigeria’s first e-portfolio platform for students in the health sciences and health care practitioners. ",
    action: "View Project",
    uri: "https://clouder-nu.vercel.app/",
  },
  {
    id: 4,
    name: "Triple R Salon",
    desc: "Triple R is a renowned full- service beauty salon that is synonymous with exceptional quality and unparalleled luxury.",
    action: "View Project",
    uri: "https://www.triplerunisexsalon.com/",
  },
  {
    id: 5,
    name: "Hostelpaddy",
    desc: "Your No.1 Solution for hostel accommodation An innovating way to relieve you of the hassle of hostel- hunting.",
    action: "View Project",
    uri: "https://hostelpaddy.netlify.app/",
  },
];

export const ArticlesData: ArticlesDataType[] = [
  {
    id: 1,
    date: "February, 22, 2023",
    readTime: "10",
    title:
      "Version Control System -  Introduction to Git & GitHub for beginners",
    desc: "Teamwork and collaboration are core parts of being a developer.With the help of a version control system, this has been made easier.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/version-control-system-introduction-to-git-github-for-beginners",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1677067733526/9596f4ef-a1f5-4e8b-9923-1a75f7825e9f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 2,
    date: "February, 16, 2023",
    readTime: "2",
    title: "Firebase Cloud Storage",
    desc: "Firebase Cloud Storage is a service that developers can use to store and download files generated directly by clients.No server - side code is needed.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/firebase-cloud-storage",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676491396712/58d4f90e-7e04-4263-a693-193ead1dcd64.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 3,
    date: "February, 14, 2023",
    readTime: "3",
    title: "Firebase Authentication",
    readMore: "Read Articles",
    desc: "Google Firebase is a Google - backed application development software that enables developers to develop iOS, Android, and Web apps.",
    uri: "https://iamclement.hashnode.dev/firebase-google-authentication-in-react",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676374457613/22ef4d3a-ce0a-4713-9672-08635781c99b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 4,
    date: "October, 15 2022",
    readTime: "1",
    title: "How to send bearer token in header with Axios",
    uri: "https://iamclement.hashnode.dev/how-to-send-bearer-token-in-a-header-with-axios",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1665831450916/fMX8AtuCK.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 5,
    date: "August, 27 2022",
    readTime: "3",
    title: "Deploy a Full-Stack Application with AWS",
    uri: "https://iamclement.hashnode.dev/deploy-a-full-stack-react-application-aws",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1661595560452/0SwqaZg_j.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 6,
    date: "August, 4 2022",
    readTime: "4",
    title: "Javascript Variable",
    uri: "https://iamclement.hashnode.dev/javascript-variables",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1661168848738/CHspYHa_l.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 7,
    date: "May, 21 2022",
    readTime: "4",
    title: "HTML, and why it is a must for every website",
    uri: "https://iamclement.hashnode.dev/html-and-why-it-is-a-must-for-every-website",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1653134833768/2nusBVtgN.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 8,
    date: "May, 13 2022",
    readTime: "4",
    title: "Axios for API Call",
    uri: "https://iamclement.hashnode.dev/axios-for-api-call",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1652430698141/spGdpbGem.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
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
