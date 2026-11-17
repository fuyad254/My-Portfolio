"use client";

import { useState } from "react";

import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import type { ProjectWithMedia } from "@/lib/types";

type PortfolioProps = {
  projects: ProjectWithMedia[];
};

export function Portfolio({ projects }: PortfolioProps) {
  const [selected, setSelected] = useState<ProjectWithMedia | null>(null);

  const github = siteConfig.socials.find((social) => social.name === "github");

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-1/3 size-[28rem] rounded-full bg-accent/[0.06] blur-[140px]" />
        <div className="absolute -right-40 bottom-1/4 size-[26rem] rounded-full bg-accent-2/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title={
                <>
                  Selected <span className="text-gradient">work</span>.
                </>
              }
              description="A few projects that show how I approach interfaces, data and the details in between. Open any card for the full story."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {String(projects.length).padStart(2, "0")} projects
              </span>
              {github ? (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <GithubIcon className="size-4 text-accent" />
                  More on GitHub
                  <ArrowUpRightIcon className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 90}
                className="h-full"
              >
                <ProjectCard project={project} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-muted">
            No projects found in <code>data/project-data.json</code>.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
