import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  asChild?: boolean;
}

export default function FadeIn({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      style={{ display: "contents" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
