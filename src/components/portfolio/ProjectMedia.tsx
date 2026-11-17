import Image from "next/image";

import type { ProjectWithMedia } from "@/lib/types";

const palettes = [
  {
    base: "from-[#0b2b33] via-[#081720] to-[#05080d]",
    glow: "bg-accent/25",
    accent: "text-accent",
  },
  {
    base: "from-[#2a1d0b] via-[#171008] to-[#08060a]",
    glow: "bg-accent-3/20",
    accent: "text-accent-3",
  },
  {
    base: "from-[#181b38] via-[#0e1026] to-[#070811]",
    glow: "bg-accent-2/25",
    accent: "text-accent-2",
  },
] as const;

type ProjectMediaProps = {
  project: ProjectWithMedia;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function ProjectMedia({
  project,
  sizes,
  priority = false,
  className = "",
}: ProjectMediaProps) {
  if (project.hasImage) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  const palette = palettes[(project.id - 1) % palettes.length];

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${palette.base} ${className}`}
      role="img"
      aria-label={`${project.title} preview artwork. A project screenshot has not been added yet.`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-20 size-64 rounded-full ${palette.glow} blur-3xl`}
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.09),transparent_55%)]"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-sm">
            Preview soon
          </span>
        </div>

        <div>
          <p
            className={`font-mono text-[9px] uppercase tracking-[0.26em] ${palette.accent}`}
          >
            {project.subtitle}
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </p>
          <div aria-hidden="true" className="mt-4 flex items-center gap-1.5">
            <span className="h-1 w-12 rounded-full bg-white/40" />
            <span className="h-1 w-6 rounded-full bg-white/20" />
            <span className="h-1 w-3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
