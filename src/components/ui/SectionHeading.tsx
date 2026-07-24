"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | string[];
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.28em] text-gold"
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </motion.span>
      )}
      <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.05] text-ink">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block text-balance"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-soft md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
