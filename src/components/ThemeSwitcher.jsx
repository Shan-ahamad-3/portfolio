import { useState, useEffect } from 'react';
import { FiCheck, FiLayers } from 'react-icons/fi';

const themes = [
  {
    id: 'technical-blueprint',
    name: 'Technical Blueprint',
    tag: 'Tech Slate 60-30-10 (#38BDF8)',
    dotColor: '#38bdf8',
    bgColor: '#0F1115',
  },
  {
    id: 'terminal-monolith',
    name: 'Terminal Monolith',
    tag: 'Obsidian + Amber (#F59E0B)',
    dotColor: '#f59e0b',
    bgColor: '#090a0f',
  },
  {
    id: 'editorial-minimalist',
    name: 'Editorial Minimalist',
    tag: 'Carbon + Sage/Mint (#34D399)',
    dotColor: '#34d399',
    bgColor: '#0b0c0e',
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-palette-theme') || 'technical-blueprint';
    }
    return 'technical-blueprint';
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
        <div className="mb-2 p-2 rounded-2xl bg-[#0F1115]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-1 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 flex items-center justify-between">
            <span>Palette Architecture</span>
            <span
              className="w-2.5 h-2.5 rounded-full"
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
                  className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white/10 text-[#F1F5F9] border border-white/15 shadow-xs'
                      : 'hover:bg-white/5 text-[#94A3B8]'
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

      {/* Floating Pill Dock with 44px minimum touch target */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Toggle live palette switcher"
        className="flex items-center gap-2.5 min-h-[44px] px-4 py-2.5 rounded-full bg-[#0F1115]/90 hover:bg-[#14171b] border border-white/15 hover:border-white/30 shadow-2xl backdrop-blur-md text-[#F1F5F9] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
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
