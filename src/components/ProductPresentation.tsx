import React from 'react';
import {
  HardHat,
  BrickWall,
  Boxes,
  Grid,
  Paintbrush,
  Sliders,
  FileText,
  CheckCircle2,
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const ProductPresentation: React.FC = () => {
  const modules = [
    {
      icon: BrickWall,
      tag: 'Módulo 01',
      title: 'Alvenaria e Paredes',
      subtitle: 'Blocos, Tijolos e Argamassa',
      description:
        'Calcule a quantidade exata de blocos de concreto ou tijolos cerâmicos necessários para qualquer parede, descontando portas e janelas automaticamente.',
      features: [
        'Desconto de portas e vãos livres',
        'Consumo de argamassa de assentamento',
        'Cálculo de sacos de cimento e m³ de areia'
      ]
    },
    {
      icon: Boxes,
      tag: 'Módulo 02',
      title: 'Concreto e Estrutural',
      subtitle: 'Sapatas, Vigas, Pilares e Lajes',
      description:
        'Obtenha os volumes exatos de concreto e a dosagem de cimento, areia média e brita 1 de acordo com o traço padrão da construção civil.',
      features: [
        'Cálculo de volume cúbico (m³)',
        'Divisão precisa por insumos (cimento, areia, brita)',
        'Evita desperdício de concreto usinado ou virado'
      ]
    },
    {
      icon: Grid,
      tag: 'Módulo 03',
      title: 'Pisos e Revestimentos',
      subtitle: 'Cerâmicas, Porcelanatos e Rejunte',
      description:
        'Planeje a compra de pisos e azulejos com precisão milimétrica, considerando a margem para recortes diagonais ou alinhados.',
      features: [
        'Área total + margem de corte',
        'Cálculo de sacos de argamassa AC-I, II ou III',
        'Estimativa de quilos de rejunte por m²'
      ]
    },
    {
      icon: Paintbrush,
      tag: 'Módulo 04',
      title: 'Pintura e Acabamento',
      subtitle: 'Tintas, Seladores e Massa Corrida',
      description:
        'Saiba exatamente quantas latas (18L) e galões (3,6L) de tinta comprar, baseando-se na área líquida e no número de demãos recomendado.',
      features: [
        'Cálculo por número de demãos (1 a 3)',
        'Rendimento médio em m² por lata',
        'Massa corrida e fundo preparador'
      ]
    },
    {
      icon: Sliders,
      tag: 'Módulo 05',
      title: 'Controle de Margem de Perda',
      subtitle: 'Segurança contra desperdício',
      description:
        'Ajuste facilmente de 5% a 15% de margem técnica para compensar quebras no descarregamento, sobras e cortes inevitáveis no canteiro.',
      features: [
        'Parâmetro flexível por tipo de material',
        'Evita paralisação da equipe por falta de produto',
        'Economiza dinheiro ao evitar viagens extras ao depósito'
      ]
    },
    {
      icon: FileText,
      tag: 'Módulo 06',
      title: 'Resumo para Orçamentos e Compras',
      subtitle: 'Organização profissional imediata',
      description:
        'Todas as quantidades reunidas em uma visualização limpa e profissional, pronta para você levar ao depósito de materiais ou repassar ao cliente.',
      features: [
        'Lista clara de compras com unidades comerciais',
        'Estimativa de custo total da etapa',
        'Visualização simples no celular na hora da compra'
      ]
    }
  ];

  return (
    <section id="materiais" className="py-16 sm:py-24 bg-[#0c0f14] border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Ferramenta Profissional
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Projetado para Facilitar seus Cálculos e <span className="text-amber-400">Organizar sua Obra</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Uma solução moderna e intuitiva para quem precisa de rapidez, exatidão e controle total na compra de materiais.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => {
            const IconComponent = mod.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-b from-[#141822] to-[#0e1118] p-6 border border-stone-800 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between group shadow-lg shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {mod.title}
                  </h3>
                  <span className="text-xs text-amber-400/80 font-medium block mb-3">
                    {mod.subtitle}
                  </span>

                  <p className="text-xs text-stone-400 leading-relaxed mb-5">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 space-y-2">
                  {mod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner on waste prevention */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-stone-900 via-amber-950/30 to-stone-900 p-6 sm:p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Economia real logo no primeiro pedido
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
                Errar no cálculo de 2 sacos de cimento ou meio caminhão de areia já custa muito mais do que os <strong className="text-amber-400 font-bold">R$ 19,90</strong> do OBRA CALC. Tenha precisão em cada compra.
              </p>
            </div>
          </div>

          <a
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <span>Quero Economizar na Obra</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
