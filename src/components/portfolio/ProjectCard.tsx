"use client";

import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import type { ProjectWithMedia } from "@/lib/types";

type ProjectCardProps = {
  project: ProjectWithMedia;
  onOpen: (project: ProjectWithMedia) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/60 transition duration-500 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectMedia
          project={project}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
          <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
          {project.category}
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] text-accent/80">
          {project.subtitle}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-muted"
            >
              {technology}
            </span>
          ))}
          {project.technologies.length > 4 ? (
            <span className="rounded-md border border-accent/15 bg-accent/[0.06] px-2 py-1 text-[10px] font-medium text-accent">
              +{project.technologies.length - 4}
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="text-xs font-medium text-muted transition-colors group-hover:text-fg">
            View project details
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#04211d]">
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          // Keep the trigger focused so closing the modal can return focus here.
          event.currentTarget.focus();
          onOpen(project);
        }}
        aria-label={`Open details for ${project.title}`}
        className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
      />
    </article>
  );
}
