interface MarqueeRowProps {
  logos: string[];
  direction?: "left" | "right";
}

export default function MarqueeRow({
  logos,
  direction = "left",
}: MarqueeRowProps) {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex gap-16 items-center ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt="client logo"
              className="h-14 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
