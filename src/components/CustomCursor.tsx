import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over portfolio items or elements with data-cursor="view"
      const target = e.target as HTMLElement | null;
      const viewElement = target?.closest('[data-cursor="view"]') || target?.closest('.portfolio-card');
      
      if (viewElement) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 flex items-center justify-center"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isClicking ? 0.9 : isHovered ? 1.8 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
    >
      {isHovered ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-[#C6A868]/40 backdrop-blur-md"
        >
          <Eye className="w-3.5 h-3.5 text-[#C6A868]" />
          <span>{cursorText || 'VIEW'}</span>
        </motion.div>
      ) : (
        <div className="w-4 h-4 rounded-full bg-zinc-900/80 dark:bg-white/80 border border-white/50 dark:border-zinc-900/50 backdrop-blur-xs shadow-md" />
      )}
    </motion.div>
  );
};
