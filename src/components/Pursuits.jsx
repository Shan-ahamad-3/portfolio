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
        
        {/* Left / Center (7 cols): Prominent Centralized Radial Compass Dial with Clean Non-Overlapping Controls */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px] flex items-center justify-center font-mono select-none">
            
            {/* Outer Compass Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute h-full w-[1px] bg-white/10 pointer-events-none" />

            {/* Core Center Axis */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[var(--bg-canvas)] border-2 theme-accent-border flex flex-col items-center justify-center shadow-lg">
              <span className="text-[10px] theme-accent font-bold tracking-widest uppercase">DIAL</span>
              <span className="text-xs font-bold text-[var(--text-primary)]">{activeDir}</span>
            </div>

            {/* Northwest: Chess */}
            <button
              onClick={() => setActiveDir("NW")}
              onMouseEnter={() => setActiveDir("NW")}
              type="button"
              className={`absolute top-3 left-2 sm:top-5 sm:left-4 min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NW"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]"
              }`}
            >
              Northwest • Chess
            </button>

            {/* Northeast: Karate */}
            <button
              onClick={() => setActiveDir("NE")}
              onMouseEnter={() => setActiveDir("NE")}
              type="button"
              className={`absolute top-3 right-2 sm:top-5 sm:right-4 min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NE"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]"
              }`}
            >
              Northeast • Karate
            </button>

            {/* Southwest: Badminton (Separated offset to eliminate horizontal overlap) */}
            <button
              onClick={() => setActiveDir("SW")}
              onMouseEnter={() => setActiveDir("SW")}
              type="button"
              className={`absolute bottom-3 left-2 sm:bottom-5 sm:left-4 min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SW"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]"
              }`}
            >
              Southwest • Badminton
            </button>

            {/* Southeast: Literature (Separated offset to eliminate horizontal overlap) */}
            <button
              onClick={() => setActiveDir("SE")}
              onMouseEnter={() => setActiveDir("SE")}
              type="button"
              className={`absolute bottom-3 right-2 sm:bottom-5 sm:right-4 min-h-[44px] px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SE"
                  ? "theme-accent-bg text-[#090a0f] font-bold scale-105 shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]"
              }`}
            >
              Southeast • Literature
            </button>
          </div>
        </div>

        {/* Right (5 cols): Symmetrically Aligned In-Place Details Panel (Zero Layout Shift) */}
        <div className="lg:col-span-5">
          <Card className="p-6 sm:p-8 space-y-6 rounded-2xl glass-card shadow-lg">
            
            <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase theme-accent">
                  {selected.direction} Coordinate
                </span>
                <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  {selected.name}
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-[var(--text-secondary)] border border-[var(--border-card)] font-semibold">
                {selected.shortDir}
              </span>
            </div>

            {/* Real Photographic Media with nested rounded-xl */}
            <div className="w-full h-56 rounded-xl overflow-hidden bg-black/40 border border-[var(--border-card)]">
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
              <p className="text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                {selected.context}
              </p>
            </div>

          </Card>
        </div>

      </div>
    </Section>
  );
}
