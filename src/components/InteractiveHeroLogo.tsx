import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TipTopLogo } from './TipTopLogo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Sparkles, RefreshCw } from 'lucide-react';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  char: string;
}

export const InteractiveHeroLogo: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const isEn = language === 'EN';

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  // Dynamic light sheen position
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerSparkles = () => {
    const chars = ['✦', '★', '✧', '✦', '✦'];
    const newSparkles: SparkleParticle[] = Array.from({ length: 10 }).map((_, i) => {
      const angle = (i / 10) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const distance = 90 + Math.random() * 55;
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        scale: 0.8 + Math.random() * 0.7,
        char: chars[Math.floor(Math.random() * chars.length)],
      };
    });

    setSparkles(newSparkles);
    setTimeout(() => {
      setSparkles([]);
    }, 900);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    setHasInteracted(true);
    triggerSparkles();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="flex flex-col items-center select-none">
      {/* 3D Perspective Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={isEn ? "Interactive TipTop Logo - Tap to flip" : "Interactief TipTop Logo - Tik om om te draaien"}
        className="relative cursor-pointer p-4 group outline-none"
        style={{ perspective: 1200 }}
      >
        {/* Ambient Golden Glow Halo behind Medallion */}
        <div
          className={`absolute inset-4 rounded-full blur-2xl transition-all duration-700 pointer-events-none ${
            isFlipped
              ? 'bg-[#C6A868]/35 scale-110'
              : 'bg-[#C6A868]/20 group-hover:bg-[#C6A868]/35 group-hover:scale-110'
          }`}
        />

        {/* Outer Rotating Metallic Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-dashed border-[#C6A868]/30 pointer-events-none"
        />

        {/* Flipping 3D Coin Body */}
        <motion.div
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 18,
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* FRONT SIDE (White & Gold Luxury Emblem) */}
          <div
            className="absolute inset-0 rounded-full p-2.5 bg-gradient-to-br from-[#E8D8B0] via-[#C6A868] to-[#8C6D2D] shadow-2xl flex items-center justify-center overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* White disc background */}
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden shadow-inner border border-zinc-200">
              {/* Dynamic specular light sheen */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.9), transparent 60%)`,
                }}
              />

              {/* Front Logo Emblem */}
              <TipTopLogo size={180} showText={false} />
            </div>
          </div>

          {/* BACK SIDE (Black Obsidian & Solid Gold Luxury Medallion) */}
          <div
            className="absolute inset-0 rounded-full p-2.5 bg-gradient-to-br from-[#E8D8B0] via-[#C6A868] to-[#8C6D2D] shadow-2xl flex items-center justify-center overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Dark Obsidian Interior */}
            <div className="w-full h-full rounded-full bg-[#09090B] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden border border-[#C6A868]/40 shadow-inner">
              {/* Gold luxury grid pattern background */}
              <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />

              {/* Gold Ring Trim */}
              <div className="absolute inset-2 rounded-full border border-[#C6A868]/40 pointer-events-none" />

              {/* Medallion Content */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A868] font-bold">
                  ✦ TIPTOP FORMULA ✦
                </span>

                <span className="font-serif text-3xl font-bold gold-gradient-text tracking-wider">
                  TT
                </span>

                <div className="w-8 h-[1px] bg-[#C6A868] my-0.5 opacity-70" />

                <p className="text-[10px] font-bold uppercase tracking-widest text-white leading-tight">
                  8 tot 20 Video's p/m
                </p>

                <p className="text-[9px] text-zinc-400 tracking-wider font-medium">
                  {isEn ? 'Full Social Management' : 'Full Social Management'}
                </p>

                <div className="pt-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C6A868]/15 border border-[#C6A868]/30 text-[9px] text-[#C6A868] font-semibold tracking-wider uppercase">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{isEn ? 'Top Tier Growth' : 'High Volume'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bursting Gold Sparkle Particles */}
        <AnimatePresence>
          {sparkles.map((sp) => (
            <motion.span
              key={sp.id}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                scale: sp.scale,
                x: sp.x,
                y: sp.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 text-[#C6A868] font-bold text-sm sm:text-base drop-shadow-[0_0_8px_rgba(198,168,104,0.8)]"
            >
              {sp.char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Micro Pill Instruction */}
      <motion.div
        animate={hasInteracted ? {} : { y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={handleFlip}
        className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C6A868]/50 text-zinc-300 hover:text-white transition-all cursor-pointer text-[10px] uppercase tracking-wider font-semibold group"
      >
        <RefreshCw className="w-3 h-3 text-[#C6A868] group-hover:rotate-180 transition-transform duration-500" />
        <span>
          {isFlipped
            ? (isEn ? 'Tap to view logo' : 'Tik om logo te bekijken')
            : (isEn ? 'Interactive · Tap to flip' : 'Interactief · Tik om te draaien')}
        </span>
      </motion.div>
    </div>
  );
};
