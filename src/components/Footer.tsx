import { siteConfig } from "@/config/site";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.6v8h3.4z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M16.5 3c.5 2 1.9 3.6 3.8 4.2v2.7a7.3 7.3 0 01-3.8-1.2v6.4a5.9 5.9 0 11-5.9-5.9c.3 0 .7 0 1 .1v2.8a3.1 3.1 0 00-1-.2 3.1 3.1 0 103.1 3.1V3h2.8z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M12.04 2A9.9 9.9 0 002.2 11.84c0 1.74.46 3.45 1.33 4.96L2 22l5.34-1.4a9.9 9.9 0 004.7 1.2h.01A9.9 9.9 0 0022 11.86 9.87 9.87 0 0012.04 2zm5.77 14.05c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.13.07-1.82-.12-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.15-.2-1.19-1.58-1.19-3.02 0-1.44.76-2.14 1.03-2.44.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.59.82 2.03.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.64 2.03 1.13 1 2.09 1.31 2.39 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.7-.16 1.4z" />
        </svg>
      );
    default:
      return <span className="text-sm font-semibold">{icon.slice(0, 1)}</span>;
  }
}

export default function Footer() {
  return (
    <footer id="horario" className="bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {siteConfig.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-surface-light text-foreground transition hover:bg-surface"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
        <p className="text-base text-foreground sm:text-lg">{siteConfig.schedule}</p>
        <p className="font-serif text-lg font-semibold text-foreground sm:text-xl">
          {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
