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

  const handleBootComplete = () => {
    sessionStorage.setItem('has_booted_intro', 'true');
    setShowBootIntro(false);
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
    <div className="min-h-screen bg-[#F4F1EA] dark:bg-[#0D1117] text-slate-900 dark:text-[#F0F6FC] font-sans antialiased selection:bg-[#E8A33D] selection:text-[#0D1117] transition-colors">
      
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
        <Hero onOpenContact={() => setIsContactOpen(true)} />
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
