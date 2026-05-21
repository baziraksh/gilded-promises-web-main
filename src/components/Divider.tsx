export function Divider() {
  return (
    <div className="my-12 flex items-center justify-center gap-4">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/60 to-amber-400/60" />
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-amber-400">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="14" opacity="0.5" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 8;
            return (
              <line
                key={i}
                x1={20 + Math.cos(a) * 8}
                y1={20 + Math.sin(a) * 8}
                x2={20 + Math.cos(a) * 14}
                y2={20 + Math.sin(a) * 14}
              />
            );
          })}
        </g>
      </svg>
      <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-400/60 to-amber-400/60" />
    </div>
  );
}
