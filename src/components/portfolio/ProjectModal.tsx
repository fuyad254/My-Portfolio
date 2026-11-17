"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import {
  CheckIcon,
  CloseIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "@/components/icons";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";
import type { ProjectWithMedia } from "@/lib/types";

type ProjectModalProps = {
  project: ProjectWithMedia | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="animate-fade-in absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
        aria-describedby={`project-${project.id}-description`}
        className="animate-modal-in relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-[0_50px_140px_-40px_rgba(0,0,0,1)]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3.5 top-3.5 z-30 grid size-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-white/30 hover:bg-black/70"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-[2.2/1]">
            <ProjectMedia
              project={project}
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/15 to-transparent"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                {project.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Project 0{project.id}
              </span>
            </div>

            <h3
              id={`project-${project.id}-title`}
              className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-accent/80">
              {project.subtitle}
            </p>

            <p
              id={`project-${project.id}-description`}
              className="mt-5 text-pretty text-sm leading-relaxed text-muted sm:text-base"
            >
              {project.description}
            </p>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/80">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-fg/85"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/80">
                  Key features
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                    >
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                        <CheckIcon className="size-2.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#04211d] transition hover:bg-accent-strong"
                >
                  View Live
                  <ExternalLinkIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="No live URL was provided in the project data"
                  className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-muted/55"
                >
                  View Live
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/50">
                    No demo link
                  </span>
                </button>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-fg transition hover:border-accent/40 hover:bg-white/[0.06]"
              >
                View Code
                <GithubIcon className="size-4 text-accent transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
