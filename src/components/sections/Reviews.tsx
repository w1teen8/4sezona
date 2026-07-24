"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import reviews from "@/data/reviews.json";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  };

  const review = reviews[index];

  return (
    <section id="reviews" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Відгуки"
          title={["Слова наших", "гостей."]}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass relative overflow-hidden rounded-[28px] px-8 py-12 md:px-16 md:py-16">
            <Quote
              className="absolute left-6 top-6 text-gold/30 md:left-10 md:top-10"
              size={48}
              strokeWidth={1}
            />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={review.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 max-w-2xl text-balance font-display text-2xl leading-snug text-ink md:text-3xl">
                  {review.text}
                </p>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary font-display text-base text-ink">
                    {initialsOf(review.name)}
                  </span>
                  <div>
                    <p className="font-sans text-sm text-ink">{review.name}</p>
                    <p className="font-sans text-xs text-ink-soft">
                      {review.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Попередній відгук"
            data-cursor="link"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg p-3 text-ink transition-colors hover:border-gold md:-left-4 md:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Наступний відгук"
            data-cursor="link"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-border bg-bg p-3 text-ink transition-colors hover:border-gold md:-right-4 md:flex"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Відгук ${i + 1}`}
                data-cursor="link"
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
