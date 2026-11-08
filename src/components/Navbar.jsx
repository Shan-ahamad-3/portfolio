import { useState } from 'react';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import ThemeToggle from './ui/ThemeToggle';
import { profile } from '../data/resume';

const navLinks = [
  { label: 'Foundations', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Leadership', href: '#volunteering' },
  { label: 'Pursuits', href: '#pursuits' },
];

export default function Navbar({ activeSection, theme, toggleTheme, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F1E7]/95 dark:bg-[#0B0E11]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#2A303A] transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Full Legal Name anchored neatly to the far left edge */}
        <a 
          href="#" 
          className="font-bold text-base sm:text-lg text-slate-900 dark:text-[#ECEFF4] tracking-tight hover:text-[#C77D2B] transition-colors whitespace-nowrap"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#C77D2B] font-bold bg-[#EFE9DC] dark:bg-[#14181E] border border-[#C77D2B]/40'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-[#2A303A] mx-1" />

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            type="button"
            className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-slate-900 dark:text-[#ECEFF4] border border-slate-300 dark:border-[#2A303A] hover:border-[#C77D2B] hover:text-[#C77D2B] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            Contact
          </button>

          {/* Download Resume (PDF) */}
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-[#C77D2B] hover:bg-[#AF6A20] text-[#0B0E11] transition-colors whitespace-nowrap shadow-xs"
            title="Download verified resume (PDF)"
          >
            <FiFileText className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleContactClick}
            type="button"
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-900 dark:text-[#ECEFF4] border border-slate-300 dark:border-[#2A303A]"
          >
            Contact
          </button>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#181D24] transition-colors"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#2A303A] bg-[#F6F1E7] dark:bg-[#0B0E11] px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-sm font-mono text-slate-700 dark:text-zinc-300 hover:bg-[#EFE9DC] dark:hover:bg-[#181D24] hover:text-[#C77D2B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C77D2B] text-[#0B0E11] font-bold font-mono text-xs"
            >
              <FiFileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
