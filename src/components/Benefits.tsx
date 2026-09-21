import React from 'react';
import {
  Calculator,
  Boxes,
  DollarSign,
  BrickWall,
  Package,
  Layers,
  Sparkles,
  Grid,
  Paintbrush,
  Shovel,
  Blend,
  SlidersHorizontal,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: 'core' | 'material' | 'control';
  description: string;
  metricLabel: string;
}

export const Benefits: React.FC = () => {
  const benefitsList: BenefitItem[] = [
    {
      icon: Calculator,
      title: 'Cálculo de materiais',
      category: 'core',
      description: 'Conversão automática de medidas de paredes, pisos e lajes na quantidade exata de insumos necessários.',
      metricLabel: 'Cálculo automatizado'
    },
    {
      icon: Boxes,
      title: 'Estimativa de quantidades',
      category: 'core',
      description: 'Chega de comprar materiais a mais ou faltar na metade do serviço. Saiba as unidades, sacos, m³ e latas precisas.',
      metricLabel: 'Quantidades exatas'
    },
    {
      icon: DollarSign,
      title: 'Cálculo de custos',
      category: 'core',
      description: 'Defina os preços unitários da sua região e tenha a previsão financeira do custo de cada etapa da obra.',
      metricLabel: 'Controle de gastos'
    },
    {
      icon: BrickWall,
      title: 'Blocos e Tijolos',
      category: 'material',
      description: 'Cálculo preciso para blocos de concreto estrutural, de vedação e tijolos cerâmicos com espessura de junta.',
      metricLabel: 'Alvenaria sem faltas'
    },
    {
      icon: Package,
      title: 'Cimento',
      category: 'material',
      description: 'Conversão exata do volume para a quantidade em sacos de 50kg conforme o traço específico de cada serviço.',
      metricLabel: 'Sacos de 50kg'
    },
    {
      icon: Layers,
      title: 'Areia',
      category: 'material',
      description: 'Volume em metros cúbicos (m³) para assentamento, reboco, chapisco e contrapiso sem errar no frete.',
      metricLabel: 'Volume em m³'
    },
    {
      icon: Sparkles,
      title: 'Brita',
      category: 'material',
      description: 'Dosagem correta de brita 0, 1 e 2 para fundações, vigas, colunas e concreto usinado ou feito em obra.',
      metricLabel: 'Volume exato em m³'
    },
    {
      icon: Grid,
      title: 'Piso e Revestimentos',
      category: 'material',
      description: 'Cálculo de cerâmicas, porcelanatos e azulejos em m² com cálculo para recortes e paginação de piso.',
      metricLabel: 'Área com recortes'
    },
    {
      icon: Paintbrush,
      title: 'Tinta',
      category: 'material',
      description: 'Estimativa do número de demãos, rendimento da tinta por m² e conversão prática para galões e latas.',
      metricLabel: 'Demãos e latas'
    },
    {
      icon: Shovel,
      title: 'Argamassa',
      category: 'material',
      description: 'Quantidade de sacos de argamassa colante (AC-I, AC-II, AC-III) ou traço para reboco e regularização.',
      metricLabel: 'Rendimento por m²'
    },
    {
      icon: Blend,
      title: 'Concreto',
      category: 'material',
      description: 'Volume total de concreto para sapatas, estacas, vigas e lajes com detalhamento de cada componente.',
      metricLabel: 'Traço estrutural'
    },
    {
      icon: SlidersHorizontal,
      title: 'Margem de perda / desperdício',
      category: 'control',
      description: 'Ajuste de 5% a 15% para quebras, recortes e desperdício de canteiro, evitando que a equipe pare por falta de insumo.',
      metricLabel: 'Segurança contra perdas'
    },
    {
      icon: FileSpreadsheet,
      title: 'Orçamentos mais organizados',
      category: 'control',
      description: 'Apresente orçamentos claros e profissionais para clientes ou use como guia definitivo para comprar no depósito.',
      metricLabel: 'Organização profissional'
    }
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#0c0f14] border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Tudo o que você precisa
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Recursos Completos para <span className="text-amber-400">Calcular e Organizar</span> Sua Obra
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            Chega de fazer contas manuais complicadas ou chutar quantidades. Veja tudo o que o OBRA CALC calcula com precisão e facilidade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {benefitsList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-[#14171f] to-[#0f1117] p-5 border border-stone-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top row with icon and badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700/60 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors duration-200">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 bg-stone-900/80 px-2 py-0.5 rounded border border-stone-800">
                      {item.metricLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-amber-400/80 font-medium">
                  <span>Pronto no aplicativo</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA inside section */}
        <div className="mt-12 text-center">
          <a
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 font-bold text-sm border border-amber-500/30 hover:border-amber-500/60 transition-all duration-200 shadow-md"
          >
            <span>Garantir o OBRA CALC com todos os módulos por R$ 19,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
