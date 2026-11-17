# MD Fuyad Al Khatib — Portfolio

A single-page developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. The site is data-driven: projects and skills come from JSON files, and all personal details live in one config file.

## Features

- Sticky, responsive navbar with active-section tracking, scroll progress, smooth scrolling, and a mobile menu.
- Hero with rotating designations, profile photo in an animated frame, social links, and resume download.
- About section with a code-themed visual and professional introduction.
- Skills loaded from `data/Skills.json`, grouped by category with proficiency labels.
- Portfolio loaded from `data/project-data.json` in a responsive card grid, with an accessible details modal (focus trap, Escape, outside click, scroll lock).
- Contact section with validated form, contact details, and social links. The form does **not** send email — it shows an honest notice and a prefilled `mailto:` fallback.
- Dark premium theme, scroll-reveal animations, reduced-motion support, skip link, and responsive layouts from 320px up.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run dev     # development server (Turbopack)
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

There is no test runner configured. Verify changes with `npm run lint`, `npx tsc --noEmit`, `npm run build`, and the dev server.

## Project structure

```txt
data/
  project-data.json          Project cards (source of truth)
  Skills.json                Skill groups and proficiency levels
public/
  resume.pdf                 PLACEHOLDER resume — replace with your CV
  images/                    Add project screenshots here (optional)
src/
  app/
    layout.tsx               Fonts, metadata, skip link, page shell
    page.tsx                 Composes the one-page layout
    globals.css              Tailwind v4 theme, animations, reveal styles
  assets/                    Bundled images (profile photo)
  components/
    layout/                  Navbar, Footer
    sections/                Hero, About, Skills, Portfolio, Contact
    portfolio/               Project card, media fallback, modal
    ui/                      Reveal, SectionHeading, SocialLinks, RotatingTitles
    icons.tsx                Inline SVG icon set
  config/site.ts             Personal info, socials, nav items, designations
  lib/                       Data helpers, types, reduced-motion hook
```

The `@/*` path alias maps to `src/*`.

## Customizing

### Personal details

Edit `src/config/site.ts`:

- `name`, `shortName`, `initials`, `role`
- `email`, `phone`, `location`
- `resumeUrl` (defaults to `/resume.pdf`)
- `socials` — LinkedIn, GitHub, WhatsApp, Discord
- `navItems` and `designations`

Anything with `isPlaceholder: true` is intentionally unfinished. The contact section displays a visible note listing the placeholders. Update the values, then remove the `isPlaceholder` flags and the note in `src/components/sections/Contact.tsx`.

### Resume

`public/resume.pdf` is a generated placeholder that says to replace it. Overwrite it with your real CV (keep the filename, or update `resumeUrl`).

### Projects

Edit `data/project-data.json`. Each entry uses:

```json
{
  "id": 1,
  "title": "Book Nook",
  "subtitle": "Book Discovery & Sharing Platform",
  "category": "Web Application",
  "description": "...",
  "technologies": ["Next.js", "React"],
  "features": ["...", "..."],
  "github": "https://github.com/fuyad254/Book-Nook",
  "live": "",
  "image": "/images/book-nook.png"
}
```

- `live` may be empty. The modal then shows a disabled “View Live” button instead of a broken link.
- Add screenshots under `public/images/` using the exact `image` paths. Until a file exists, a designed “Preview soon” artwork is rendered instead of a broken image (checked at build time in `src/lib/data.ts`).
- Keep new fields backward-compatible, or update every entry and the `Project` type in `src/lib/types.ts`.

### Skills

Edit `data/Skills.json`:

```json
{
  "id": 1,
  "category": "Frontend Development",
  "skills": [{ "name": "React.js", "level": "Proficient" }]
}
```

The section renders every group and skill that exists in the file. Adding an `AI` category will render automatically. Do not add percentage values unless you have real data for them.

### Contact form

Validation is client-side only. On a valid submit the form does **not** pretend to send; it shows a notice and an “Open in email app” link built with `mailto:`.

To connect a real service, replace `handleSubmit` in `src/components/sections/Contact.tsx` with a request to your API route or email provider, and update the notice.

## Notes

- `cacheComponents: true` is enabled. `new Date()` in a Server Component blocks prerendering, so the footer year is computed in a cached function with `cacheLife("max")` in `src/components/layout/Footer.tsx`.
- `reactCompiler: true` is enabled — avoid manual `useMemo` / `useCallback` / `memo`.
- Tailwind v4 has no JS config. Theme tokens are defined with `@theme` in `src/app/globals.css`.
- Project images, the resume, and placeholder personal details are the only intentionally unfinished pieces.

## Deploy

Deploy on [Vercel](https://vercel.com/new) or any host that supports Next.js. Run `npm run build` before deploying.
