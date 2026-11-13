import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaChessKnight, FaFistRaised } from 'react-icons/fa';
import { GiShuttlecock, GiOpenBook } from 'react-icons/gi';

const clockNodes = [
  {
    id: '12',
    title: 'Chess',
    name: 'Chess',
    angle: 0,
    subtitle: 'Strategy & Calculation',
    icon: FaChessKnight,
    image: '/images/pursuits/chess.jpg',
    lead: 'Strategic thinking under rigid clock constraints, positional pawn structures, and anticipating deep multi-move tactical trees.',
    bullets: [
      'Positional calculation and tactical endgame planning',
      'Rapid decision-making under strict blitz/rapid time controls'
    ]
  },
  {
    id: '03',
    title: 'Karate',
    name: 'Karate',
    angle: 90,
    subtitle: 'Discipline & Form',
    icon: FaFistRaised,
    image: '/images/pursuits/karate.jpg',
    lead: 'Brown Belt Dan 3 Practitioner in Shotokan Karate. Grounded in repetitive execution, physical conditioning, and rigorous martial discipline.',
    bullets: [
      'National-level Karate competitor (ages 15–16) with focus on kata precision and kumite sparring.',
      'Daily practice emphasizing kata precision, breath cadence, and posture control'
    ]
  },
  {
    id: '06',
    title: 'Badminton',
    name: 'Badminton',
    angle: 180,
    subtitle: 'Agility & Reflexes',
    icon: GiShuttlecock,
    image: '/images/pursuits/badminton.jpg',
    lead: 'High-cadence cardiovascular endurance, split-step court movement, and precise shot placement along deep tramlines.',
    bullets: [
      'Explosive lateral mobility and reaction speed drills',
      'Singles court coverage and disciplined shot selection'
    ]
  },
  {
    id: '09',
    title: 'Literature',
    name: 'Literature',
    angle: 270,
    subtitle: 'Introspection & Focus',
    icon: GiOpenBook,
    image: '/images/pursuits/literature.jpg',
    lead: 'Curated reading across operational discipline, biographical retrospectives, and introspective poetry to maintain intellectual equilibrium.',
    bullets: [
      'Deep reading habits centered on operational clarity and biographies',
      'Reflective prose and contemplative poetry exploring composure'
    ]
  }
];

