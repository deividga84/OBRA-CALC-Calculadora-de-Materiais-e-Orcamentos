import React, { useState } from 'react';
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Layers,
  Percent,
  Sliders,
  Building2,
  Hammer
} from 'lucide-react';
import { CAKTO_CHECKOUT_URL } from '../config';

export const Hero: React.FC = () => {
  // Interactive preview state to let prospective buyers feel the power of the tool
  const [wallLength, setWallLength] = useState<number>(6); // meters
  const [wallHeight, setWallHeight] = useState<number>(2.8); // meters
  const [wasteMargin, setWasteMargin] = useState<number>(10); // %
  const [materialType, setMaterialType] = useState<'bloco_concreto' | 'tijolo_ceramico'>('tijolo_ceramico');

  // Realistic calculation formula
  const area = wallLength * wallHeight;
  // tijolo cerâmico: ~28 unidades/m2; bloco de concreto (14x19x39): ~12.5 unidades/m2
  const baseUnitsPerM2 = materialType === 'tijolo_ceramico' ? 26 : 12.5;
  const rawUnits = area * baseUnitsPerM2;
  const totalUnits = Math.round(rawUnits * (1 + wasteMargin / 100));

  // Cement (approx 0.12 sacos/m2 de alvenaria)
  const cementBags = (area * 0.13 * (1 + wasteMargin / 100)).toFixed(1);
  // Sand (approx 0.022 m3/m2)
  const sandM3 = (area * 0.024 * (1 + wasteMargin / 100)).toFixed(2);
  // Estimated material cost (demonstrative based on current market averages)
  const unitPrice = materialType === 'tijolo_ceramico' ? 1.45 : 3.80;
  const estimatedTotalCost = (
    totalUnits * unitPrice +
    parseFloat(cementBags) * 36.0 +
    parseFloat(sandM3) * 120.0
  ).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-800/80">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-12 right-10 w-[300px] h-[300px] bg-orange-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d18_1px,transparent_1px),linear-gradient(to_bottom,#1f242d18_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>OBRA CALC • Calculadora de Materiais e Orçamentos</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
              CALCULE OS MATERIAIS DA SUA OBRA DE FORMA{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                RÁPIDA E ORGANIZADA
              </span>
            </h1>

            {/* Short Explanatory Text */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed mb-8 font-normal">
              O <strong className="text-white font-semibold">OBRA CALC</strong> foi desenvolvido para ajudar você a estimar materiais, quantidades exatas e custos de uma obra de maneira prática e confiável. Elimine compras no escuro, evite desperdícios no canteiro e tenha relatórios prontos em poucos minutos.
            </p>

            {/* Price Box Callout */}
            <div className="w-full sm:w-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-900/95 to-stone-900/80 border border-amber-500/30 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 shadow-xl shadow-black/40">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400/90">
                  Oferta de Lançamento
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    R$ 19,90
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    Pagamento único
                  </span>
                </div>
                <span className="text-xs text-stone-400 mt-0.5">
                  Sem mensalidades • Sem taxas adicionais
                </span>
              </div>

              <div className="hidden sm:block h-12 w-px bg-stone-800 mx-2" />

              <div className="space-y-1 text-xs text-stone-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Acesso imediato no seu e-mail</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Funciona em celular e computador</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Todos os módulos inclusos</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-buy-button"
                href={CAKTO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>COMPRAR AGORA — R$ 19,90</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 font-semibold text-sm border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <span>Como funciona</span>
              </a>
            </div>

            {/* Security mini footer */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-stone-800/60 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Para pedreiros, mestres e construtores</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Cálculo com margem de perda</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Calculator Simulation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#161a22] to-[#0f1217] p-5 sm:p-6 border border-stone-800 shadow-2xl shadow-black/80">
              {/* Header of UI Simulator */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Simulação do Módulo de Alvenaria
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Teste os parâmetros em tempo real
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800 text-[11px] font-mono text-amber-400">
                  <Percent className="w-3 h-3" />
                  <span>Perda: {wasteMargin}%</span>
                </div>
              </div>

              {/* Interactive Inputs */}
              <div className="space-y-4 text-xs">
                {/* Material Select */}
                <div>
                  <label className="block text-stone-400 font-semibold mb-1.5">
                    Tipo de Material:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMaterialType('tijolo_ceramico')}
                      className={`px-3 py-2 rounded-lg font-medium text-left border transition-all ${
                        materialType === 'tijolo_ceramico'
                          ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      Tijolo Cerâmico (8 furos)
                    </button>
                    <button
                      type="button"
                      onClick={() => setMaterialType('bloco_concreto')}
                      className={`px-3 py-2 rounded-lg font-medium text-left border transition-all ${
                        materialType === 'bloco_concreto'
                          ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      Bloco de Concreto (14x19x39)
                    </button>
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800">
                    <div className="flex justify-between items-center text-stone-400 mb-1">
                      <span>Comprimento (m):</span>
                      <span className="font-bold text-white font-mono">{wallLength}m</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={20}
                      step={0.5}
                      value={wallLength}
                      onChange={(e) => setWallLength(parseFloat(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800">
                    <div className="flex justify-between items-center text-stone-400 mb-1">
                      <span>Altura (m):</span>
                      <span className="font-bold text-white font-mono">{wallHeight}m</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={5}
                      step={0.1}
                      value={wallHeight}
                      onChange={(e) => setWallHeight(parseFloat(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Waste Margin slider */}
                <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-800">
                  <div className="flex justify-between items-center text-stone-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-amber-400" />
                      Margem de perda / quebra:
                    </span>
                    <span className="font-bold text-amber-400 font-mono">+{wasteMargin}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={wasteMargin}
                    onChange={(e) => setWasteMargin(parseInt(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Real-time Output Breakdown */}
              <div className="mt-5 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3 font-medium">
                  <span>Área total: <strong className="text-white font-mono">{area.toFixed(2)} m²</strong></span>
                  <span className="text-emerald-400 font-semibold">Cálculo Instantâneo</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="bg-stone-900/90 p-2.5 rounded-lg border border-stone-800/80">
                    <span className="block text-[10px] uppercase font-semibold text-stone-400">
                      {materialType === 'tijolo_ceramico' ? 'Tijolos' : 'Blocos'}
                    </span>
                    <span className="text-base sm:text-lg font-black text-amber-400 font-mono">
                      {totalUnits}
                    </span>
                    <span className="block text-[9px] text-stone-400">unidades</span>
                  </div>

                  <div className="bg-stone-900/90 p-2.5 rounded-lg border border-stone-800/80">
                    <span className="block text-[10px] uppercase font-semibold text-stone-400">
                      Cimento
                    </span>
                    <span className="text-base sm:text-lg font-black text-white font-mono">
                      {cementBags}
                    </span>
                    <span className="block text-[9px] text-stone-400">sacos (50kg)</span>
                  </div>

                  <div className="bg-stone-900/90 p-2.5 rounded-lg border border-stone-800/80">
                    <span className="block text-[10px] uppercase font-semibold text-stone-400">
                      Areia
                    </span>
                    <span className="text-base sm:text-lg font-black text-white font-mono">
                      {sandM3}
                    </span>
                    <span className="block text-[9px] text-stone-400">m³</span>
                  </div>
                </div>

                {/* Estimated Budget Card */}
                <div className="bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/20 p-3 rounded-xl border border-amber-500/25 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-bold">
                      Estimativa de Insumos
                    </span>
                    <span className="text-xs text-stone-300">
                      Materiais básicos calculados
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-400 block">Total Est.:</span>
                    <span className="text-base font-extrabold text-amber-400 font-mono">
                      R$ {estimatedTotalCost}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Purchase Link from preview */}
              <div className="mt-4 pt-3 text-center">
                <a
                  href={CAKTO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Liberar acesso a todos os materiais por R$ 19,90</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
