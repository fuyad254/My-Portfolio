import {
  CodeIcon,
  DatabaseIcon,
  LayersIcon,
  ServerIcon,
  SparklesIcon,
  WrenchIcon,
} from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

const monograms: Record<string, string> = {
  HTML5: "H5",
  CSS3: "C3",
  "JavaScript (ES6+)": "JS",
  "React.js": "Re",
  "Next.js": "N",
  TypeScript: "TS",
  "Tailwind CSS": "TW",
  "Bootstrap 5": "B5",
  DaisyUI: "D",
  "Responsive Web Design": "RWD",
  "Figma to HTML": "F",
  "PSD to HTML": "PS",
  "Adobe XD to HTML": "XD",
  "Node.js": "N",
  "Express.js": "EX",
  "REST API": "API",
  "CRUD Operations": "CRUD",
  MongoDB: "M",
  "Better Auth": "BA",
  "Google OAuth": "G",
  "GitHub OAuth": "GH",
  Git: "GIT",
  GitHub: "GH",
  "VS Code": "VS",
  Vercel: "▲",
  "Swiper.js": "SW",
  "React Icons": "RI",
  "Lucide Icons": "LI",
};

function getMonogram(name: string) {
  if (monograms[name]) return monograms[name];
  const words = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function getCategoryVisual(category: string) {
  const value = category.toLowerCase();

  if (value.includes("frontend")) {
    return {
      Icon: CodeIcon,
      tile: "bg-accent/12 text-accent ring-accent/20",
      dot: "bg-accent",
    };
  }
  if (value.includes("backend")) {
    return {
      Icon: ServerIcon,
      tile: "bg-accent-2/12 text-accent-2 ring-accent-2/20",
      dot: "bg-accent-2",
    };
  }
  if (value.includes("database") || value.includes("auth")) {
    return {
      Icon: DatabaseIcon,
      tile: "bg-accent-3/12 text-accent-3 ring-accent-3/20",
      dot: "bg-accent-3",
    };
  }
  if (value.includes("ai") || value.includes("machine")) {
    return {
      Icon: SparklesIcon,
      tile: "bg-fuchsia-400/12 text-fuchsia-300 ring-fuchsia-400/20",
      dot: "bg-fuchsia-300",
    };
  }
  if (value.includes("tool")) {
    return {
      Icon: WrenchIcon,
      tile: "bg-sky-400/12 text-sky-300 ring-sky-400/20",
      dot: "bg-sky-300",
    };
  }

  return {
    Icon: LayersIcon,
    tile: "bg-white/8 text-fg ring-white/15",
    dot: "bg-white/60",
  };
}

function levelTone(level: string) {
  const value = level.toLowerCase();
  if (value.includes("proficient")) return "text-accent";
  if (value.includes("working")) return "text-accent-3";
  return "text-muted";
}

export function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-10 size-[34rem] -translate-x-1/2 rounded-full bg-accent-2/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title={
                <>
                  A toolkit for building{" "}
                  <span className="text-gradient">end-to-end</span>.
                </>
              }
              description="A practical toolkit spanning interface engineering, backend fundamentals and the tools I use every day."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="grid size-9 place-items-center rounded-xl bg-accent/12 text-accent">
                <LayersIcon className="size-4" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Loaded from data
                </p>
                <p className="text-sm font-semibold text-fg">
                  {skillGroups.length} categories · {totalSkills} skills
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const { Icon, tile, dot } = getCategoryVisual(group.category);

            return (
              <Reveal key={group.id} delay={index * 80}>
                <article className="card-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-2xl ring-1 ${tile}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-fg">
                          {group.category}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted">
                          {group.skills.length}{" "}
                          {group.skills.length === 1 ? "skill" : "skills"}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted/50">
                      0{index + 1}
                    </span>
                  </div>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {group.skills.map((skill) => {
                      const label = getMonogram(skill.name);
                      return (
                        <li
                          key={skill.name}
                          className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition duration-300 hover:border-white/12 hover:bg-white/[0.045]"
                        >
                          <span
                            aria-hidden="true"
                            className={`grid size-8 shrink-0 place-items-center rounded-lg border border-white/8 bg-white/[0.03] font-mono font-semibold text-fg/75 transition-colors group-hover:text-fg ${
                              label.length > 3
                                ? "text-[8px]"
                                : label.length > 2
                                  ? "text-[9px]"
                                  : "text-[11px]"
                            }`}
                          >
                            {label}
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[13px] font-medium text-fg/90">
                              {skill.name}
                            </span>
                            <span className="mt-0.5 flex items-center gap-1.5">
                              <span
                                aria-hidden="true"
                                className={`size-1 rounded-full ${dot}`}
                              />
                              <span
                                className={`font-mono text-[9px] uppercase tracking-[0.12em] ${levelTone(
                                  skill.level,
                                )}`}
                              >
                                {skill.level}
                              </span>
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
