import { siteConfig, type SocialName } from "@/config/site";
import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  discord: DiscordIcon,
  whatsapp: WhatsappIcon,
} satisfies Record<SocialName, typeof GithubIcon>;

type SocialLinksProps = {
  names?: SocialName[];
  variant?: "icon" | "pill";
  className?: string;
};

export function SocialLinks({
  names,
  variant = "icon",
  className = "",
}: SocialLinksProps) {
  const links = names
    ? siteConfig.socials.filter((social) => names.includes(social.name))
    : siteConfig.socials;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((social) => {
        const Icon = icons[social.name];
        const placeholderNote = social.isPlaceholder
          ? " (placeholder link — update src/config/site.ts)"
          : "";

        if (variant === "pill") {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${social.label}${placeholderNote}`}
                title={
                  social.isPlaceholder
                    ? `${social.label} — placeholder, update src/config/site.ts`
                    : social.label
                }
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white/[0.06] hover:text-fg"
              >
                <Icon className="size-4 transition-colors group-hover:text-accent" />
                {social.label}
              </a>
            </li>
          );
        }

        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label}${placeholderNote}`}
              title={
                social.isPlaceholder
                  ? `${social.label} — placeholder, update src/config/site.ts`
                  : social.label
              }
              className="group grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.06] hover:text-accent hover:shadow-[0_10px_34px_-14px_rgba(94,234,212,0.65)]"
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
