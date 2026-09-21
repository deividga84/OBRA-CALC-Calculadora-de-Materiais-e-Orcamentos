import React from 'react';
import { ShieldCheck, Info, Lock, Zap, FileCheck, CheckCircle2 } from 'lucide-react';
import { PRODUCT_INFO } from '../config';

export const ConfidenceSection: React.FC = () => {
  return (
    <section id="confianca" className="py-16 sm:py-24 bg-[#090b0e] border-b border-stone-800/80 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparência e Confiabilidade</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Desenvolvido para Auxiliar na Estimativa e <span className="text-amber-400">Organização de Custos</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Nosso compromisso é entregar uma ferramenta honesta, objetiva e prática para o seu dia a dia, eliminando a complicação de contas manuais.
          </p>
        </div>

        {/* Pillars of Confidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Auxílio Direto no Canteiro
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Desenvolvido com foco na rotina real de quem compra materiais e executa obras, facilitando o levantamento ágil de insumos essenciais.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sem complicações ou jargões</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Transação Segura pela Cakto
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Seu pagamento é processado diretamente pelo checkout oficial e blindado da Cakto, com criptografia de ponta a ponta e total proteção de dados.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Plataforma de pagamento certificada</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Liberação Imediata no E-mail
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Assim que o pagamento único de R$ 19,90 é aprovado pela Cakto, os dados de acesso ao OBRA CALC são enviados automaticamente para seu e-mail.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pagamento único sem pegadinhas</span>
            </div>
          </div>
        </div>

        {/* Mandatory Discrete Observation Box */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-stone-900/90 border border-stone-800 text-stone-400 flex items-start gap-3.5 shadow-inner">
          <Info className="w-5 h-5 text-amber-400/90 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-semibold text-stone-300 block mb-1">
              Nota e Responsabilidade Técnica:
            </span>
            <p className="italic text-stone-400">
              "{PRODUCT_INFO.disclaimer}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
