import React, { useState } from 'react';
import { TipTopLogo } from './TipTopLogo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { Menu, X, ArrowUpRight, Globe, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenStrategyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenStrategyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: t('navHome') },
    { id: 'pakketten', label: t('navPackages') },
    { id: 'portfolio', label: t('navPortfolio') },
    { id: 'contact', label: t('navContact') }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top High-Volume Retainer Availability Strip */}
      <div className="bg-[#09090B] text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C6A868] animate-pulse" />
            <span className="tracking-wider uppercase text-[11px] font-medium text-zinc-300">
              {t('topBarCapacity')} <strong className="text-white">{t('topBarAvailable')}</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[11px] tracking-wider uppercase text-zinc-400">
            <span>{t('topBarHighVolume')}</span>
            <span>·</span>
            <span>{t('topBarSocialMgmt')}</span>
            <span>·</span>
            <button
              onClick={onOpenStrategyModal}
              className="text-[#C6A868] hover:text-white transition font-medium underline underline-offset-4"
            >
              {t('topBarScheduleDirect')} &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Zone 1: Single Brand Lockup */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
            aria-label="TipTop Marketing Home"
          >
            <TipTopLogo size={52} showText={true} textColor={theme === 'dark' ? 'text-white' : 'text-zinc-900'} />
          </button>

          {/* Zone 2: 4 Nav links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Hoofdmenu">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B] shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Toggle, Theme Toggle & Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* EN / NL Segmented Language Toggle */}
            <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200/80 dark:border-zinc-800 shrink-0">
              <Globe className="w-3.5 h-3.5 text-zinc-500 ml-1.5 mr-0.5" />
              <button
                onClick={() => setLanguage('NL')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase transition ${
                  language === 'NL'
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B] shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
                title="Nederlands"
              >
                NL
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase transition ${
                  language === 'EN'
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B] shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Dark / Light Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition flex items-center justify-center shrink-0"
              title={theme === 'dark' ? 'Schakel naar Lichte Modus' : 'Schakel naar Donkere Modus'}
              aria-label="Theme mode toggle"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#C6A868]" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            <button
              onClick={onOpenStrategyModal}
              className="group inline-flex items-center gap-2 bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0"
            >
              <span>{t('navStrategyCall')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A868] dark:text-[#09090B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls: Language, Theme & Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              aria-label="Theme mode toggle"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#C6A868]" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setLanguage('NL')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  language === 'NL' ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B]' : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  language === 'EN' ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B]' : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#09090B] border-b border-zinc-200 dark:border-zinc-800 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  activePage === link.id
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-[#09090B]'
                    : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'pakketten' && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C6A868]/20 text-[#A88640] font-bold">
                    {t('navPackagesCount')}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyModal();
                }}
                className="w-full bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>{t('navScheduleCallMobile')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A868] dark:text-[#09090B]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