export default function Pursuits() {
  const [activeId, setActiveId] = useState('03'); // Karate default
  const [rotationAngle, setRotationAngle] = useState(90); // 90deg for Karate default
  const [lightboxImg, setLightboxImg] = useState(null);

  const activeNode = clockNodes.find((n) => n.id === activeId) || clockNodes[1];
  const IconComp = activeNode.icon;

  const handleSelectNode = (nodeId) => {
    const targetNode = clockNodes.find((n) => n.id === nodeId);
    if (!targetNode) return;

    setActiveId(nodeId);

    // Compute shortest angular delta to prevent 270-degree spin-backs
    const targetAngle = targetNode.angle;
    const currentNorm = ((rotationAngle % 360) + 360) % 360;
    let delta = targetAngle - currentNorm;
    if (delta > 180) delta -= 360;
    if (delta <= -180) delta += 360;
    setRotationAngle((prev) => prev + delta);
  };

  return (
    <section id="pursuits" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto space-y-8">
        
        {/* Section Heading in Space Grotesk */}
        <div className="text-left space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] font-heading">
            Pursuits Beyond Code
          </h2>
        </div>

        {/* Unified Silver Glass Container Split into Two Columns */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-[var(--border-card)] shadow-lg overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (5 cols): Clock Radial Dial with safe clearance */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center py-8 overflow-visible">
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center font-mono select-none overflow-visible">
                
                {/* Hairline Circular Concentric Rings with faint Accent tint */}
                <div className="absolute inset-0 rounded-full border border-[var(--accent)]/30" />
                <div className="absolute inset-8 rounded-full border border-dashed border-[var(--accent)]/25" />
                <div className="absolute inset-20 rounded-full border border-[var(--accent)]/30" />
                
                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-[var(--accent)]/20 pointer-events-none" />
                <div className="absolute h-full w-[1px] bg-[var(--accent)]/20 pointer-events-none" />

                {/* Central Rotating Beam / Pointer Arm toward active node (pointing UP toward Chess at 0deg) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <div className="w-[2px] h-1/2 bg-gradient-to-t from-[#BAFF29]/20 to-[#BAFF29] origin-bottom -translate-y-1/2 rounded-full shadow-[0_0_8px_#BAFF29]" />
                </div>

                {/* Central Circular Hub (w-20 h-20 rounded-full) */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-card)] flex flex-col items-center justify-center shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] animate-pulse mb-1" />
                  <span className="text-[10px] tracking-widest font-bold text-[var(--text-primary)]">FOCUS</span>
                  <span className="text-[10px] text-[var(--accent)] font-mono">{activeNode.title}</span>
                </div>

                {/* Cardinal Dial Node 1: Top (Chess) */}
                <button
                  onClick={() => handleSelectNode('12')}
                  type="button"
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer z-20 shadow-md ${
                    activeId === '12'
                      ? 'bg-[var(--accent)] text-[#030407] font-bold scale-105 shadow-[0_0_16px_var(--accent-muted)]'
                      : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]/60'
                  }`}
                >
                  Chess
                </button>

                {/* Cardinal Dial Node 2: Right (Karate) */}
                <button
                  onClick={() => handleSelectNode('03')}
                  type="button"
                  className={`absolute -right-4 top-1/2 -translate-y-1/2 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer z-20 shadow-md ${
                    activeId === '03'
                      ? 'bg-[var(--accent)] text-[#030407] font-bold scale-105 shadow-[0_0_16px_var(--accent-muted)]'
                      : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]/60'
                  }`}
                >
                  Karate
                </button>

                {/* Cardinal Dial Node 3: Bottom (Badminton) */}
                <button
                  onClick={() => handleSelectNode('06')}
                  type="button"
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer z-20 shadow-md ${
                    activeId === '06'
                      ? 'bg-[var(--accent)] text-[#030407] font-bold scale-105 shadow-[0_0_16px_var(--accent-muted)]'
                      : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]/60'
                  }`}
                >
                  Badminton
                </button>

                {/* Cardinal Dial Node 4: Left (Literature) */}
                <button
                  onClick={() => handleSelectNode('09')}
                  type="button"
                  className={`absolute -left-4 top-1/2 -translate-y-1/2 min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer z-20 shadow-md ${
                    activeId === '09'
                      ? 'bg-[var(--accent)] text-[#030407] font-bold scale-105 shadow-[0_0_16px_var(--accent-muted)]'
                      : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)]/60'
                  }`}
                >
                  Literature
                </button>
              </div>
            </div>

            {/* Right Column (7 cols): Active Showcase Card (rounded-xl Inner Card) */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-7 space-y-6 shadow-sm">
                
                {/* Top Header Row (No Active Discipline Badge) */}
                <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-5 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                        {activeNode.title}
                      </h3>
                      <p className="text-xs font-mono text-[var(--text-secondary)]">
                        {activeNode.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Inner Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo Frame (rounded-lg) */}
                  <div 
                    onClick={() => setLightboxImg(activeNode)}
                    className="md:col-span-5 relative group overflow-hidden rounded-lg border border-[var(--border-card)] bg-black/40 shadow-md cursor-pointer"
                  >
                    <img
                      src={activeNode.image}
                      alt={activeNode.title}
                      className="w-full h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Side: Lead summary & bullet points */}
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-sans">
                      {activeNode.lead}
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-sans">
                      {activeNode.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1.5 shadow-[0_0_6px_var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[var(--bg-canvas)] border border-[var(--border-card)] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <button
                onClick={() => setLightboxImg(null)}
                type="button"
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[75vh] bg-black flex items-center justify-center">
                <img
                  src={lightboxImg.image}
                  alt={lightboxImg.title}
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-card)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  {lightboxImg.title} — {lightboxImg.subtitle}
                </span>
                <span className="text-[var(--accent)] font-bold">{lightboxImg.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
