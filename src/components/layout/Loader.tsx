"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const petals = [0, 90, 180, 270];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    const start = performance.now();
    const duration = 2000;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      html.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative h-24 w-24">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {petals.map((rotate, i) => (
                <motion.path
                  key={rotate}
                  d="M50 8 C 66 8 78 26 78 50 C 78 26 66 8 50 8 Z"
                  fill="none"
                  stroke={i % 2 === 0 ? "#C5A66A" : "#D8B6C9"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  transform={`rotate(${rotate} 50 50)`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{
                    duration: 1.1,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center font-display text-lg text-ink"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              4
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 font-display text-xl tracking-[0.35em] text-ink"
          >
            4 СЕЗОНА
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 font-sans text-xs tabular-nums tracking-[0.2em] text-ink-soft"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
