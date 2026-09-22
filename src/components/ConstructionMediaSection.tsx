import React, { useState } from 'react';
import {
  HardHat,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const ConstructionMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todas' | 'estrutura' | 'alvenaria' | 'acabamento'>('todas');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);

  // Strategic high-resolution civil construction photo gallery
  const galleryItems = [
    {
      id: 'foto-1',
      category: 'estrutura',
      title: 'Estruturas & Fundações',
      subtitle: 'Concretagem, sapatas e armaduras de aço',
      desc: 'Cálculo milimétrico de volume de concreto (m³), dosagem precisa de cimento, areia e brita 1 para evitar desperdício de caminhão betoneira.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      tag: 'Concreto & Ferragem'
    },
    {
      id: 'foto-2',
      category: 'alvenaria',
      title: 'Alvenaria Estrutural & Vedação',
      subtitle: 'Levantamento de blocos e tijolos com argamassa',
      desc: 'Quantidade exata de blocos cerâmicos ou concreto por metro quadrado de parede, descontando vãos de portas e janelas automaticamente.',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      tag: 'Tijolos & Blocos'
    },
    {
      id: 'foto-3',
      category: 'acabamento',
      title: 'Pisos & Revestimentos Cerâmicos',
      subtitle: 'Porcelanatos, recortes e argamassa colante',
      desc: 'Planejamento de caixas de piso, quilos de rejunte e sacos de argamassa AC-I/II/III considerando margem de segurança para quebras.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
      tag: 'Porcelanatos & Rejunte'
    },
    {
      id: 'foto-4',
      category: 'acabamento',
      title: 'Pintura & Acabamento Técnico',
      subtitle: 'Tintas, seladores e massa corrida',
      desc: 'Cálculo de latas de 18L e galões de 3,6L baseado no número de demãos e rendimento real da superfície para fechar o orçamento sem sobras caras.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      tag: 'Pintura & Demãos'
    },
    {
      id: 'foto-5',
      category: 'estrutura',
      title: 'Canteiro & Logística de Materiais',
      subtitle: 'Armazenamento organizado e controle de estoque',
      desc: 'Acompanhamento do recebimento de cargas de areia, brita e paletes de blocos para evitar paradas na frente de trabalho.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
      tag: 'Canteiro & Máquinas'
    },
    {
      id: 'foto-6',
      category: 'alvenaria',
      title: 'Conferência de Metragens & Projeto',
      subtitle: 'Levantamento no local e validação de medidas',
      desc: 'O profissional insere as medidas reais da obra no OBRA CALC diretamente pelo celular e obtém a lista de compras pronta em minutos.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      tag: 'Medição & Orçamento'
    }
  ];

  const filteredItems = activeTab === 'todas'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const featuredShots = [
    {
      title: 'Canteiro Ativo: Concretagem de Vigas e Lajes',
      subtitle: 'Execução de estrutura com dosagem rigorosa de cimento e agregados',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1200&q=80',
      badge: 'ESTRUTURAL • CONCRETO ARMADO'
    },
    {
      title: 'Alvenaria com Prumo e Argamassa no Traço Exato',
      subtitle: 'Elevação contínua sem desperdício de sacos de cimento e areia',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      badge: 'ALVENARIA • BLOCOS & ARGAMASSA'
    },
    {
      title: 'Assentamento de Pisos e Acabamento com Recorte Preciso',
      subtitle: 'Controle de metragem quadrada e caixas com margem de quebra',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
      badge: 'ACABAMENTO • PORCELANATOS'
    }
  ];

  const currentFeatured = featuredShots[featuredIndex];

  return (
    <section id="obras-reais" className="py-16 sm:py-24 bg-[#090b0e] border-b border-stone-800/80 relative overflow-hidden w-full max-w-full">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[350px] max-w-full bg-amber-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4" />
            <span>Na Prática no Canteiro de Obras</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Imagens Reais: <span className="text-amber-400">Da Fundação ao Acabamento</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Veja como o <strong>OBRA CALC</strong> se aplica na rotina prática da construção civil, trazendo precisão exata para cada etapa do seu canteiro.
          </p>
        </div>

        {/* Featured Visual Spotlight Card */}
        <div className="mb-16 rounded-2xl bg-stone-900/90 border border-stone-800 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Spotlight Image (7 cols) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-black border border-stone-800 group shadow-inner">
              <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Status Banner on Top Left */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentFeatured.badge}</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-lg bg-stone-950/85 backdrop-blur-md border border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {currentFeatured.title}
                    </h4>
                    <p className="text-[11px] text-stone-400 hidden sm:block mt-0.5">
                      {currentFeatured.subtitle}
                    </p>
                  </div>

                  {/* Quick Selectors */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {featuredShots.map((_, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => setFeaturedIndex(sIdx)}
                        aria-label={`Ver foto ${sIdx + 1}`}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                          featuredIndex === sIdx
                            ? 'bg-amber-400 text-stone-950'
                            : 'bg-stone-800/90 text-stone-400 hover:bg-stone-700 hover:text-white'
                        }`}
                      >
                        Etapa {sIdx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Context for Spotlight (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-stone-300 text-xs font-semibold mb-4">
                  <HardHat className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rotina Real da Construção</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Cada etapa exige cálculo certo para <span className="text-amber-400">não travar a obra</span>
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-normal">
                  No canteiro de obras real, errar nas quantidades de blocos, cimento ou areia significa caminhão parado, equipe ociosa e compras de emergência com preços abusivos no depósito mais próximo.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">Evite compras no escuro</strong>
                      <span className="text-stone-400">Saiba o total exato de insumos antes de fechar o pedido no depósito.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">Cálculo em menos de 3 minutos</strong>
                      <span className="text-stone-400">Basta inserir largura e altura no seu celular para ter os totais prontos.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action anchor */}
              <div className="pt-2">
                <a
                  href={CAKTO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs tracking-wide shadow-md transition-colors"
                >
                  <span>CALCULAR MINHA OBRA SEM ERROS — R$ 19,90</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Etapas da Obra com o OBRA CALC</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Imagens reais das principais frentes de trabalho calculadas pelo aplicativo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800">
            {[
              { id: 'todas', label: 'Todas as Frentes' },
              { id: 'estrutura', label: 'Estruturas' },
              { id: 'alvenaria', label: 'Alvenaria' },
              { id: 'acabamento', label: 'Acabamentos' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Real Construction Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-b from-[#131720] to-[#0d1015] border border-stone-800 hover:border-amber-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo container with zoom on hover */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-stone-950 bg-amber-400 px-2.5 py-0.5 rounded-md shadow">
                    {item.tag}
                  </span>

                  {/* Bottom Image title */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-[11px] font-medium text-amber-300/90 block">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Title and Description */}
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-amber-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Calculado pelo OBRA CALC</span>
                </span>
                <span className="text-stone-500 group-hover:text-amber-400 transition-colors">
                  Pronto
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with reassurance */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/20 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Sem necessidade de computador</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Use direto no canteiro pelo seu smartphone
            </h4>
            <p className="text-xs text-stone-400 mt-1 max-w-xl">
              Aplicativo leve, rápido e desenvolvido para abrir instantaneamente mesmo em conexões 3G/4G no meio do canteiro.
            </p>
          </div>

          <a
            href={CAKTO_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>Quero o OBRA CALC por R$ 19,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
