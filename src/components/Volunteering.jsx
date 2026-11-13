import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUsers, FiCalendar, FiActivity } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { volunteering } from '../data/resume';

const volunteerPhotos = [
  { src: '/images/vol-1.jpg', alt: 'Vizag Volunteers on-ground operations' }
];

export default function Volunteering() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  return (
    <Section 
      id="volunteering" 
      title="Volunteering Leadership" 
    >
      {/* 2-Column Bento Architecture: 7 cols left, 5 cols right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-mono">
        
        {/* Left Column (lg:col-span-7): Role narrative + compact 3-column metrics */}
        <Card className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between border-[var(--border-card)]">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-4">
              <div>
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                  Community Impact & Coordination
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)] leading-tight mt-1">
                  {volunteering.org}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                {volunteering.period}
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold theme-accent">
                {volunteering.role}
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                {volunteering.description}
              </p>
            </div>
          </div>

          {/* Compact 3-Column Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[var(--border-card)]">
            <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-card)] space-y-1">
              <div className="text-[10px] text-[var(--text-secondary)] uppercase flex items-center gap-1.5">
                <FiUsers className="w-3 h-3 text-[var(--accent)]" />
                <span>Volunteers</span>
              </div>
              <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                20+
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-card)] space-y-1">
              <div className="text-[10px] text-[var(--text-secondary)] uppercase flex items-center gap-1.5">
                <FiActivity className="w-3 h-3 text-[var(--accent)]" />
                <span>Attendees</span>
              </div>
              <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
                1,000+
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-card)] space-y-1">
              <div className="text-[10px] text-[var(--text-secondary)] uppercase flex items-center gap-1.5">
                <FiCalendar className="w-3 h-3 text-[var(--accent)]" />
                <span>Events</span>
              </div>
              <div className="text-sm sm:text-base font-semibold leading-snug font-sans text-[var(--text-primary)]">
                Vizag Navy Marathon & Yogandhra
              </div>
            </div>
          </div>
        </Card>

        {/* Right Column (lg:col-span-5): Full Bento Visual Card with Single Full-Width Photo */}
        <Card className="lg:col-span-5 p-6 flex flex-col justify-between border-[var(--border-card)] overflow-hidden">
          <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-3 mb-4">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
              On-Ground Event Operations
            </span>
          </div>

          <div className="w-full my-auto">
            {volunteerPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setSelectedImg(photo)}
                className="group relative w-full h-full min-h-[260px] rounded-lg overflow-hidden border border-[var(--border-card)] cursor-pointer bg-black/40 shadow-sm"
                title="Click to view full photo"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full min-h-[260px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/headshot.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs font-mono text-white backdrop-blur-[2px]">
                  <span>Preview Photo</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--border-card)] mt-4 flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span>Directing crowd orientation and safety</span>
            <span className="theme-accent font-bold">Live Operations</span>
          </div>
        </Card>

      </div>

      {/* Full-size Image Lightbox / Modal Overlay mounted via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[var(--bg-canvas)] border border-[var(--border-card)] rounded-2xl overflow-hidden shadow-2xl cursor-default"
              >
                {/* Close Button with 44px touch target */}
                <button
                  onClick={() => setSelectedImg(null)}
                  type="button"
                  aria-label="Close image preview"
                  className="absolute top-4 right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>

                <div className="w-full max-h-[75vh] bg-black flex items-center justify-center">
                  <img
                    src={selectedImg.src}
                    alt={selectedImg.alt}
                    className="w-full h-full max-h-[75vh] object-contain"
                  />
                </div>

                <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-card)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)] font-heading text-sm">
                    Vizag Volunteers • Event Operations
                  </span>
                  <span className="theme-accent font-bold">2024 - Present</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </Section>
  );
}
