import { cn } from "@/lib/utils";

function hashSeed(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) % 360;
  }
  return h;
}

interface ArtPlateProps {
  seed: string;
  className?: string;
  children?: React.ReactNode;
  tone?: "rose" | "gold" | "neutral";
}

const tones: Record<string, [string, string]> = {
  rose: ["#e8d7e1", "#f2ece7"],
  gold: ["#e0d0ab", "#f2ece7"],
  neutral: ["#f2ece7", "#faf8f5"],
};

export default function ArtPlate({
  seed,
  className,
  children,
  tone = "neutral",
}: ArtPlateProps) {
  const angle = hashSeed(seed);
  const [c1, c2] = tones[tone];

  return (
    <div
      className={cn(
        "grain relative flex items-center justify-center overflow-hidden rounded-[28px] border border-border",
        className
      )}
      style={{
        background: `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 55%, #faf8f5 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -inset-6 opacity-70"
        style={{
          background: `radial-gradient(circle at ${30 + (angle % 40)}% ${
            20 + (angle % 50)
          }%, rgba(197,166,106,0.18), transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 90px rgba(42,39,37,0.06)",
        }}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
