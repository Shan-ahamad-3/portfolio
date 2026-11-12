import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiExternalLink, FiGithub, FiTerminal, FiLayers, FiTrendingUp } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import Chip from './ui/Chip';
import { experience, webProject } from '../data/resume';

export default function Projects() {
  const [expandedBlock, setExpandedBlock] = useState('rawData');
  const internship = experience[0];

  const toggleBlock = (key) => {
    setExpandedBlock((prev) => (prev === key ? null : key));
  };

  return (
    <Section 
      id="projects" 
      title="Internships & Projects" 
      subtitle="Practical data analytics workflows, automated data hygiene routines, and responsive web applications."
    >
      <div className="space-y-8">
        
        {/* ADHOC NETWORK DATA ANALYTICS INTERNSHIP */}
        <Card className="p-6 sm:p-8 space-y-6 rounded-2xl glass-card">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F1F5F9] leading-snug">
              {internship.org}
            </h3>
            <p className="text-sm font-mono text-[#94A3B8]">
              {internship.period} • Python, Pandas, Matplotlib, IQR Quantitative Filtering
            </p>
          </div>

          {/* 2-to-3 line concise narrative summary */}
          <p className="text-base text-[#94A3B8] leading-relaxed max-w-4xl">
            {internship.summary}
          </p>

          {/* Three Interactive Accordion Panels with Generous Padding & 4px scale spacing */}
          <div className="space-y-4 pt-2 font-mono text-xs">
            
            {/* 1. Raw Data */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('rawData')}
                type="button"
                className="w-full min-h-[48px] p-5 flex items-center justify-between text-left hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-[#F1F5F9] flex items-center gap-3">
                  <FiLayers className="w-5 h-5 theme-accent shrink-0" />
                  <span>1. Raw Data — Tabular Schema & Record Counters</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform shrink-0 ${expandedBlock === 'rawData' ? 'rotate-180 theme-accent' : 'text-[#94A3B8]'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'rawData' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-white/10"
                  >
                    <div className="p-4 rounded-lg bg-black/30 border border-white/10 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs">
                        <span className="font-bold theme-accent">{internship.blocks.rawData.title}</span>
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                          {internship.blocks.rawData.records}
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-[#94A3B8] border-b border-white/10">
                              <th className="pb-2">Field Name</th>
                              <th className="pb-2">SQL / Pandas Type</th>
                              <th className="pb-2">Hygiene & Validation Note</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-mono">
                            {internship.blocks.rawData.schema.map((row, idx) => (
                              <tr key={idx} className="hover:bg-white/[0.02]">
                                <td className="py-2.5 font-bold text-slate-200">{row.field}</td>
                                <td className="py-2.5 theme-accent">{row.type}</td>
                                <td className="py-2.5 text-[#94A3B8]">{row.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Stack Used */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('stack')}
                type="button"
                className="w-full min-h-[48px] p-5 flex items-center justify-between text-left hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-[#F1F5F9] flex items-center gap-3">
                  <FiTerminal className="w-5 h-5 theme-accent shrink-0" />
                  <span>2. Stack Used — Clean Python/Pandas Vectorized Snippet</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform shrink-0 ${expandedBlock === 'stack' ? 'rotate-180 theme-accent' : 'text-[#94A3B8]'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'stack' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-white/10"
                  >
                    <div className="p-4 rounded-lg bg-black/40 border border-white/10 text-zinc-200 overflow-x-auto text-xs leading-relaxed font-mono">
                      <pre className="text-emerald-400">{internship.blocks.stack}</pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Results */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('results')}
                type="button"
                className="w-full min-h-[48px] p-5 flex items-center justify-between text-left hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-[#F1F5F9] flex items-center gap-3">
                  <FiTrendingUp className="w-5 h-5 theme-accent shrink-0" />
                  <span>3. Results — Quantitative Outcomes & Attendance Distributions</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform shrink-0 ${expandedBlock === 'results' ? 'rotate-180 theme-accent' : 'text-[#94A3B8]'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'results' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-white/10"
                  >
                    <div className="p-5 rounded-lg bg-black/30 border border-white/10 space-y-4">
                      <div className="font-bold theme-accent text-sm">
                        {internship.blocks.results.headline}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {internship.blocks.results.metrics.map((m, idx) => (
                          <div key={idx} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 space-y-1">
                            <span className="text-[11px] text-[#94A3B8]">{m.label}</span>
                            <div className="text-lg font-bold text-[#F1F5F9]">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed font-sans pt-1">
                        {internship.blocks.results.takeaway}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </Card>

        {/* RESTAURANT WEB APP CARD */}
        <Card className="p-6 sm:p-8 space-y-6 rounded-2xl glass-card">
          <div className="border-b border-white/10 pb-6 space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F1F5F9] leading-snug">
              {webProject.title}
            </h3>
            <p className="text-sm font-mono text-[#94A3B8]">
              {webProject.context}
            </p>
          </div>

          <p className="text-base text-[#94A3B8] leading-relaxed max-w-4xl">
            {webProject.description}
          </p>

          {/* Pure Tech Stack: Strictly HTML5, Tailwind CSS, JavaScript (No React/Vite) */}
          <div className="flex flex-wrap gap-2.5">
            {webProject.tech.map((t) => (
              <Chip key={t} label={t} variant="default" />
            ))}
          </div>

          {/* Functional Action Links with 44px minimum touch target */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={webProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl theme-accent-bg text-[#090a0f] font-bold transition-all shadow-sm hover:opacity-90"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>[ Live Deployment ]</span>
            </a>

            <a
              href={webProject.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-white/5 text-[#F1F5F9] border border-white/10 hover:border-[var(--accent)] font-semibold transition-colors shadow-xs"
            >
              <FiGithub className="w-4 h-4" />
              <span>[ Source Repository ]</span>
            </a>
          </div>
        </Card>

      </div>
    </Section>
  );
}
