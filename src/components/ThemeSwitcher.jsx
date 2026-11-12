import { useState, useEffect } from 'react';
import { FiCheck, FiLayers } from 'react-icons/fi';

const palettes = [
  {
    id: 'dev-tool',
    name: 'Dev-Tool Startup',
    tag: 'Ink Black + Acid Lime (#BAFF29)',
    dotColor: '#baff29',
    bgColor: '#030407',
  },
  {
    id: 'technical-blueprint',
    name: 'Technical Blueprint',
    tag: 'Deep Navy + Steel Blue (#38BDF8)',
    dotColor: '#38bdf8',
    bgColor: '#060D1A',
  },
  {
    id: 'terminal-monolith',
    name: 'Terminal Monolith',
    tag: 'Warm Espresso + Amber (#F59E0B)',
    dotColor: '#f59e0b',
    bgColor: '#0F0B07',
  },
  {
    id: 'editorial-minimalist',
    name: 'Editorial Minimalist',
    tag: 'Forest Carbon + Sage/Mint (#34D399)',
    dotColor: '#34d399',
    bgColor: '#06100C',
  },
];

export default function ThemeSwitcher() {
  const [currentPalette, setCurrentPalette] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-palette-architecture') || 'dev-tool';
    }
    return 'dev-tool';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', currentPalette);
    localStorage.setItem('app-palette-architecture', currentPalette);
  }, [currentPalette]);

  const activePaletteMeta = palettes.find((p) => p.id === currentPalette) || palettes[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 font-mono text-xs select-none">
      {/* Menu Tray when open */}
      {isOpen && (
        <div className="mb-2 p-2 rounded-2xl bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-card)] shadow-2xl space-y-1 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] border-b border-[var(--border-card)] flex items-center justify-between">
            <span>Palette Architecture</span>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: activePaletteMeta.dotColor }}
            />
          </div>

          <div className="space-y-1 pt-1">
            {palettes.map((p) => {
              const isSelected = currentPalette === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentPalette(p.id);
                    setIsOpen(false);
                  }}
                  type="button"
                  className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white/10 text-[var(--text-primary)] border border-[var(--border-card)] shadow-xs'
                      : 'hover:bg-white/5 text-[var(--text-secondary)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs shrink-0"
                      style={{ backgroundColor: p.dotColor }}
                    />
                    <div>
                      <div className="font-semibold text-xs leading-snug">{p.name}</div>
                      <div className="text-[10px] opacity-80">{p.tag}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <FiCheck
                      className="w-4 h-4 shrink-0"
                      style={{ color: p.dotColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Dock with 44px minimum touch target */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Toggle live palette architecture switcher"
        className="flex items-center gap-2.5 min-h-[44px] px-4 py-2.5 rounded-full bg-[var(--bg-card)] hover:opacity-90 border border-[var(--border-card)] shadow-2xl backdrop-blur-md text-[var(--text-primary)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        <FiLayers className="w-4 h-4 opacity-75" />
        <span className="font-medium text-[11px]">{activePaletteMeta.name}</span>
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/40 shadow-xs animate-pulse"
          style={{ backgroundColor: activePaletteMeta.dotColor }}
        />
      </button>
    </div>
  );
}
