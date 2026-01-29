
export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  metadata: Record<string, any>;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export enum NavigationTab {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  EXPERIENCE = 'EXPERIENCE',
  CONTACT = 'CONTACT'
}
