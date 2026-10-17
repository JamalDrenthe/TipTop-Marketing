import React from 'react';
import { TipTopLogo } from './TipTopLogo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectPackage: (tier: any) => void;
  onOpenLegal: (type: 'voorwaarden' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#09090B] text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-800/80">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none block shrink-0 cursor-pointer"
              aria-label="TipTop Marketing Home"
            >
              <TipTopLogo size={48} showText={true} forceDarkBg={true} />
            </button>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-[#C6A868] hover:text-[#09090B] hover:border-[#C6A868] transition font-semibold text-xs"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-[#C6A868] hover:text-[#09090B] hover:border-[#C6A868] transition font-semibold text-xs"
            >
              TikTok
            </a>
            <a
              href="https://wa.me/31683921044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-[#C6A868] hover:text-[#09090B] hover:border-[#C6A868] transition font-semibold text-xs"
            >
              WhatsApp
            </a>
          </div>

        </div>

        {/* Navigation & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <nav className="flex items-center gap-6 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition cursor-pointer">
              {t('navHome')}
            </button>
            <button onClick={() => onNavigate('pakketten')} className="hover:text-white transition cursor-pointer">
              {t('navPackages')}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition cursor-pointer">
              {t('navContact')}
            </button>
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('voorwaarden')}
              className="hover:text-white underline underline-offset-4 transition cursor-pointer"
            >
              {t('footerLegalVoorwaarden')}
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white underline underline-offset-4 transition cursor-pointer"
            >
              {t('footerLegalPrivacy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
