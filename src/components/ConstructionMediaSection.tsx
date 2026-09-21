import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Maximize2,
  HardHat,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const ConstructionMediaSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'todas' | 'estrutura' | 'alvenaria' | 'acabamento'>('todas');

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

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

  // Video source: local offline fallback + remote mirror
  const localVideoUrl = './assets/construction-timelapse.mp4';
  const remoteVideoUrl = 'https://archive.org/download/Timelapse_of_New_Show_Low_Public_Library_and_City_4_TV_studio_Construction_site./Timelapse_of_New_Show_Low_Public_Library_and_City_4_TV_studio_Construction_site..mp4';
  const videoPoster = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

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
            Imagens e Vídeo Real: <span className="text-amber-400">Da Fundação ao Acabamento</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Veja como o <strong>OBRA CALC</strong> se aplica na rotina prática da construção civil, trazendo precisão exata para cada etapa do seu canteiro.
          </p>
        </div>

        {/* Featured Video Player Card */}
        <div className="mb-16 rounded-2xl bg-stone-900/90 border border-stone-800 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Video Container (7 cols) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-black border border-stone-800 group shadow-inner">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster={videoPoster}
                className="w-full h-auto aspect-video object-cover"
              >
                <source src={localVideoUrl} type="video/mp4" />
                <source src={remoteVideoUrl} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>

              {/* Status Banner on Top Left */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>CANTEIRO EM ANDAMENTO • SEM ÁUDIO</span>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between p-2 rounded-lg bg-stone-950/85 backdrop-blur-md border border-stone-800/80">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                    className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center transition-colors font-bold shadow"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <span className="text-xs text-stone-300 font-medium pl-1">
                    {isPlaying ? 'Reproduzindo canteiro' : 'Pausado'}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-400">
                  <span className="hidden sm:inline-block font-mono text-[11px] text-amber-400/90 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                    HD • 1080p
                  </span>
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    title="Tela cheia"
                    className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Explanatory Context for Video (5 cols) */}
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

              {/* Fast Action */}
              <div className="pt-2">
                <a
                  href={CAKTO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-center"
                >
                  <span>Acessar o OBRA CALC por R$ 19,90</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Section Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Variações e Aplicações Reais em Obra
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Imagens reais das principais etapas abrangidas pela ferramenta
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('todas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeTab === 'todas'
                  ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Todas as Etapas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('estrutura')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeTab === 'estrutura'
                  ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Estruturas & Concreto
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('alvenaria')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeTab === 'alvenaria'
                  ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Alvenaria
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('acabamento')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeTab === 'acabamento'
                  ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Acabamentos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-b from-[#141822] to-[#0e1118] border border-stone-800 hover:border-amber-400/40 overflow-hidden transition-all duration-300 flex flex-col shadow-lg shadow-black/40"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-black/30" />
                
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-amber-400/80 font-medium block mb-2">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Incluso no OBRA CALC</span>
                  </span>
                  <span className="text-amber-400 font-mono font-bold">R$ 19,90</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
