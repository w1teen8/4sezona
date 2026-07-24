"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const lines = ["Подаруйте", "собі", "час", "для краси."];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, #f2ece7 0%, #faf8f5 70%)",
        }}
      />
      <div
        aria-hidden
        className="grain absolute left-1/2 top-1/2 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background: "conic-gradient(from 180deg, #e0d0ab, #e8d7e1, #e0d0ab)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-normal leading-[1.02] text-ink">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <MagneticButton
            as="a"
            href="#booking"
            className="rounded-full bg-ink px-10 py-5 font-sans text-sm uppercase tracking-[0.15em] text-bg transition-colors hover:bg-ink/90"
          >
            Записатися зараз
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
