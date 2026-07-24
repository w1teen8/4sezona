"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ArtPlate from "@/components/ui/ArtPlate";
import Lightbox from "@/components/ui/Lightbox";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import gallery from "@/data/gallery.json";
import type { GalleryItem } from "@/lib/types";

const categories = ["Всі", "Манікюр", "Волосся", "До / Після", "Брови", "Макіяж"];

const sizeClasses: Record<GalleryItem["size"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Portfolio() {
  const [active, setActive] = useState("Всі");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      active === "Всі"
        ? (gallery as GalleryItem[])
        : (gallery as GalleryItem[]).filter((g) => g.category === active),
    [active]
  );

  const staticItems = items.filter((i) => !i.beforeAfter);

  return (
    <section id="portfolio" className="relative bg-bg-secondary/60 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Портфоліо"
            title={["Роботи, що", "говорять самі за себе."]}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="link"
                className={`rounded-full border px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] transition-colors ${
                  active === cat
                    ? "border-ink bg-ink text-bg"
                    : "border-border text-ink-soft hover:border-ink/30 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 break-inside-avoid"
              >
                {item.beforeAfter ? (
                  <BeforeAfterSlider seed={item.id} title={item.title} />
                ) : (
                  <button
                    onClick={() =>
                      setLightboxIndex(staticItems.findIndex((s) => s.id === item.id))
                    }
                    data-cursor="link"
                    className="group block w-full text-left"
                  >
                    <ArtPlate
                      seed={item.id}
                      tone={
                        item.category === "Брови" || item.category === "Макіяж"
                          ? "rose"
                          : "gold"
                      }
                      className={`w-full transition-transform duration-700 group-hover:scale-[1.02] ${sizeClasses[item.size]}`}
                    >
                      <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                        {item.category}
                      </span>
                    </ArtPlate>
                    <p className="mt-4 font-display text-lg text-ink">
                      {item.title}
                    </p>
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        items={staticItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
