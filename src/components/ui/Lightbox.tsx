"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ArtPlate from "@/components/ui/ArtPlate";
import type { GalleryItem } from "@/lib/types";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null)
        onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft" && index !== null)
        onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <ArtPlate
              seed={item.id}
              tone={item.category === "Брови" || item.category === "Макіяж" ? "rose" : "gold"}
              className="aspect-[4/5] w-full md:aspect-[16/10]"
            >
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                  {item.category}
                </span>
                <span className="font-display text-2xl text-ink md:text-3xl">
                  {item.title}
                </span>
              </div>
            </ArtPlate>

            <button
              onClick={onClose}
              aria-label="Закрити"
              data-cursor="link"
              className="absolute -top-4 -right-4 flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink shadow-lg"
            >
              <X size={18} />
            </button>
            <button
              onClick={() => onNavigate((index! - 1 + items.length) % items.length)}
              aria-label="Попереднє фото"
              data-cursor="link"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink shadow-lg md:-left-5"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => onNavigate((index! + 1) % items.length)}
              aria-label="Наступне фото"
              data-cursor="link"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink shadow-lg md:-right-5"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
