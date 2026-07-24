import { ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, TelegramIcon } from "@/components/ui/SocialIcons";
import settings from "@/data/settings.json";

const links = [
  { label: "Головна", href: "#hero" },
  { label: "Послуги", href: "#services" },
  { label: "Портфоліо", href: "#portfolio" },
  { label: "Команда", href: "#team" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-secondary/60 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-[0.1em] text-ink">
              {settings.brand}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">
              {settings.tagline}. Простір, де краса стає ритуалом турботи про
              себе — цілий рік, у всі чотири сезони.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: settings.socials.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: settings.socials.facebook, label: "Facebook" },
                { icon: TelegramIcon, href: settings.socials.telegram, label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-gold hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                Навігація
              </p>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-cursor="link"
                      className="font-sans text-sm text-ink transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                Контакти
              </p>
              <ul className="mt-4 space-y-3 font-sans text-sm text-ink">
                <li>
                  <a data-cursor="link" href={`tel:${settings.phoneHref}`}>
                    {settings.phone}
                  </a>
                </li>
                <li>
                  <a data-cursor="link" href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                </li>
                <li className="text-ink-soft">{settings.address}</li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                Графік
              </p>
              <ul className="mt-4 space-y-3 font-sans text-sm text-ink">
                {settings.workingHours.map((w) => (
                  <li key={w.days} className="flex flex-col">
                    <span className="text-ink-soft">{w.days}</span>
                    <span>{w.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="font-sans text-xs text-ink-soft">
            © {new Date().getFullYear()} {settings.brand}. Усі права захищено.
          </p>
          <a
            href="#hero"
            data-cursor="link"
            aria-label="Нагору"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-gold"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
