import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { ProductPresentation } from './components/ProductPresentation';
import { ConfidenceSection } from './components/ConfidenceSection';
import { CheckoutSection } from './components/CheckoutSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ArrowRight, HardHat } from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from './config';

export default function App() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 500px down
      if (window.scrollY > 500) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-stone-950">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <ProductPresentation />
        <ConfidenceSection />
        <CheckoutSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Purchase Bar on Scroll */}
      {showFloatingBar && (
        <aside
          aria-label="Barra de compra rápida"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md w-auto"
        >
          <div className="rounded-2xl bg-stone-900/95 border border-amber-500/40 p-3 sm:p-3.5 shadow-2xl shadow-black/90 backdrop-blur-md flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-stone-950 shrink-0">
                <HardHat className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="leading-tight">
                <span className="text-xs font-black text-white block">
                  OBRA CALC
                </span>
                <span className="text-[11px] text-amber-400 font-bold font-mono">
                  R$ 19,90 • Pagamento único
                </span>
              </div>
            </div>

            <a
              id="floating-buy-button"
              href={CAKTO_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 text-xs font-black shadow-md shadow-amber-500/20 active:scale-95 transition-all"
            >
              <span>COMPRAR</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
