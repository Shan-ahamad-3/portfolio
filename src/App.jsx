import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import TerminalBootIntro from './components/TerminalBootIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import TechFoundations from './components/TechFoundations';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Pursuits from './components/Pursuits';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const sectionIds = [
  'milestones',
  'projects',
  'skills',
  'certifications',
  'volunteering',
  'pursuits'
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds, 140);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Terminal boot intro: runs once per session via sessionStorage
  const [showBootIntro, setShowBootIntro] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('has_booted_intro');
  });

  const [hasCompletedIntro, setHasCompletedIntro] = useState(!showBootIntro);

  const handleBootComplete = () => {
    sessionStorage.setItem('has_booted_intro', 'true');
    setShowBootIntro(false);
    setHasCompletedIntro(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showBootIntro) {
        handleBootComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showBootIntro]);

  return (
    <div className={`min-h-screen overflow-x-hidden bg-[var(--bg-canvas)] text-slate-100 font-sans antialiased selection:bg-[var(--accent)] selection:text-[#090a0f] transition-colors duration-300 ${hasCompletedIntro ? 'animate-portfolio-in' : ''}`}>
      
      {/* 1. Terminal Boot Intro (plays once per session) */}
      {showBootIntro && (
        <TerminalBootIntro onComplete={handleBootComplete} />
      )}

      {/* 2. Sticky Navbar with Reliable Contact Trigger */}
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Main Stream */}
      <main>
        <Hero />
        <Journey />
        <Projects />
        <TechFoundations />
        <Certifications />
        <Volunteering />
        <Pursuits />
      </main>

      {/* 4. Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* 5. Minimal Code-Comment Footer */}
      <Footer />

      {/* 6. Dynamic Live Palette Test Switcher Dock */}
      <ThemeSwitcher />

    </div>
  );
}
