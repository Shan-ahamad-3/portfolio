import { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { pursuits } from '../data/resume';

export default function Pursuits() {
  const [activeDir, setActiveDir] = useState("NW");
  const selected = pursuits.find((p) => p.shortDir === activeDir) || pursuits[0];

  return (
    <Section 
      id="pursuits" 
      title="Pursuits Beyond Code" 
      subtitle="Discipline, tactical calculation, and focus mapped across polar coordinates."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Center (7 cols): Prominent Centralized Radial Compass Dial */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center font-mono">
            
            {/* Outer Compass Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute h-full w-[1px] bg-white/10 pointer-events-none" />

            {/* Core Center Axis */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#0F1115] border-2 theme-accent-border flex flex-col items-center justify-center shadow-lg">
              <span className="text-[10px] theme-accent font-bold tracking-widest uppercase">DIAL</span>
              <span className="text-xs font-bold text-[#F1F5F9]">{activeDir}</span>
            </div>

            {/* Northwest: Chess */}
            <button
              onClick={() => setActiveDir("NW")}
              onMouseEnter={() => setActiveDir("NW")}
              type="button"
              className={`absolute top-6 left-6 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NW"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-white/5 text-[#F1F5F9] border border-white/10 hover:border-[var(--accent)]"
              }`}
            >
              Northwest • Chess
            </button>

            {/* Northeast: Karate */}
            <button
              onClick={() => setActiveDir("NE")}
              onMouseEnter={() => setActiveDir("NE")}
              type="button"
              className={`absolute top-6 right-6 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NE"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-white/5 text-[#F1F5F9] border border-white/10 hover:border-[var(--accent)]"
              }`}
            >
              Northeast • Karate
            </button>

            {/* Southwest: Badminton */}
            <button
              onClick={() => setActiveDir("SW")}
              onMouseEnter={() => setActiveDir("SW")}
              type="button"
              className={`absolute bottom-6 left-6 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SW"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-white/5 text-[#F1F5F9] border border-white/10 hover:border-[var(--accent)]"
              }`}
            >
              Southwest • Badminton
            </button>

            {/* Southeast: Literature */}
            <button
              onClick={() => setActiveDir("SE")}
              onMouseEnter={() => setActiveDir("SE")}
              type="button"
              className={`absolute bottom-6 right-6 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SE"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-white/5 text-[#F1F5F9] border border-white/10 hover:border-[var(--accent)]"
              }`}
            >
              Southeast • Literature
            </button>
          </div>
        </div>

        {/* Right (5 cols): Symmetrically Aligned In-Place Details Panel (Zero Layout Shift) */}
        <div className="lg:col-span-5">
          <Card className="p-6 sm:p-8 space-y-6 rounded-2xl glass-card shadow-lg">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase theme-accent">
                  {selected.direction} Coordinate
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#F1F5F9]">
                  {selected.name}
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-[#94A3B8] border border-white/10 font-semibold">
                {selected.shortDir}
              </span>
            </div>

            {/* Real Photographic Media with nested rounded-xl */}
            <div className="w-full h-56 rounded-xl overflow-hidden bg-black/40 border border-white/10">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-mono font-bold theme-accent">
                {selected.tagline}
              </div>
              <p className="text-base text-[#94A3B8] leading-relaxed font-sans">
                {selected.context}
              </p>
            </div>

          </Card>
        </div>

      </div>
    </Section>
  );
}
