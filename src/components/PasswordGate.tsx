import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TipTopLogo } from './TipTopLogo.tsx';
import { Lock, ArrowRight, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trim whitespace to prevent mobile autocomplete space issues
    const trimmed = password.trim();

    if (trimmed === 'SalesMates') {
      setError(false);
      try {
        localStorage.setItem('tiptop_site_auth', 'SalesMates');
      } catch (err) {}
      setTimeout(() => {
        onUnlock();
      }, 250);
    } else {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#09090B] text-white flex flex-col justify-between items-center relative overflow-hidden bg-luxury-grid p-4 sm:p-6 select-none">
      {/* Ambient Gold Bloom Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C6A868]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#C6A868]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Brand Tag */}
      <header className="w-full max-w-md pt-6 sm:pt-10 flex justify-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C6A868]" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
            Beveiligde Preview Omgeving
          </span>
        </div>
      </header>

      {/* Center Password Dialog */}
      <main className="w-full max-w-md z-10 my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl bg-zinc-900/90 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C6A868]/20 to-transparent rounded-tr-3xl pointer-events-none" />

          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2.5 rounded-full bg-white shadow-xl ring-4 ring-[#C6A868]/25 mb-5">
              <TipTopLogo size={70} showText={false} interactive={false} />
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              TipTop Marketing
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light leading-relaxed max-w-xs">
              Deze website is momenteel exclusief beveiligd. Voer het wachtwoord in om verder te gaan.
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="gate-password" className="block text-[11px] uppercase tracking-wider text-zinc-300 font-medium">
                Toegangswachtwoord
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Lock className="w-4 h-4 text-[#C6A868]" />
                </div>

                <input
                  id="gate-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  autoFocus
                  autoComplete="current-password"
                  placeholder="Voer wachtwoord in..."
                  className={`w-full pl-10 pr-11 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-zinc-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A868] ${
                    error
                      ? 'border-red-500/80 bg-red-950/20'
                      : 'border-white/15 hover:border-white/25 focus:border-[#C6A868]'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Verberg wachtwoord" : "Toon wachtwoord"}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-white transition cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Error Message with Shake */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, x: -6 }}
                    animate={{ opacity: 1, y: 0, x: [0, -6, 6, -4, 4, 0] }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-1.5 text-xs text-red-400 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Onjuist wachtwoord. Probeer opnieuw.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Unlock Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !password.trim()}
              className="w-full py-4 rounded-xl metallic-badge text-[#09090B] font-bold text-xs uppercase tracking-widest hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg cursor-pointer mt-2"
            >
              <span>Toegang Ontgrendelen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full max-w-md pb-6 text-center z-10 text-[11px] text-zinc-500 uppercase tracking-widest">
        <span>TipTop Marketing · High Volume Agency</span>
      </footer>
    </div>
  );
};
