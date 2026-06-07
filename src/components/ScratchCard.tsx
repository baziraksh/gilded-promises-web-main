import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#f5d97a");
    grad.addColorStop(0.5, "#b8851b");
    grad.addColorStop(1, "#f9e9a0");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(80, 30, 10, 0.65)";
    ctx.font = "600 22px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to Reveal ✨", rect.width / 2, rect.height / 2 - 8);
    ctx.font = "400 14px 'Cormorant Garamond', serif";
    ctx.fillText("our special date", rect.width / 2, rect.height / 2 + 18);

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const getPos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const scratch = (x: number, y: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    checkProgress();
  };

  const checkProgress = () => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const pixels = ctx.getImageData(0, 0, width, height).data;
    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 16 * 4) {
      if (pixels[i] === 0) cleared++;
    }
    const ratio = cleared / (pixels.length / (16 * 4));
    if (ratio > 0.45) setRevealed(true);
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="glass relative aspect-[3/2] overflow-hidden rounded-3xl p-1">
        {/* Hidden reveal */}
        <div className="absolute inset-1 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-rose-950/80 via-amber-900/40 to-rose-950/80 text-center">
          <div className="font-script text-3xl text-amber-200 sm:text-4xl">Save the Date</div>
          <div className="text-gold-gradient mt-2 text-3xl font-bold sm:text-5xl">
            3 · 7 · 2026
          </div>
          <div className="mt-2 text-sm tracking-[0.3em] text-amber-100/80">
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-1 rounded-3xl"
          style={{
            width: "calc(100% - 8px)",
            height: "calc(100% - 8px)",
            cursor: revealed ? "default" : "grab",
            opacity: revealed ? 0 : 1,
            transition: "opacity 0.8s ease",
            pointerEvents: revealed ? "none" : "auto",
            touchAction: "none",
          }}
          onPointerDown={(e) => {
            isDrawing.current = true;
            const { x, y } = getPos(e);
            scratch(x, y);
          }}
          onPointerMove={(e) => {
            if (!isDrawing.current) return;
            const { x, y } = getPos(e);
            scratch(x, y);
          }}
          onPointerUp={() => (isDrawing.current = false)}
          onPointerLeave={() => (isDrawing.current = false)}
        />

        <AnimatePresence>
          {revealed && (
            <>
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: "50%", y: "50%", scale: 0, opacity: 1 }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: [0, 1.5, 0],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.02 }}
                  className="pointer-events-none absolute h-2 w-2 rounded-full bg-amber-200"
                  style={{ boxShadow: "0 0 12px rgba(255,220,130,0.9)" }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      {!revealed && (
        <p className="mt-4 text-center text-sm italic text-amber-100/60">
          Drag your finger across the gold to reveal
        </p>
      )}
    </div>
  );
}
