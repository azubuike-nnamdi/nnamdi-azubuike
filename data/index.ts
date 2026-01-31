import { ARTICLE_URL, GITHUB_URL, LINKEDIN_URL, PROJECT_URL, RESUME_URL, TWITTER_URL } from "@/config/routes";
import { Article, FooterItemType, NavLinks, PortfolioItem, ProjectDataType } from "@/lib/definitions";

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
    desc: "Numoni Web is a modern, high-performance merchant portal built with Next.js 15+ and React 19. I architected and developed this comprehensive dashboard enabling merchants to manage branches, track transactions, and configure business settings. Implemented advanced state management with Zustand and React Query for optimal data fetching and caching, delivering a premium UI/UX with shadcn components and Tailwind CSS.",
    action: "View Project",
    uri: "https://merchant.numoni.io/",
    technologies: ["Zustand", "Next.js", "Tailwind CSS", "TanStack Query", "TypeScript", "React", "shadcn"],
  },
  {
    id: 2,
    name: "MTN FibreX Portal",
    desc: "As Senior Frontend Engineer at MTN Nigeria, I built this seamless self-service platform serving thousands of customers for fibre data plan management and payments. I configured the SIT, UAT, and production environment servers on the Nginx server, whilst managing a team of 6 developers as the team lead. Implemented responsive UI components using Next.js and Tailwind CSS, and integrated secure payment flows. Utilized Zustand for state management and TanStack Query for efficient data synchronization with backend APIs.",
    action: "View Project",
    uri: "https://fibrex.mtn.ng/",
    technologies: ["Zustand", "Next.js", "Tailwind CSS", "TanStack Query", "TypeScript", "React", "shadcn"],
  },
  {
    id: 3,
    name: "MTN Self-Service Portal",
    desc: "Led frontend development for this large-scale React and Next.js portal serving 1M+ monthly users at MTN Nigeria. Built user-facing features for airtime top-up, data purchases, bill payments, and account management. I configured the SIT, UAT, and production environment servers on the Nginx server, whilst managing a team of 6 developers as the team lead. Implemented the organisation-wide design system. Collaborated with backend teams to deliver scalable, maintainable solutions with optimal performance and accessibility.",
    action: "View Project",
    uri: "https://selfservice.mtn.ng/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Zustand", "shadcn"],
  },
  {
    id: 4,
    name: "Weavii",
    desc: "As Senior Frontend Engineer for this Berlin-based music platform, I developed features enabling artists and fans to connect through video uploads, likes, comments, and reshares. Designed and built reusable UI components and design frameworks that significantly improved code maintainability and developer productivity. Configured unit tests using Jest and React Testing Library to ensure reliability and catch regressions in critical user flows.",
    action: "View Project",
    uri: "https://weavii.io/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Jest", "React Testing Library"],
  },
  {
    id: 5,
    name: "MTN Bulk SMS",
    desc: "Developed this enterprise-grade bulk SMS platform at MTN Nigeria, enabling businesses to send mass communications to customers. I configured the SIT, UAT, and production environment servers on the Nginx server, whilst managing a team of 6 developers as the team lead. Built the purchase flow and usage tracking dashboard, and implemented responsive UI components. Integrated with backend APIs for real-time SMS delivery status and analytics, serving high-traffic enterprise use cases.",
    action: "View Project",
    uri: "https://bulksms.mtn.ng/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustand", "shadcn"],
  },
  {
    id: 6,
    name: 'Hyeameha',
    desc: 'Built this comprehensive travel services platform designed to make travel experiences seamless and unforgettable. Developed responsive, user-friendly interfaces using Next.js and Tailwind CSS with shadcn components. Implemented booking flows, service discovery features, and integrated payment systems to deliver a complete travel management solution.',
    action: 'View Project',
    uri: 'https://www.hyeameha.com/',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn', 'TypeScript', 'React'],
  },
  {
    id: 7,
    name: "Clouder",
    desc: "Developed Nigeria's first e-portfolio platform for health sciences students and healthcare practitioners. Built interactive portfolio creation and management features using React and Next.js, enabling users to showcase their professional journey. Implemented responsive design patterns and integrated backend APIs for secure data management and user authentication.",
    action: "View Project",
    uri: "https://clouder-nu.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 8,
    name: "Triple R Salon",
    desc: "Created a premium website for this renowned full-service beauty salon, emphasizing exceptional quality and luxury. Developed elegant, responsive layouts using Next.js and Tailwind CSS, implemented service booking interfaces, and ensured optimal performance and SEO for maximum online visibility.",
    action: "View Project",
    uri: "https://www.triplerunisexsalon.com/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
  },
  {
    id: 9,
    name: "Hostelpaddy",
    desc: "Built this innovative hostel accommodation platform that relieves students of hostel-hunting hassles. Developed search and filtering features, property listing interfaces, and booking flows using React and Next.js. Implemented responsive design for mobile-first user experience and integrated backend APIs for real-time availability and reservations.",
    action: "View Project",
    uri: "https://hostelpaddy.netlify.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export const ArticlesData: Article[] = [
  {
    id: 1,
    date: "January 1, 2026",
    readTime: "7",
    title: "Setting Up ESLint, Prettier, Husky, and Commitlint in Your Expo React Native Project: A Complete Guide",
    desc: "Setting up ESLint, Prettier, Husky, and Commitlint in your Expo React Native project is a crucial step towards maintaining code quality and consistency across your development team. These tools help enforce coding standards, catch potential errors early, and ensure that your codebase remains clean and maintainable as your project grows.",
    readMore: "Read Articles",
    uri: "https://medium.com/@nnamdi-azubuike/setting-up-eslint-prettier-husky-and-commitlint-in-your-expo-react-native-project-a-complete-550bd225f879",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*E2x-uNjCNzkMEUot.png",
    category: ['mobile', 'development', 'security']
  },
  {
    id: 2,
    date: "February, 22, 2023",
    readTime: "10",
    title: "Version Control System -  Introduction to Git & GitHub for beginners",
    desc: "Teamwork and collaboration are core parts of being a developer.With the help of a version control system, this has been made easier.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/version-control-system-introduction-to-git-github-for-beginners",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677067733526/9596f4ef-a1f5-4e8b-9923-1a75f7825e9f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Development"]
  },
  {
    id: 3,
    date: "February, 16, 2023",
    readTime: "2",
    title: "Firebase Cloud Storage",
    desc: "Firebase Cloud Storage is a service that developers can use to store and download files generated directly by clients.No server - side code is needed.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/firebase-cloud-storage",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676491396712/58d4f90e-7e04-4263-a693-193ead1dcd64.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Firebase"]
  },
  {
    id: 4,
    date: "February, 14, 2023",
    readTime: "3",
    title: "Firebase Authentication",
    readMore: "Read Articles",
    desc: "Google Firebase is a Google - backed application development software that enables developers to develop iOS, Android, and Web apps.",
    uri: "https://iamclement.hashnode.dev/firebase-google-authentication-in-react",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676374457613/22ef4d3a-ce0a-4713-9672-08635781c99b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Firebase"]
  },
  {
    id: 5,
    date: "October, 15 2022",
    readTime: "1",
    title: "How to send bearer token in header with Axios",
    uri: "https://iamclement.hashnode.dev/how-to-send-bearer-token-in-a-header-with-axios",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1665831450916/fMX8AtuCK.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["API"]
  },
  {
    id: 6,
    date: "August, 27 2022",
    readTime: "3",
    title: "Deploy a Full-Stack Application with AWS",
    uri: "https://iamclement.hashnode.dev/deploy-a-full-stack-react-application-aws",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661595560452/0SwqaZg_j.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["DevOps"]
  },
  {
    id: 7,
    date: "August, 4 2022",
    readTime: "4",
    title: "Javascript Variable",
    uri: "https://iamclement.hashnode.dev/javascript-variables",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661168848738/CHspYHa_l.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["JavaScript"]
  },
  {
    id: 8,
    date: "May, 21 2022",
    readTime: "4",
    title: "HTML, and why it is a must for every website",
    uri: "https://iamclement.hashnode.dev/html-and-why-it-is-a-must-for-every-website",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1653134833768/2nusBVtgN.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["HTML"]
  },
  {
    id: 9,
    date: "May, 13 2022",
    readTime: "4",
    title: "Axios for API Call",
    uri: "https://iamclement.hashnode.dev/axios-for-api-call",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1652430698141/spGdpbGem.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["API"]
  }
];

export const FooterData: FooterItemType[] = [
  {
    id: 1,
    title: "Find Me Here",
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
