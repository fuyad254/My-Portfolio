import { cacheLife } from "next/cache";

import { ArrowUpIcon } from "@/components/icons";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navItems, siteConfig } from "@/config/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="relative border-t border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <span className="relative grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-semibold text-accent">
                {siteConfig.initials}
                <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(94,234,212,0.9)]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-fg">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {siteConfig.role}
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Building responsive, accessible web experiences with React,
              Next.js and TypeScript.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm text-muted transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
            <span className="font-medium text-fg">{siteConfig.name}</span>. All
            Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
              Built with Next.js &amp; Tailwind CSS
            </span>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-muted transition hover:text-accent"
            >
              Back to top
              <ArrowUpIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
