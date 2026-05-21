import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[60] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, rgba(245,200,100,0.18) 0%, rgba(245,200,100,0.05) 30%, transparent 70%)",
        mixBlendMode: "screen",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}
