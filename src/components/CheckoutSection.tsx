import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Zap,
  CreditCard,
  QrCode
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL, PRODUCT_INFO } from '../config';

export const CheckoutSection: React.FC = () => {
  return (
    <section id="checkout" className="py-16 sm:py-24 bg-[#0c0f14] border-b border-stone-800/80 relative">
      {/* Background glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Acesso Imediato
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Checkout Oficial e Seguro
          </h2>
          <p className="mt-2 text-sm text-stone-400">
            Adquira o OBRA CALC agora com valor promocional único. Sem cobranças recorrentes.
          </p>
        </div>

        {/* Visual Checkout Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#151923] via-[#10131b] to-[#0d0f15] border-2 border-amber-500/40 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Top banner tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 via-amber-500 to-orange-500 text-stone-950 text-[11px] sm:text-xs font-black uppercase tracking-wider px-4 sm:px-6 py-1.5 rounded-bl-xl shadow-md z-10 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 fill-stone-950 stroke-none" />
            <span>Melhor Custo-Benefício</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 sm:pt-2">
            
            {/* Left Col: Product Info & Pricing */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  {PRODUCT_INFO.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {PRODUCT_INFO.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed">
                  Tenha em mãos a calculadora completa para estimar blocos, cimento, areia, brita, pisos, tintas, argamassa e concreto com controle de margem de perda.
                </p>
              </div>

              {/* Price Display Box - Ultra responsive & resilient */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-amber-950/25 border border-amber-500/40 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Price Column */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400">
                        Valor promocional
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500 line-through">
                        De R$ 47,00
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <div className="flex items-baseline gap-1 text-white whitespace-nowrap">
                        <span className="text-xl sm:text-2xl font-bold text-amber-400">
                          R$
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                          19,90
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 whitespace-nowrap shadow-sm">
                        Pagamento único
                      </span>
                    </div>
                  </div>

                  {/* Benefit Column */}
                  <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-800/80 sm:border-l sm:pl-4 sm:border-stone-800 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 sm:justify-end">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Zero mensalidade
                    </span>
                    <span className="block text-[11px] text-stone-400 mt-0.5">
                      Acesso vitalício ao app
                    </span>
                    <span className="block text-[10px] text-amber-400/80 mt-0.5 font-medium">
                      Sem cobranças extras
                    </span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Todos os módulos de cálculo inclusos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Margem técnica de desperdício ajustável</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Interface rápida e intuitiva para celular e computador</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Envio imediato no seu e-mail após a confirmação</span>
                </div>
              </div>
            </div>

            {/* Right Col: Action & Security */}
            <div className="md:col-span-5 flex flex-col justify-center items-center bg-stone-900/90 p-5 sm:p-7 rounded-2xl border border-stone-800 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
                <Lock className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                Pagamento Seguro
              </span>

              {/* Clear Total Callout */}
              <div className="my-2.5 px-4 py-1.5 rounded-lg bg-stone-950 border border-stone-800 flex items-center gap-2">
                <span className="text-xs text-stone-400">Total a pagar:</span>
                <span className="text-base sm:text-lg font-black text-amber-400 font-mono whitespace-nowrap">
                  R$ 19,90
                </span>
              </div>

              <p className="text-xs text-stone-300 mb-5">
                Você será direcionado com segurança para o checkout oficial da <strong className="text-white">Cakto</strong>.
              </p>

              {/* Checkout CTA Button */}
              <a
                id="checkout-cta-button"
                href={CAKTO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-base tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mb-4"
              >
                <span>CONTINUAR PARA PAGAMENTO</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              {/* Payment Methods Info */}
              <div className="flex items-center justify-center gap-4 text-stone-400 text-xs mb-3">
                <span className="flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-amber-400" />
                  Pix (imediato)
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  Cartão de Crédito
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Checkout 100% criptografado e seguro</span>
              </div>
            </div>

          </div>

        </div>

        {/* Small Notice */}
        <div className="mt-6 text-center text-xs text-stone-400">
          <p>
            Processamento direto pela plataforma <strong>Cakto</strong>. Não solicitamos nem armazenamos seus dados bancários neste site.
          </p>
        </div>

      </div>
    </section>
  );
};
