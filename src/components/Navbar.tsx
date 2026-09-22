import React, { useState } from 'react';
import { HardHat, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-[#090b0e]/90 backdrop-blur-md border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            <HardHat className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                OBRA<span className="text-amber-400">CALC</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                Oficial
              </span>
            </div>
            <span className="text-[11px] text-stone-400 font-medium hidden sm:inline-block">
              Calculadora de Materiais & Orçamentos
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a
            href="#beneficios"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Benefícios
          </a>
          <a
            href="#como-funciona"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Como Funciona
          </a>
          <a
            href="#materiais"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Materiais
          </a>
          <a
            href="#obras-reais"
            className="hover:text-amber-400 transition-colors py-1 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Obras Reais & Vídeo</span>
          </a>
          <a
            href="#confianca"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Segurança
          </a>
          <a
            href="#checkout"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Preço
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-cta-button"
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>COMPRAR — R$ 19,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label="Abrir menu de navegação"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg text-stone-300 hover:text-white bg-stone-900 border border-stone-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1117] border-b border-stone-800 px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-300">
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400"
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400"
            >
              Como Funciona
            </a>
            <a
              href="#materiais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400"
            >
              Materiais
            </a>
            <a
              href="#obras-reais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 flex items-center justify-between text-amber-300 font-semibold"
            >
              <span>Obras Reais & Vídeo</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-400 border border-amber-400/30">HD</span>
            </a>
            <a
              href="#confianca"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400"
            >
              Segurança & Confiança
            </a>
            <a
              href="#checkout"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400"
            >
              Preço & Garantia
            </a>
          </nav>

          <div className="pt-2">
            <a
              id="mobile-nav-cta-button"
              href={CAKTO_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-base shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform"
            >
              <span>COMPRAR AGORA — R$ 19,90</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400 mt-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Pagamento seguro via Cakto • Pagamento único</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
