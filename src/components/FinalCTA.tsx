import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, HardHat } from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0c0f14] via-[#12161f] to-[#090b0e] relative overflow-hidden border-b border-stone-800">
      {/* Decorative ambient flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
          <HardHat className="w-4 h-4" />
          <span>Chega de Erros e Desperdício na Obra</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          COMECE A ORGANIZAR OS CÁLCULOS DA SUA OBRA
        </h2>

        {/* Short convincing text */}
        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Economize tempo no planejamento, evite compras em excesso e garanta que sua equipe tenha os materiais certos no momento exato da execução.
        </p>

        {/* Price & Features */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-stone-300 mb-8 bg-stone-900/90 border border-stone-800 px-5 py-2.5 rounded-2xl">
          <span className="text-white font-extrabold text-base">R$ 19,90</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Pagamento único</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Sem mensalidade</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Acesso imediato</span>
        </div>

        {/* Main CTA Button */}
        <div>
          <a
            id="final-cta-button"
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg tracking-wide shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>COMPRAR OBRA CALC — R$ 19,90</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* Guarantee text */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-stone-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Pagamento 100% seguro processado pela Cakto</span>
        </div>

      </div>
    </section>
  );
};
