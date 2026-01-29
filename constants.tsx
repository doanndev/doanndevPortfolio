import { Project, Experience } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "golden-game",
    name: "golden-game/",
    description:
      "Developed backend services and smart contracts for real-time gameplay, P2P trading, and asset swap modules.",
    techStack: ["NestJS", "WebSocket", "PostgreSQL", "Redis", "JWT", "Anchor"],
    image: "/public/imgs/goldengame.png",
    githubUrl: "https://github.com/doanndev/golden-game",
    demoUrl: "/projects/golden-game",
    metadata: {
      realtime: true,
      onchain: true,
    },
  },
  {
    id: "youtube-automation",
    name: "youtube-automation/",
    description:
      "Built a desktop automation system handling YouTube interactions, proxy integration, and secure authentication.",
    techStack: ["Django", "Electron", "PostgreSQL"],
    image: "/public/imgs/youtubetool.png",
    demoUrl: "/projects/youtube-automation",
    githubUrl: "https://github.com/doanndev/youtube-automation",
    metadata: {
      platform: "desktop",
      automation: true,
    },
  },
  {
    id: "memepump-launchpad",
    name: "memepump-launchpad/",
    description:
      "Implemented backend services and smart contracts for token creation, real-time trading, and bonding curve logic.",
    techStack: ["NestJS", "WebSocket", "PostgreSQL", "Anchor"],
    image: "/public/imgs/memepump.png",
    githubUrl: "https://github.com/doanndev/memepump-launchpad",
    demoUrl: "/projects/memepump-launchpad",
    // docsUrl: 'https://docs.memepump.io',
    metadata: {
      trading: "real-time",
      onchain: true,
    },
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Mirae Company",
    role: "Remote Backend Developer",
    period: "01/2025 - 11/2025",
    achievements: [
      "Built scalable backend APIs",
      "Optimized system performance",
      "Collaborated in remote agile teams",
    ],
  },
  {
    company: "Izi Software Company",
    role: "Backend Developer",
    period: "09/2024 - 12/2024",
    achievements: [
      "Developed backend services",
      "Integrated databases and APIs",
      "Improved code quality and stability",
    ],
  },
];
