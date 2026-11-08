import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { FiCalendar, FiAward } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { education } from '../data/resume';

function TrainLocomotive({ className = "w-6 h-6" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4 15V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
      <path d="M4 15h16" />
      <path d="M7 8h10v3H7z" fill="currentColor" fillOpacity="0.2" />
      <rect x="3" y="15" width="18" height="3" rx="1" fill="currentColor" fillOpacity="0.3" />
      <circle cx="7" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
      <path d="M12 4V2" />
      <circle cx="12" cy="13" r="1" fill="#C77D2B" stroke="#C77D2B" />
    </svg>
  );
}

export default function Journey() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeStation, setActiveStation] = useState(null);
  const [stationOffsets, setStationOffsets] = useState([0, 0, 0]);
  const [trackBounds, setTrackBounds] = useState({ top: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the milestones container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Recalculate card vertical centers and track boundary relative to containerRef
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      const offsets = cardRefs.current.map((cardEl) => {
        if (!cardEl) return 0;
        const rect = cardEl.getBoundingClientRect();
        return rect.top - containerRect.top + rect.height / 2;
      });

      if (offsets.length >= 2) {
        const top = offsets[0];
        const bottom = offsets[offsets.length - 1];
        setStationOffsets(offsets);
        setTrackBounds({ top, height: Math.max(0, bottom - top) });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Compute locomotive Y position:
  // If user hovers over a station, glide smoothly to that station's exact vertical center.
  // Otherwise, default to scroll progression interpolating between Station 1 and Station 3.
  const targetTrainY = activeStation !== null && stationOffsets[activeStation] !== undefined
    ? stationOffsets[activeStation]
    : trackBounds.top + Math.min(Math.max(scrollProgress, 0), 1) * trackBounds.height;

  // Active track height relative to trackBounds.top
  const activeTrackHeight = Math.max(0, Math.min(targetTrainY - trackBounds.top, trackBounds.height));

  return (
    <Section 
      id="milestones" 
      title="Academic Milestones" 
      subtitle="Comprehensive educational trajectory capping strictly at Bachelor of Science in Computer Science."
    >
      <div ref={containerRef} className="relative pl-10 sm:pl-16 md:pl-20 py-4 font-mono">
        
        {/* Continuous Track Line: starts precisely at Station 1 center and ends exactly at Station 3 center */}
        {trackBounds.height > 0 && (
          <div 
            style={{
              top: `${trackBounds.top}px`,
              height: `${trackBounds.height}px`
            }}
            className="absolute left-4 sm:left-7 md:left-8 w-[3px] bg-slate-300 dark:bg-zinc-800 rounded-full pointer-events-none"
          >
            {/* Animated active track fill */}
            {!shouldReduceMotion && (
              <motion.div 
                animate={{ height: activeTrackHeight }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="w-full bg-[#C77D2B] rounded-full"
              />
            )}
          </div>
        )}

        {/* Dynamic Train Locomotive gliding to hovered node or following scroll */}
        {!shouldReduceMotion && trackBounds.height > 0 && (
          <motion.div
            animate={{ y: targetTrainY }}
            initial={false}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute left-4 sm:left-7 md:left-8 -translate-x-1/2 top-0 z-20 pointer-events-none -mt-4 flex flex-col items-center"
          >
            <div className="p-1.5 rounded-md bg-white dark:bg-[#0B0E11] border-2 border-[#C77D2B] text-[#C77D2B] shadow-lg">
              <TrainLocomotive className="w-5 h-5 text-[#C77D2B]" />
            </div>
          </motion.div>
        )}

        {/* 3 Strict Milestone Cards stretching across wide container */}
        <div className="space-y-8">
          {education.map((item, idx) => {
            const isTerminus = item.isTerminus;
            const isHovered = activeStation === idx;

            return (
              <div 
                key={idx} 
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setActiveStation(idx)}
                onMouseLeave={() => setActiveStation(null)}
                className="relative"
              >
                <Card className={`p-6 sm:p-7 rounded-xl border bg-white dark:bg-zinc-900/60 transition-all duration-300 ease-out cursor-default hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/40 ${
                  isHovered
                    ? "-translate-y-1.5 shadow-xl shadow-amber-500/10 border-amber-500/40"
                    : isTerminus
                      ? "border-amber-500/30 dark:border-amber-500/20 shadow-sm"
                      : "border-slate-200 dark:border-zinc-800 shadow-xs"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-zinc-800 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#C77D2B] uppercase tracking-wide">
                          {item.stage}
                        </span>
                        {isTerminus && (
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#C77D2B]/15 text-[#C77D2B] font-bold border border-[#C77D2B]/30">
                            FINAL DESTINATION / TERMINUS
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold font-sans text-slate-900 dark:text-[#ECEFF4]">
                        {item.school}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans">
                        {item.degree}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs self-start sm:self-auto">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-zinc-400">
                        <FiCalendar className="w-3.5 h-3.5 text-[#C77D2B]" />
                        <span>{item.year}</span>
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#EFE9DC] dark:bg-[#181D24] text-slate-900 dark:text-[#ECEFF4] font-semibold border border-slate-300 dark:border-zinc-700">
                        {item.detail}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs md:text-sm text-slate-600 dark:text-zinc-400 font-sans pt-3 flex items-center gap-2">
                    <FiAward className="w-4 h-4 text-[#C77D2B] shrink-0" />
                    <span>
                      {isTerminus 
                        ? "Graduated with 80% aggregate and peak 9.00 SGPA in the final semester. Specialized in Python, relational databases, data structures, and computer networks." 
                        : "Verified academic qualification record."}
                    </span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
