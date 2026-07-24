"use client";

import {
  Hand,
  Footprints,
  Scissors,
  Palette,
  Eye,
  Sparkles,
  Flower2,
  Sparkle,
  Brush,
  Waves,
  ArrowUpRight,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import services from "@/data/services.json";

const icons: Record<string, LucideIcon> = {
  Hand,
  Footprints,
  Scissors,
  Palette,
  Eye,
  Sparkles,
  Flower2,
  Sparkle,
  Brush,
  Waves,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-bg-secondary/60 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Послуги"
          title={["Ритуали краси", "для кожної миті."]}
          description="Кожна послуга — це не просто процедура, а продумана деталь вашого образу. Оберіть напрямок і довіртесь майстрам."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkle;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="glass group flex flex-col rounded-[28px] p-8 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(42,39,37,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bg text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon size={24} strokeWidth={1.25} />
                  </span>
                  <span className="flex items-center gap-1 font-sans text-xs text-ink-soft">
                    <Clock size={13} />
                    {service.duration}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-sans text-[11px] text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <span className="font-display text-lg text-ink">
                    {service.priceFrom}
                  </span>
                  <a
                    href="#booking"
                    data-cursor="link"
                    className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors group-hover:text-gold"
                  >
                    Записатися
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
