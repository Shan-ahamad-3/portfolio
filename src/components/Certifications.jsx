import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import Section from './ui/Section';

const certList = [
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    image: "/cert-python.jpg"
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Infosys Springboard",
    image: "/cert-infosys.jpg"
  },
  {
    title: "Essentials of Generative AI",
    issuer: "Microsoft & DigiSaksham",
    image: "/cert-microsoft.jpg"
  }
];

export default function Certifications() {
  const [lightboxCert, setLightboxCert] = useState(null);

  return (
    <Section 
      id="certifications" 
      title="Certifications" 
    >
      {/* 3-Card Certificate Bento Grid with JPG Previews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        {certList.map((cert, idx) => (
          <div 
            key={idx} 
            className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl hover:border-[#8B5CF6] transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            {/* Top image container with click-to-zoom preview */}
            <div 
              onClick={() => setLightboxCert(cert)}
              className="h-48 w-full overflow-hidden border-b border-white/10 relative cursor-pointer bg-black/40"
              title="Click to view full certificate"
            >
              <img 
                src={cert.image} 
                alt={`${cert.title} certificate`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-mono backdrop-blur-[2px]">
                <span>Preview</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bottom glass body */}
            <div className="p-6 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30">
                {cert.issuer}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)] leading-snug">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[var(--bg-canvas)] border border-[var(--border-card)] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <button
                onClick={() => setLightboxCert(null)}
                type="button"
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[80vh] bg-black flex items-center justify-center">
                <img
                  src={lightboxCert.image}
                  alt={lightboxCert.title}
                  className="w-full h-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="p-4 bg-[var(--bg-card)] border-t border-[var(--border-card)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="font-semibold text-[var(--text-primary)] font-heading text-sm">
                  {lightboxCert.title}
                </span>
                <span className="text-[#8B5CF6] font-bold">
                  {lightboxCert.issuer}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
