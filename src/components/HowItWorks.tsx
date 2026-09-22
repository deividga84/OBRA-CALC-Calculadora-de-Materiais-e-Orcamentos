import React from 'react';
import { Ruler, Sliders, CheckSquare, ArrowRight } from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Ruler,
      title: 'Informe as medidas da obra',
      subtitle: 'Simples e direto',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80',
      description:
        'Digite o comprimento, altura, largura ou área em m² da parede, piso, laje ou viga que você irá executar. Você não precisa saber fórmulas complexas.',
      details: ['Comprimento e altura de paredes', 'Área de pisos e lajes em m²', 'Vãos de portas e janelas com desconto automático']
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Configure os materiais e parâmetros',
      subtitle: 'Personalização total',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      description:
        'Escolha o tipo de bloco, tijolo, traço de concreto ou tipo de revestimento. Defina a margem de perda (ex: 10%) para proteger sua obra contra quebras.',
      details: ['Tipos de blocos ou cerâmicas', 'Traço de argamassa e concreto', 'Margem de perda ajustável']
    },
    {
      number: '03',
      icon: CheckSquare,
      title: 'Confira as quantidades e estimativas',
      subtitle: 'Resultado pronto para usar',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
      description:
        'O OBRA CALC gera instantaneamente a lista completa: sacos de cimento, metros de areia e brita, unidades de tijolos e custo estimado total.',
      details: ['Lista de compras para o depósito', 'Estimativa de custo total', 'Redução drástica de desperdício']
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#090b0e] border-b border-stone-800/80 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Passo a Passo
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Como Funciona o <span className="text-amber-400">OBRA CALC</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Apenas 3 passos simples para transformar medidas brutas em uma lista de materiais exata e organizada.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-[#141820] to-[#0d1015] border border-stone-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Real Civil Construction Photo Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-stone-950">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-[#141820]/40 to-black/30" />

                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-stone-900/90 backdrop-blur-md border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-md">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    <span className="absolute top-3 right-3 text-2xl font-black font-mono text-amber-400/90 bg-stone-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-amber-400/30">
                      {step.number}
                    </span>
                  </div>

                  <div className="p-6 pt-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                      {step.subtitle}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Sub-items check */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-stone-800/80 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for clarity */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-[#161a22] to-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Pronto para parar de perder tempo com contas manuais?
            </h4>
            <p className="text-xs text-stone-400 mt-0.5">
              Tenha acesso vitalício ao OBRA CALC por apenas R$ 19,90 em pagamento único.
            </p>
          </div>
          <a
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm shadow-md transition-colors text-center"
          >
            <span>Quero o OBRA CALC agora</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
