import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { volunteering } from '../data/resume';

const volunteerPhotos = [
  { src: '/images/vol-1.jpg', alt: 'Vizag Volunteers on-ground operations' },
  { src: '/images/vol-2.jpg', alt: 'Vizag Volunteers crowd coordination and logistics' }
];

export default function Volunteering() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Section 
      id="volunteering" 
      title="Volunteering Leadership" 
      subtitle="Large-scale public event cohort leadership, crowd orientation, and rapid incident coordination."
    >
      <div className="space-y-6">
        
        {/* Open Metrics Banner: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteering.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#14181E] border border-slate-200 dark:border-[#2A303A] rounded-2xl p-6 space-y-2 shadow-xs transition-transform hover:-translate-y-0.5"
            >
              <div className="font-mono text-xs uppercase text-[#C77D2B] font-bold tracking-wider">
                {metric.label}
              </div>
              <div className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-[#ECEFF4]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Card */}
        <Card className="p-7 md:p-8 space-y-4 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-xs overflow-visible">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-[#2A303A] pb-4 gap-4">
            
            {/* Left: Organization & Role */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-[#ECEFF4]">
                {volunteering.org}
              </h3>
              <div className="text-sm font-mono text-[#C77D2B] font-semibold mt-0.5">
                {volunteering.role}
              </div>
            </div>

            {/* Right: Dedicated vertical stack (photos above date, neatly right-aligned) */}
            <div className="flex flex-col sm:items-end items-start gap-2.5">
              
              {/* Overlapping stacked duo with hover fan-out & zoom */}
              <div 
                className="group relative inline-flex items-center -space-x-4 sm:-space-x-5 cursor-pointer py-1"
                title="Click to preview volunteering moments"
              >
                {volunteerPhotos.map((photo, i) => {
                  const defaultRotation = i === 0 ? '-rotate-3' : 'rotate-3';
                  const zIndexDefault = i === 0 ? 10 : 20;

                  return (
                    <div
                      key={i}
                      style={{ zIndex: zIndexDefault }}
                      onClick={() => setSelectedImg(photo)}
                      className={`relative z-30 transition-all duration-300 ease-out ${defaultRotation} group-hover:space-x-3 group-hover:rotate-0 hover:!scale-[2.4] sm:hover:!scale-[2.8] hover:!z-50 hover:shadow-2xl hover:border-amber-400 rounded-xl`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-14 h-10 sm:w-16 sm:h-12 object-cover rounded-lg border-2 border-slate-800 shadow-md transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.src = '/images/headshot.jpg';
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Text Date Badge placed below the photos, neatly right-aligned */}
              <div className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                {volunteering.period}
              </div>

            </div>

          </div>

          <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed pt-1">
            {volunteering.description}
          </p>
        </Card>

      </div>

      {/* Full-size Image Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#14181E] border border-zinc-700/60 rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                type="button"
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
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

              <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300">
                <span>Vizag Volunteers • Event Operations</span>
                <span className="text-amber-500 font-bold">2024 - Present</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </Section>
  );
}
