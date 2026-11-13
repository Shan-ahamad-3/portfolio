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
    <div className={`relative min-h-screen overflow-x-hidden bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[#030407] transition-colors duration-300 ${hasCompletedIntro ? 'animate-portfolio-in' : ''}`}>
      
      {/* Fixed Ambient Background Wrapper: Subtle Dot Matrix & Blurred Geometric Orbs */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      >
        {/* Subtle dot-matrix background grid */}
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Ambient Blurred Geometric Orbs */}
        {/* 1. Acid Lime Orb (Top-Left) */}
        <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#BAFF29]/12 blur-[130px]" />

        {/* 2. Electric Violet Orb (Mid-Right) */}
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/15 blur-[130px]" />

        {/* 3. Acid Lime & Violet Blend Orb (Bottom-Center) */}
        <div className="absolute bottom-[-10%] left-[25%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#BAFF29]/10 via-[#8B5CF6]/12 to-transparent blur-[140px]" />
      </div>

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

    </div>
  );
}
