"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import ArtPlate from "@/components/ui/ArtPlate";

interface BeforeAfterSliderProps {
  seed: string;
  title: string;
  className?: string;
}

export default function BeforeAfterSlider({
  seed,
  title,
  className,
}: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);

  return (
    <div className={className}>
      <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-[28px] border border-border md:aspect-[16/10]">
        <ArtPlate seed={`${seed}-after`} tone="gold" className="absolute inset-0 rounded-none border-none">
          <span className="absolute bottom-5 right-5 font-sans text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Після
          </span>
        </ArtPlate>

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${percent}%` }}
        >
          <ArtPlate
            seed={`${seed}-before`}
            tone="neutral"
            className="h-full w-full rounded-none border-none"
          >
            <span className="absolute bottom-5 left-5 font-sans text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              До
            </span>
          </ArtPlate>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-bg"
          style={{ left: `${percent}%` }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink shadow-[0_8px_24px_rgba(42,39,37,0.18)]">
            <MoveHorizontal size={16} />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          aria-label={`Порівняти до та після: ${title}`}
          data-cursor="link"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 font-display text-lg text-ink">{title}</p>
    </div>
  );
}
