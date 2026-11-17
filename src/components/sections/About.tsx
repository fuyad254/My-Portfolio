import { CheckIcon, QuoteIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const highlights = [
  "Responsive layouts on every screen",
  "Accessible, keyboard-friendly interactions",
  "Reusable component-driven interfaces",
  "Full-stack fundamentals with the MERN stack",
];

const stackLines = [
  { key: "name", value: `"${siteConfig.name}"`, tone: "text-accent" },
  { key: "role", value: `"${siteConfig.role}"`, tone: "text-accent" },
  {
    key: "frontend",
    value: '["React", "Next.js", "TypeScript"]',
    tone: "text-accent-2",
  },
  {
    key: "styling",
    value: '["Tailwind CSS", "DaisyUI", "Bootstrap"]',
    tone: "text-accent-2",
  },
  {
    key: "backend",
    value: '["Node.js", "Express.js", "REST API"]',
    tone: "text-accent-3",
  },
  { key: "database", value: '["MongoDB", "Better Auth"]', tone: "text-accent-3" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-10 size-40 rounded-full bg-accent/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -right-8 size-48 rounded-full bg-accent-2/10 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.95)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted/70">
                  developer.ts
                </span>
                <span className="size-2.5 rounded-full bg-accent/20" aria-hidden="true" />
              </div>

              <div className="relative p-5 sm:p-6">
                <div
                  aria-hidden="true"
                  className="bg-grid absolute inset-0 opacity-20"
                />
                <pre className="relative overflow-x-auto font-mono text-[11.5px] leading-7 text-muted sm:text-xs">
                  <code>
                    <span className="text-accent-2">const</span>{" "}
                    <span className="text-fg">developer</span> ={" "}
                    <span className="text-muted">{"{"}</span>
                    {"\n"}
                    {stackLines.map((line) => (
                      <span key={line.key}>
                        {"  "}
                        <span className="text-fg/80">{line.key}</span>
                        <span className="text-muted">: </span>
                        <span className={line.tone}>{line.value}</span>
                        <span className="text-muted">,</span>
                        {"\n"}
                      </span>
                    ))}
                    <span className="text-muted">{"};"}</span>
                  </code>
                </pre>
              </div>
            </div>

            <div className="glass absolute -bottom-6 left-4 flex max-w-[16rem] items-start gap-3 rounded-2xl p-4 shadow-xl sm:-left-6">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                <QuoteIcon className="size-3.5" />
              </span>
              <p className="text-xs leading-relaxed text-muted">
                Good interfaces are built twice: once for the eyes, once for the
                people using them.
              </p>
            </div>

            <div className="glass absolute -right-2 -top-5 hidden items-center gap-2 rounded-full px-3.5 py-2 sm:flex">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(94,234,212,0.9)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Next.js 16 · React 19
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Turning ideas into interfaces that feel{" "}
                  <span className="text-gradient">effortless</span>.
                </>
              }
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-7 space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-[17px]">
              <p>
                I&apos;m <span className="font-medium text-fg">{siteConfig.name}</span>,
                a web developer focused on building modern, responsive
                applications with React and Next.js. I enjoy the point where a
                design becomes a real interface — clean layouts, thoughtful
                motion and the small details that make a page feel finished.
              </p>
              <p>
                My core stack is TypeScript, Tailwind CSS and the MERN toolset.
                I work with MongoDB and Better Auth for data and authentication,
                and I care about accessible markup, fast loading and layouts
                that hold up on every screen size.
              </p>
              <p>
                I&apos;m continually expanding the backend side with Node.js,
                Express and REST APIs — and I like projects that combine a
                strong visual layer with real functionality.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-3.5 py-3 text-sm text-muted"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
