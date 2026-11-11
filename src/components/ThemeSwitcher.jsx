import { useState, useEffect } from 'react';
import { FiCheck, FiLayers } from 'react-icons/fi';

const themes = [
  {
    id: 'terminal-monolith',
    name: 'Terminal Monolith',
    tag: 'Obsidian + Amber',
    dotColor: '#f59e0b',
    bgColor: '#090a0f',
  },
  {
    id: 'editorial-minimalist',
    name: 'Editorial Minimalist',
    tag: 'Carbon + Sage/Mint',
    dotColor: '#34d399',
    bgColor: '#0b0c0e',
  },
  {
    id: 'technical-blueprint',
    name: 'Technical Blueprint',
    tag: 'Midnight + Steel Blue',
    dotColor: '#38bdf8',
    bgColor: '#0a0e17',
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-palette-theme') || 'terminal-monolith';
    }
    return 'terminal-monolith';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('app-palette-theme', currentTheme);
  }, [currentTheme]);

  const activeThemeMeta = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 font-mono text-xs select-none">
      {/* Menu Tray when open */}
      {isOpen && (
        <div className="mb-2 p-2 rounded-2xl bg-[#12151e]/95 backdrop-blur-md border border-[#1e2433] shadow-2xl space-y-1 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 flex items-center justify-between">
            <span>Palette Test Switcher</span>
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: activeThemeMeta.dotColor }}
            />
          </div>

          <div className="space-y-1 pt-1">
            {themes.map((t) => {
              const isSelected = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setCurrentTheme(t.id);
                    setIsOpen(false);
                  }}
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-800/90 text-white border border-slate-700/80 shadow-xs'
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs shrink-0"
                      style={{ backgroundColor: t.dotColor }}
                    />
                    <div>
                      <div className="font-semibold text-xs leading-snug">{t.name}</div>
                      <div className="text-[10px] text-slate-400">{t.tag}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <FiCheck
                      className="w-4 h-4 shrink-0"
                      style={{ color: t.dotColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Dock */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Toggle live palette switcher"
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#12151e]/90 hover:bg-[#12151e] border border-[#1e2433] hover:border-slate-700 shadow-xl backdrop-blur-md text-slate-200 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        <FiLayers className="w-4 h-4 text-slate-400" />
        <span className="font-medium text-[11px]">{activeThemeMeta.name}</span>
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/40 shadow-xs animate-pulse"
          style={{ backgroundColor: activeThemeMeta.dotColor }}
        />
      </button>
    </div>
  );
}

