"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import settings from "@/data/settings.json";

const links = [
  { label: "Головна", href: "#hero" },
  { label: "Послуги", href: "#services" },
  { label: "Портфоліо", href: "#portfolio" },
  { label: "Команда", href: "#team" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-500 md:px-8 ${
          scrolled ? "glass mx-4 py-2 shadow-[0_8px_30px_rgba(42,39,37,0.06)] md:mx-auto" : "py-1"
        }`}
      >
        <a
          href="#hero"
          data-cursor="link"
          className="font-display text-lg tracking-[0.15em] text-ink md:text-xl"
        >
          {settings.brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="link"
              className="font-sans text-[13px] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            as="a"
            href="#booking"
            className="rounded-full bg-ink px-6 py-3 font-sans text-[13px] uppercase tracking-[0.12em] text-bg transition-colors hover:bg-ink/90"
          >
            Записатися
          </MagneticButton>
        </div>

        <button
          data-cursor="link"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[75] flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-bg lg:hidden"
          >
            <motion.nav
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col items-center justify-center gap-7"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                  className="font-display text-3xl text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setOpen(false)}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + links.length * 0.05, duration: 0.5 }}
                className="mt-4 rounded-full bg-ink px-8 py-4 font-sans text-sm uppercase tracking-[0.12em] text-bg"
              >
                Записатися
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
