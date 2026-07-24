"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -6 } : undefined}
      className={cn(
        "glass rounded-[28px] p-8 transition-shadow duration-500",
        hover && "hover:shadow-[0_20px_60px_rgba(42,39,37,0.08)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
