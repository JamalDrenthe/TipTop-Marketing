import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 z-[70] metallic-badge origin-left shadow-[0_0_15px_rgba(198,168,104,0.6)]"
    />
  );
};
