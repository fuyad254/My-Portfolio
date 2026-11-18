import Image from "next/image";

import profileImage from "@/assets/Fuyad Photo.png";
import {
  ArrowRightIcon,
  CodeIcon,
  DownloadIcon,
  SparklesIcon,
} from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingTitles } from "@/components/ui/RotatingTitles";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -left-40 top-1/4 size-[30rem] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 size-[26rem] rounded-full bg-accent-2/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.15rem]">
              MD Fuyad
              <br />
              <span className="text-gradient">Al Khatib</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <RotatingTitles />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I design and build responsive web experiences with{" "}
              <span className="text-fg">React</span>,{" "}
              <span className="text-fg">Next.js</span> and{" "}
              <span className="text-fg">TypeScript</span> — pairing polished
              interfaces with the APIs, authentication and data that make them
              work.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.resumeUrl}
                download="fuyad-resume.pdf"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#04211d] shadow-[0_18px_45px_-18px_rgba(94,234,212,0.75)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                <DownloadIcon className="size-[18px] transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-fg transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.06]"
              >
                View My Work
                <ArrowRightIcon className="size-[18px] text-accent transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted/80">
                Find me on
              </span>
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent"
              />
              <SocialLinks names={["linkedin", "github", "discord"]} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative">
          <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-[27rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/25 blur-3xl"
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-[1.5px] overflow-hidden rounded-[2.15rem]"
              >
                <div className="conic-ring absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 animate-spin-slower opacity-70" />
              </div>
              <div className="relative overflow-hidden rounded-[2.05rem] border border-white/10 bg-surface p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={profileImage}
                    alt={`Portrait of ${siteConfig.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 82vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-accent/90">
                        Portfolio
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {siteConfig.name}
                      </p>
                    </div>
                    <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/10 text-accent backdrop-blur-md">
                      <CodeIcon className="size-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass absolute -left-3 top-10 flex animate-float items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-xl sm:-left-7">
              <span className="grid size-8 place-items-center rounded-lg bg-accent/15 text-accent">
                <CodeIcon className="size-4" />
              </span>
              <span className="text-xs font-semibold text-fg">MERN Stack</span>
            </div>

            <div
              className="glass absolute -right-2 bottom-16 flex animate-float-slow items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-xl sm:-right-6"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="grid size-8 place-items-center rounded-lg bg-accent-2/15 text-accent-2">
                <SparklesIcon className="size-4" />
              </span>
              <span className="text-xs font-semibold text-fg">
                Next.js + TypeScript
              </span>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-1/2 h-10 w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-2xl"
            />
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted transition hover:text-accent sm:flex"
      >
        Scroll
        <span
          aria-hidden="true"
          className="h-8 w-px bg-gradient-to-b from-accent/60 to-transparent"
        />
      </a>
    </section>
  );
}
