import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScroolReveal";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealSection({
  children,
  delay = 0,
  className = "",
}: Props) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
