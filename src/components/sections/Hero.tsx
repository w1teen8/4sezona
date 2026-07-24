"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import settings from "@/data/settings.json";

const stats = [
  { kind: "rating", label: "Рейтинг клієнтів" },
  { kind: "counter", value: 100, suffix: "%", label: "стерильність" },
  { kind: "text", value: "Premium", label: "матеріали" },
  { kind: "text", value: "Professional", label: "майстри" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-bg"
    >
      <motion.div
        aria-hidden
        className="grain absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, #f2ece7 0%, #faf8f5 45%, #faf8f5 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[18%] h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "conic-gradient(from 90deg, #e8d7e1, #e0d0ab, #f2ece7, #e8d7e1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,248,245,0) 40%, #faf8f5 100%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-gold"
        >
          <span className="h-px w-8 bg-gold" />
          {settings.brand} · {settings.addressShort}
          <span className="h-px w-8 bg-gold" />
        </motion.span>

        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-normal leading-[0.98] text-ink">
          {["Краса,", "яка", "розкриває вас."].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 1.9 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-balance font-sans text-base leading-relaxed text-ink-soft md:text-lg"
        >
          Салон краси «4 СЕЗОНА» — сучасний простір краси у Тарасівці.
          Манікюр, волосся, косметологія та професійний догляд в одному
          місці.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#booking"
            className="rounded-full bg-ink px-9 py-4 font-sans text-sm uppercase tracking-[0.15em] text-bg transition-colors hover:bg-ink/90"
          >
            Записатися
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#portfolio"
            className="rounded-full border border-ink/15 bg-transparent px-9 py-4 font-sans text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink/40"
          >
            Наші роботи
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="flex h-9 items-center justify-center">
                {stat.kind === "rating" && (
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                )}
                {stat.kind === "counter" && (
                  <AnimatedCounter
                    value={stat.value as number}
                    suffix={stat.suffix}
                    className="font-display text-2xl leading-none text-ink"
                  />
                )}
                {stat.kind === "text" && (
                  <span className="font-display text-2xl leading-none text-ink">
                    {stat.value}
                  </span>
                )}
              </div>
              <span className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ink-soft"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.25em]">
            Прокрутіть
          </span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
