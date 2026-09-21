import React from 'react';
import { HardHat, ShieldCheck, Lock } from 'lucide-react';
import { CAKTO_CHECKOUT_URL, PRODUCT_INFO } from '../config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07080a] text-stone-400 text-xs border-t border-stone-800/80 pt-12 pb-14 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-stone-950">
                <HardHat className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                OBRA<span className="text-amber-400">CALC</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Calculadora de Materiais e Orçamentos para Construção Civil. Estime quantidades, insumos e custos com agilidade, precisão e organização.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Checkout oficial hospedado com segurança na Cakto</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs uppercase font-bold text-white tracking-wider block mb-3">
              Navegação Rápida
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="hover:text-amber-400 transition-colors">
                  Benefícios e Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  Como Funciona (3 Passos)
                </a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-amber-400 transition-colors">
                  Módulos de Materiais
                </a>
              </li>
              <li>
                <a href="#confianca" className="hover:text-amber-400 transition-colors">
                  Segurança & Confiança
                </a>
              </li>
              <li>
                <a href="#checkout" className="hover:text-amber-400 transition-colors">
                  Checkout — R$ 19,90
                </a>
              </li>
            </ul>
          </div>

          {/* Secure Purchase Notice */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-bold text-white tracking-wider block mb-3">
              Compre com Segurança
            </span>
            <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 space-y-2">
              <div className="flex items-center gap-1.5 text-stone-300 font-semibold text-xs">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Cakto Pagamentos</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-normal">
                Valor único de <strong>R$ 19,90</strong>. Liberação automática logo após a aprovação do Pix ou cartão de crédito.
              </p>
              <a
                href={CAKTO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2"
              >
                Acessar checkout agora &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 border-b border-stone-800/60 text-[11px] text-stone-400 leading-relaxed">
          <p className="italic">
            <strong className="text-stone-300 font-medium not-italic">Aviso Legal: </strong>
            {PRODUCT_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 text-[11px]">
          <p>
            &copy; {currentYear} {PRODUCT_INFO.name} — {PRODUCT_INFO.subtitle}. Todos os direitos reservados.
          </p>
          <p className="text-stone-400">
            Site Oficial • Venda Exclusiva via Cakto
          </p>
        </div>

      </div>
    </footer>
  );
};
