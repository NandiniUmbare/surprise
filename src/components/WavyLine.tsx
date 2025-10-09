import { motion } from "framer-motion";

interface WavyLineProps {
  height: number;
  color: string;
  className?: string;
}

export default function WavyLine({ height, color, className }: WavyLineProps) {
  const path = `M 50 0 Q 25 ${height / 4}, 50 ${height / 2} T 50 ${height}`;
  return (
    <motion.svg
      width="100"
      height={height}
      viewBox={`0 0 100 ${height}`}
      className={className}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}