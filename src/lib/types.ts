export type Skill = {
  name: string;
  level: string;
};

export type SkillGroup = {
  id: number;
  category: string;
  skills: Skill[];
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
};

export type ProjectWithMedia = Project & {
  /** Whether the referenced image actually exists in `public/`. */
  hasImage: boolean;
};
