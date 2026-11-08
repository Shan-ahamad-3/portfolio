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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
        
        {/* Left / Center (7 cols): Prominent Centralized Radial Compass Dial */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center font-mono">
            
            {/* Outer Compass Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-zinc-800" />
            <div className="absolute inset-8 rounded-full border border-dashed border-slate-300 dark:border-zinc-700/80" />
            <div className="absolute inset-20 rounded-full border border-slate-200 dark:border-zinc-800" />
            
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-slate-200 dark:border-zinc-800 pointer-events-none" />
            <div className="absolute h-full w-[1px] bg-slate-200 dark:border-zinc-800 pointer-events-none" />

            {/* Core Center Axis */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-white dark:bg-[#0B0E11] border-2 border-[#C77D2B] flex flex-col items-center justify-center shadow-lg">
              <span className="text-[10px] text-[#C77D2B] font-bold tracking-widest uppercase">DIAL</span>
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">{activeDir}</span>
            </div>

            {/* Northwest: Chess */}
            <button
              onClick={() => setActiveDir("NW")}
              onMouseEnter={() => setActiveDir("NW")}
              type="button"
              className={`absolute top-6 left-6 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NW"
                  ? "bg-[#C77D2B] text-[#0B0E11] font-bold scale-105 ring-4 ring-amber-500/20"
                  : "bg-white dark:bg-[#14181E] text-slate-800 dark:text-[#ECEFF4] border border-slate-200 dark:border-[#2A303A] hover:border-[#C77D2B]"
              }`}
            >
              Northwest • Chess
            </button>

            {/* Northeast: Karate */}
            <button
              onClick={() => setActiveDir("NE")}
              onMouseEnter={() => setActiveDir("NE")}
              type="button"
              className={`absolute top-6 right-6 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "NE"
                  ? "bg-[#C77D2B] text-[#0B0E11] font-bold scale-105 ring-4 ring-amber-500/20"
                  : "bg-white dark:bg-[#14181E] text-slate-800 dark:text-[#ECEFF4] border border-slate-200 dark:border-[#2A303A] hover:border-[#C77D2B]"
              }`}
            >
              Northeast • Karate
            </button>

            {/* Southwest: Badminton */}
            <button
              onClick={() => setActiveDir("SW")}
              onMouseEnter={() => setActiveDir("SW")}
              type="button"
              className={`absolute bottom-6 left-6 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SW"
                  ? "bg-[#C77D2B] text-[#0B0E11] font-bold scale-105 ring-4 ring-amber-500/20"
                  : "bg-white dark:bg-[#14181E] text-slate-800 dark:text-[#ECEFF4] border border-slate-200 dark:border-[#2A303A] hover:border-[#C77D2B]"
              }`}
            >
              Southwest • Badminton
            </button>

            {/* Southeast: Literature */}
            <button
              onClick={() => setActiveDir("SE")}
              onMouseEnter={() => setActiveDir("SE")}
              type="button"
              className={`absolute bottom-6 right-6 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-20 shadow-md ${
                activeDir === "SE"
                  ? "bg-[#C77D2B] text-[#0B0E11] font-bold scale-105 ring-4 ring-amber-500/20"
                  : "bg-white dark:bg-[#14181E] text-slate-800 dark:text-[#ECEFF4] border border-slate-200 dark:border-[#2A303A] hover:border-[#C77D2B]"
              }`}
            >
              Southeast • Literature
            </button>
          </div>
        </div>

        {/* Right (5 cols): Symmetrically Aligned In-Place Details Panel (Zero Layout Shift) */}
        <div className="lg:col-span-5">
          <Card className="p-7 md:p-8 space-y-6 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-lg">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#2A303A] pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#C77D2B]">
                  {selected.direction} Coordinate
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-[#ECEFF4]">
                  {selected.name}
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#EFE9DC] dark:bg-[#181D24] text-slate-800 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 font-semibold">
                {selected.shortDir}
              </span>
            </div>

            {/* Real Photographic Media */}
            <div className="w-full h-56 rounded-xl overflow-hidden bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-zinc-800">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-mono font-bold text-[#C77D2B]">
                {selected.tagline}
              </div>
              <p className="text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                {selected.context}
              </p>
            </div>

          </Card>
        </div>

      </div>
    </Section>
  );
}
