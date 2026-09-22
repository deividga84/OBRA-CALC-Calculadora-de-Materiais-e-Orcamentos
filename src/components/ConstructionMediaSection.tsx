import React, { useState } from 'react';
import {
  HardHat,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Hammer,
  ShieldCheck
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const ConstructionMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todas' | 'estrutura' | 'alvenaria' | 'acabamento'>('todas');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);

  // 5 Etapas Cronológicas com Fotos REAIS de Obra Civil, Pedreiros e Mestres no Canteiro
  const featuredShots = [
    {
      stepNumber: '1',
      stepLabel: '1. Medição & Canteiro',
      title: 'Mestre de Obras e Engenheiro com Prancheta no Canteiro',
      subtitle: 'Conferência de medidas reais na obra de tijolos e colunas antes da compra',
      image: '/images/obra/mestre_canteiro.jpg',
      badge: 'ETAPA 1 • LEVANTAMENTO NO CANTEIRO',
      painAvoided: 'Começar a comprar material no "chute" ou de cabeça, errando a conta e tomando prejuízo no bolso logo na primeira semana.',
      solutionText: 'O mestre de obras insere as dimensões reais (comprimento x altura) no celular direto no canteiro. O OBRA CALC desconta automaticamente vãos de portas e janelas e entrega a área líquida exata calculada.',
      materialsIncluded: 'Metragem quadrada (m²), perímetro linear e margens técnicas de segurança contra perdas.'
    },
    {
      stepNumber: '2',
      stepLabel: '2. Fundações & Estrutura',
      title: 'Concretagem e Ferragem Armada em Fundação',
      subtitle: 'Operários concretando vigas baldrames e sapatas com armaduras de aço CA-50',
      image: '/images/obra/fundacao_concreto.jpg',
      badge: 'ETAPA 2 • ESTRUTURAS & CONCRETAGEM',
      painAvoided: 'Faltar agregados no meio da concretagem de uma viga ou sobrar concreto caro endurecendo no chão.',
      solutionText: 'Cálculo exato de volume (m³) com traço calibrado para concreto estrutural (20 a 30 MPa). O app detalha a quantidade exata de sacos de cimento, latas de areia média e latas de pedra brita.',
      materialsIncluded: 'Volume cúbico (m³), sacos de cimento CP-II/IV, latas/carrinhos de areia e brita 1.'
    },
    {
      stepNumber: '3',
      stepLabel: '3. Alvenaria em Ação',
      title: 'Pedreiro Assentando Tijolo Cerâmico com Colher e Argamassa',
      subtitle: 'Elevação técnica de parede com linha de náilon e colher de aço',
      image: '/images/obra/pedreiro_tijolo.jpg',
      badge: 'ETAPA 3 • ALVENARIA & PEDREIRO NA PRÁTICA',
      painAvoided: 'Comprar caminhão fechado de tijolos que quebram à toa e ficar sem argamassa no meio do expediente.',
      solutionText: 'Indica a quantidade exata de blocos cerâmicos ou de concreto por m² com 5% de quebra calculada, mais o traço de assentamento com sacos de cimento, cal hidratada e areia.',
      materialsIncluded: 'Milheiros/unidades de blocos, sacos de cimento, cal para liga e volume de areia média.'
    },
    {
      stepNumber: '4',
      stepLabel: '4. Pisos & Revestimento',
      title: 'Azulejista Assentando Porcelanato com Desempenadeira Dentada',
      subtitle: 'Espalhamento uniforme de argamassa colante AC e niveladores de piso',
      image: '/images/obra/azulejista_piso.jpg',
      badge: 'ETAPA 4 • AZULEJISTA & REVESTIMENTOS',
      painAvoided: 'Faltar 2 ou 3 caixas de piso para terminar o cômodo e não encontrar mais o mesmo lote ou tonalidade no depósito.',
      solutionText: 'Calcula a metragem real do piso e indica o número fechado de caixas já com margem de segurança de 10% para quebras e rodapés, mais os sacos de argamassa AC-I/II/III e quilos de rejunte.',
      materialsIncluded: 'Caixas de piso/porcelanato, sacos de argamassa colante AC e pacotes de rejunte antimofo.'
    },
    {
      stepNumber: '5',
      stepLabel: '5. Pintura & Acabamento',
      title: 'Pintor Profissional Aplicando Tinta com Rolo na Obra',
      subtitle: 'Aplicação com extensor e rolo em parede emassada e lixada',
      image: '/images/obra/pintor_acabamento.jpg',
      badge: 'ETAPA 5 • PINTURA PROFISSIONAL',
      painAvoided: 'Comprar latas grandes de 18L caras que sobram pela metade e secam guardadas sem uso.',
      solutionText: 'O app calcula o rendimento por demão e combina latas de 18L e galões de 3,6L da melhor forma para você pagar o menor valor possível no balcão da loja de tintas.',
      materialsIncluded: 'Latas de 18L, galões de 3,6L de tinta acrílica/látex, selador acrílico e massa corrida.'
    }
  ];

  // 6 Fotos Reais Adicionais Exclusivas de Obra Civil (Zero Repetições)
  const galleryItems = [
    {
      id: 'foto-est-1',
      category: 'estrutura',
      title: 'Amarração de Ferragens & Estribos de Aço CA-50',
      subtitle: 'Armador com torquês e arame recozido preparando vigas',
      desc: 'Montagem de estribos e vergalhões para garantir a resistência estrutural das colunas e vigas da casa sem trincas.',
      image: '/images/obra/ferragem_armada.jpg',
      tag: 'Aço & Ferragens'
    },
    {
      id: 'foto-alv-1',
      category: 'alvenaria',
      title: 'Alvenaria com Linha e Nível de Pedreiro',
      subtitle: 'Paredes retas com controle de massa e espessura de junta',
      desc: 'Controle de prumo e espessura de argamassa no assentamento de tijolos cerâmicos, garantindo paredes aprumadas.',
      image: '/images/obra/parede_alinhada.jpg',
      tag: 'Alvenaria na Prática'
    },
    {
      id: 'foto-acab-1',
      category: 'acabamento',
      title: 'Pedreiro Sarrafeando Reboco com Régua de Alumínio',
      subtitle: 'Argamassa e emboço regularizado na parede de tijolo',
      desc: 'Aplicação e sarrafeamento de argamassa com régua metálica, eliminando ondulações antes do acabamento fino.',
      image: '/images/obra/reboco_sarrafeado.jpg',
      tag: 'Reboco & Emboço'
    },
    {
      id: 'foto-est-2',
      category: 'estrutura',
      title: 'Estrutura Completa de Casa com Laje Concretada',
      subtitle: 'Paredes de tijolo baiano, vigas e laje pré-moldada escorada',
      desc: 'Visão real de residência em construção com alvenaria estrutural, escoras de madeira e concreto de laje sob o sol.',
      image: '/images/obra/casa_estrutura.jpg',
      tag: 'Casa em Construção'
    },
    {
      id: 'foto-alv-2',
      category: 'alvenaria',
      title: 'Canteiro Ativo: Betoneira, Areia, Brita e Cimento',
      subtitle: 'Preparo diário de traço de concreto e argamassa no canteiro',
      desc: 'Betoneira girando no canteiro com montes de areia média, brita 1 e sacos de cimento empilhados prontos para uso.',
      image: '/images/obra/betoneira_areia.jpg',
      tag: 'Canteiro de Obras'
    },
    {
      id: 'foto-acab-2',
      category: 'acabamento',
      title: 'Conferência de Prumo de Face e Nível de Bolha',
      subtitle: 'Pedreiro conferindo alinhamento e esquadro com fio de prumo',
      desc: 'Checagem rigorosa de alinhamento vertical com fio de prumo metálico e nível para garantir portas e janelas sem dente.',
      image: '/images/obra/prumo_esquadro.jpg',
      tag: 'Nível & Esquadro'
    }
  ];

  const filteredItems = activeTab === 'todas'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const currentFeatured = featuredShots[featuredIndex];

  return (
    <section id="obras-reais" className="py-16 sm:py-24 bg-[#090b0e] border-b border-stone-800/80 relative overflow-hidden w-full max-w-full">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[350px] max-w-full bg-amber-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4" />
            <span>Obras Reais da Construção Civil na Prática</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Veja Profissionais em Ação: <span className="text-amber-400">Da Fundação ao Acabamento</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Veja imagens reais de profissionais da construção civil e como o <strong>OBRA CALC</strong> resolve os problemas diários no canteiro, evitando desperdício de dinheiro e materiais.
          </p>
        </div>

        {/* Stage Timeline Navigation Bar */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {featuredShots.map((shot, idx) => {
            const isActive = featuredIndex === idx;
            return (
              <button
                key={shot.stepNumber}
                type="button"
                onClick={() => setFeaturedIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-lg shadow-amber-400/20 scale-[1.02]'
                    : 'bg-stone-900/90 text-stone-400 border-stone-800 hover:text-white hover:bg-stone-800 hover:border-stone-700'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${
                  isActive ? 'bg-stone-950 text-amber-400' : 'bg-stone-800 text-stone-300'
                }`}>
                  {shot.stepNumber}
                </span>
                <span>{shot.stepLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Visual Spotlight Card */}
        <div className="mb-16 rounded-2xl bg-stone-900/95 border border-stone-800 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Spotlight Image (7 cols) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-black border border-stone-800 group shadow-inner">
              <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Status Banner on Top Left */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentFeatured.badge}</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-lg bg-stone-950/90 backdrop-blur-md border border-stone-800/80">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {currentFeatured.title}
                  </h4>
                  <p className="text-[11px] text-amber-300/90 mt-0.5">
                    {currentFeatured.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanatory Context for Spotlight (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-3">
                  <HardHat className="w-3.5 h-3.5" />
                  <span>Profissional na Etapa {currentFeatured.stepNumber} de 5</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-snug">
                  {currentFeatured.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4 font-normal">
                  {currentFeatured.solutionText}
                </p>

                {/* Marketing Pain Avoided vs Calculated Material */}
                <div className="space-y-3 mb-6">
                  {/* Pain Avoided */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-950/20 border border-red-800/40 text-xs">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-300 block font-bold mb-0.5">Problema comum evitado na obra:</strong>
                      <span className="text-stone-300">{currentFeatured.painAvoided}</span>
                    </div>
                  </div>

                  {/* Materials Delivered */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-950/70 border border-stone-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-400 block font-bold mb-0.5">O que o OBRA CALC entrega pronto:</strong>
                      <span className="text-stone-300">{currentFeatured.materialsIncluded}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Action */}
              <div className="pt-2">
                <a
                  href={CAKTO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs tracking-wide shadow-md transition-colors"
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
              <span>Fotos Reais de Profissionais da Construção Civil</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Imagens reais de pedreiros, armadores, azulejistas e operários em canteiros ativos.
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

        {/* 6 Real Construction Photos Grid (100% distinct, zero duplicates) */}
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
                <span className="text-stone-500 group-hover:text-amber-400 transition-colors font-mono font-bold">
                  R$ 19,90
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
