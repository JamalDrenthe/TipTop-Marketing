import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HomePage } from './components/HomePage.tsx';
import { PricingPage } from './components/PricingPage.tsx';
import { ContactPage } from './components/ContactPage.tsx';
import { Footer } from './components/Footer.tsx';
import { StrategyModal } from './components/StrategyModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { PageTransition } from './components/PageTransition.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { SkeletonHero, SkeletonPricing } from './components/SkeletonLoader.tsx';
import { PackageTier } from './utils/pricing.ts';
import { CustomCursor } from './components/CustomCursor.tsx';

function AppContent() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<PackageTier | ''>('');
  const [strategyModalOpen, setStrategyModalOpen] = useState<boolean>(false);
  const [preselectedStrategyTier, setPreselectedStrategyTier] = useState<PackageTier | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'voorwaarden' | 'privacy' | null>(null);

  // Scroll to top on navigation change & trigger subtle skeleton load transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [activePage]);

  const handleNavigate = (page: string) => {
    if (page !== activePage) {
      setActivePage(page);
    }
  };

  const handleSelectPackage = (tier: PackageTier) => {
    setSelectedPackageForContact(tier);
    setActivePage('contact');
  };

  const handleOpenStrategyModal = (preselectedTier?: PackageTier) => {
    setPreselectedStrategyTier(preselectedTier);
    setStrategyModalOpen(true);
  };

  const renderPageWithSkeleton = () => {
    if (isTransitioning) {
      if (activePage === 'home') {
        return <div className="bg-[#09090B] text-white"><SkeletonHero /></div>;
      }
      if (activePage === 'pakketten') {
        return <SkeletonPricing />;
      }
    }

    switch (activePage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectPackage}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        );
      case 'pakketten':
        return (
          <PricingPage
            onSelectPackage={handleSelectPackage}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            initialPackage={selectedPackageForContact}
            onOpenStrategyModal={() => handleOpenStrategyModal()}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectPackage}
            onOpenStrategyModal={handleOpenStrategyModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 flex flex-col transition-colors">
      {/* Custom Cursor Follower */}
      <CustomCursor />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenStrategyModal={() => handleOpenStrategyModal()}
      />

      {/* Main View Area with Framer Motion Page Transition & Skeleton Loader */}
      <main className="flex-1 overflow-hidden">
        <PageTransition pageKey={activePage}>
          {renderPageWithSkeleton()}
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectPackage={handleSelectPackage}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modals */}
      <StrategyModal
        isOpen={strategyModalOpen}
        onClose={() => setStrategyModalOpen(false)}
        preselectedTier={preselectedStrategyTier}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
