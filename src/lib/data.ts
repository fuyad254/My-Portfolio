import fs from "node:fs";
import path from "node:path";

import projectData from "../../data/project-data.json";
import skillsData from "../../data/Skills.json";

import type { Project, ProjectWithMedia, SkillGroup } from "./types";

export const skillGroups = skillsData as SkillGroup[];

/**
 * Projects from `data/project-data.json`, with a build-time check for whether
 * the referenced screenshot exists. Missing screenshots fall back to a designed
 * placeholder instead of a broken image.
 */
export function getProjects(): ProjectWithMedia[] {
  return (projectData as Project[]).map((project) => ({
    ...project,
    hasImage: fs.existsSync(
      path.join(process.cwd(), "public", project.image.replace(/^\//, "")),
    ),
  }));
}
