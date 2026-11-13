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
    <header className="sticky top-0 z-40 bg-[var(--bg-canvas)]/90 backdrop-blur-md border-b border-[var(--border-card)] transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Text anchored neatly to the far left edge */}
        <a 
          href="#" 
          className="font-bold text-lg sm:text-xl font-heading text-[var(--text-primary)] tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          ZEESHAN<span className="text-[var(--accent)] font-extrabold">.</span>
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
                    ? 'theme-accent font-bold bg-[var(--accent-muted)] border border-[var(--accent-border)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="h-4 w-[1px] bg-[var(--border-card)] mx-1" />

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            type="button"
            className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
          >
            Contact
          </button>

          {/* Download Resume (PDF) */}
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold theme-accent-bg text-[#090a0f] transition-all whitespace-nowrap shadow-xs hover:opacity-90"
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
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--text-primary)] border border-[var(--border-card)]"
          >
            Contact
          </button>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-muted)] transition-colors"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-card)] bg-[var(--bg-canvas)] px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-sm font-mono text-[var(--text-secondary)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
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
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg theme-accent-bg text-[#090a0f] font-bold font-mono text-xs"
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
