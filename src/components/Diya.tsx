export function Diya({ size = 40 }: { size?: number }) {
  return (
    <div className="relative inline-block" style={{ width: size, height: size * 1.4 }}>
      {/* Flame */}
      <div
        className="absolute left-1/2 flicker"
        style={{
          top: 0,
          width: size * 0.35,
          height: size * 0.7,
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at 50% 70%, #fff7c2 0%, #ffb84a 40%, #ff5e1a 70%, transparent 100%)",
          borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
          filter: "blur(0.5px)",
          boxShadow: "0 0 25px 8px rgba(255, 165, 50, 0.55)",
        }}
      />
      {/* Lamp body */}
      <div
        className="absolute left-1/2"
        style={{
          bottom: 0,
          width: size,
          height: size * 0.5,
          transform: "translateX(-50%)",
          background: "linear-gradient(180deg, #c98a2a 0%, #7a4912 100%)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.4), 0 0 15px rgba(245,200,100,0.4)",
        }}
      />
    </div>
  );
}
