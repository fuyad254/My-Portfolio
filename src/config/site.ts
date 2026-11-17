export type SocialName = "github" | "linkedin" | "discord" | "whatsapp";

export type SocialLink = {
  name: SocialName;
  label: string;
  href: string;
  /** True when the URL is a placeholder that still needs to be replaced. */
  isPlaceholder?: boolean;
};

/**
 * Central place for personal details.
 *
 * Real values are taken from the repository (GitHub username from the project
 * links, email from the git commit author). Anything marked `isPlaceholder`
 * is intentionally left for the owner to fill in — update it here and every
 * section of the site picks it up.
 */
const socials: SocialLink[] = [
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    isPlaceholder: true,
  },
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/fuyad254",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/8801XXXXXXXXX",
    isPlaceholder: true,
  },
  {
    name: "discord",
    label: "Discord",
    href: "https://discord.com/users/your-discord-id",
    isPlaceholder: true,
  },
];

export const siteConfig = {
  name: "MD Fuyad Al Khatib",
  shortName: "Fuyad",
  initials: "MF",
  role: "Full Stack Developer",
  email: "mdfuyadalkhatib@gmail.com",
  phone: {
    label: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
    isPlaceholder: true,
  },
  location: {
    label: "Your City, Country",
    isPlaceholder: true,
  },
  resumeUrl: "/resume.pdf",
  socials,
} as const;

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const designations = [
  "Full Stack Developer",
  "Frontend Developer",
  "MERN Stack Developer",
  "Junior Software Engineer",
] as const;
