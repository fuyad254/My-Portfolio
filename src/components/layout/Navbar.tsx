"use client";

import { useEffect, useState } from "react";

import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/icons";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navItems, siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navItems[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      const marker = y + window.innerHeight * 0.35;
      let current: string = navItems[0].id;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + y;
        if (top <= marker) current = item.id;
      }

      setActive((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-3"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-semibold text-accent transition-colors group-hover:border-accent/40">
            {siteConfig.initials}
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(94,234,212,0.9)]" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[13px] font-semibold tracking-tight text-fg sm:text-[15px]">
              {siteConfig.name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted sm:block">
              {siteConfig.role}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-white/[0.06] text-fg"
                    : "text-muted hover:bg-white/[0.03] hover:text-fg"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-accent shadow-[0_0_10px_rgba(94,234,212,0.9)]"
                      : "bg-white/15"
                  }`}
                />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-muted transition hover:border-accent/40 hover:text-fg sm:inline-flex"
          >
            <DownloadIcon className="size-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-fg transition hover:border-accent/40 hover:text-accent"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-white/5"
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="animate-fade-in absolute inset-x-0 top-full border-b border-white/10 bg-canvas/95 backdrop-blur-2xl lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8"
          >
            {navItems.map((item, index) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition ${
                    isActive
                      ? "bg-white/[0.07] text-fg"
                      : "text-muted hover:bg-white/[0.04] hover:text-fg"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-accent/80">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full ${
                      isActive ? "bg-accent" : "bg-white/10"
                    }`}
                  />
                </a>
              );
            })}

            <div className="mt-3 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <SocialLinks names={["linkedin", "github", "discord"]} />
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#04211d] transition hover:bg-accent-strong"
              >
                <DownloadIcon className="size-4" />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
