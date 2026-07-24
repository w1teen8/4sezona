"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import settings from "@/data/settings.json";

export default function Location() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Контакти"
          title={["Ми чекаємо", "на вас у Тарасівці."]}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex flex-col justify-between gap-10 rounded-[28px] p-8 md:p-10"
          >
            <div className="space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                    Адреса
                  </p>
                  <p className="mt-1 font-display text-lg text-ink">
                    {settings.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                    Телефон
                  </p>
                  <a
                    href={`tel:${settings.phoneHref}`}
                    data-cursor="link"
                    className="mt-1 block font-display text-lg text-ink"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                    Пошта
                  </p>
                  <a
                    href={`mailto:${settings.email}`}
                    data-cursor="link"
                    className="mt-1 block font-display text-lg text-ink"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink-soft">
                    Графік роботи
                  </p>
                  {settings.workingHours.map((w) => (
                    <p key={w.days} className="mt-1 font-sans text-sm text-ink">
                      <span className="text-ink-soft">{w.days}:</span> {w.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={settings.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-4 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink/40"
            >
              Прокласти маршрут
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[360px] overflow-hidden rounded-[28px] border border-border"
          >
            <iframe
              src={settings.mapEmbedUrl}
              title="Розташування салону 4 СЕЗОНА на карті"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full grayscale-[15%] contrast-[0.95] sepia-[0.08]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
