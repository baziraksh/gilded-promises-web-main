import { useMemo } from "react";

export function Petals({ count = 20 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 12,
        size: 10 + Math.random() * 18,
        hue: 340 + Math.random() * 30,
        rotate: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `-10vh`,
            width: p.size,
            height: p.size,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 20 20" style={{ transform: `rotate(${p.rotate}deg)` }}>
            <path
              d="M10 2 C 14 4, 16 8, 14 14 C 12 17, 8 17, 6 14 C 4 8, 6 4, 10 2 Z"
              fill={`hsl(${p.hue}, 70%, 65%)`}
              opacity="0.75"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function Sparkles({ count = 30 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 2 + Math.random() * 4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-amber-200"
          style={{
            left: `${s.left}%`,
            bottom: 0,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px rgba(255, 220, 130, 0.8)",
            animation: `float-up ${s.duration}s ease-in ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
