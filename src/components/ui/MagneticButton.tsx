"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  as = "button",
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-cursor="link"
    >
      <Comp
        href={href}
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={cn(className)}
      >
        <motion.span
          animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="inline-flex items-center justify-center gap-2"
        >
          {children}
        </motion.span>
      </Comp>
    </motion.div>
  );
}
