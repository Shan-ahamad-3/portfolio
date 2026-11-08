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
      <div className="space-y-12">
        
        {/* ADHOC NETWORK DATA ANALYTICS INTERNSHIP */}
        <Card className="p-7 md:p-8 space-y-6 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-[#2A303A] pb-5">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#ECEFF4]">
              {internship.org}
            </h3>
            <p className="text-sm font-mono text-slate-600 dark:text-zinc-400 mt-1">
              {internship.period} • Python, Pandas, Matplotlib, IQR Quantitative Filtering
            </p>
          </div>

          {/* 2-to-3 line concise narrative summary */}
          <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
            {internship.summary}
          </p>

          {/* Three Interactive Accordion Panels with Generous Padding */}
          <div className="space-y-4 pt-2 font-mono text-xs">
            
            {/* 1. Raw Data */}
            <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('rawData')}
                type="button"
                className="w-full p-5 flex items-center justify-between text-left hover:text-[#C77D2B] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-slate-900 dark:text-[#ECEFF4] flex items-center gap-3">
                  <FiLayers className="w-5 h-5 text-[#C77D2B]" />
                  <span>1. Raw Data — Tabular Schema & Record Counters</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform ${expandedBlock === 'rawData' ? 'rotate-180 text-[#C77D2B]' : 'text-slate-400 dark:text-zinc-500'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'rawData' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-slate-200 dark:border-zinc-800"
                  >
                    <div className="p-4 rounded-lg bg-white dark:bg-[#14181E] border border-slate-200 dark:border-zinc-800 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-zinc-800 text-xs">
                        <span className="font-bold text-[#C77D2B]">{internship.blocks.rawData.title}</span>
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                          {internship.blocks.rawData.records}
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-slate-500 dark:text-zinc-400 border-b border-slate-200 dark:border-zinc-800">
                              <th className="pb-2">Field Name</th>
                              <th className="pb-2">SQL / Pandas Type</th>
                              <th className="pb-2">Hygiene & Validation Note</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 font-mono">
                            {internship.blocks.rawData.schema.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                                <td className="py-2.5 font-bold text-slate-800 dark:text-zinc-200">{row.field}</td>
                                <td className="py-2.5 text-[#C77D2B]">{row.type}</td>
                                <td className="py-2.5 text-slate-600 dark:text-zinc-400">{row.note}</td>
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
            <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('stack')}
                type="button"
                className="w-full p-5 flex items-center justify-between text-left hover:text-[#C77D2B] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-slate-900 dark:text-[#ECEFF4] flex items-center gap-3">
                  <FiTerminal className="w-5 h-5 text-[#C77D2B]" />
                  <span>2. Stack Used — Clean Python/Pandas Vectorized Snippet</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform ${expandedBlock === 'stack' ? 'rotate-180 text-[#C77D2B]' : 'text-slate-400 dark:text-zinc-500'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'stack' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-slate-200 dark:border-zinc-800"
                  >
                    <div className="p-4 rounded-lg bg-[#0B0E11] border border-zinc-800 text-zinc-200 overflow-x-auto text-xs leading-relaxed font-mono">
                      <pre className="text-emerald-400">{internship.blocks.stack}</pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Results */}
            <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 overflow-hidden transition-colors">
              <button
                onClick={() => toggleBlock('results')}
                type="button"
                className="w-full p-5 flex items-center justify-between text-left hover:text-[#C77D2B] transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-slate-900 dark:text-[#ECEFF4] flex items-center gap-3">
                  <FiTrendingUp className="w-5 h-5 text-[#C77D2B]" />
                  <span>3. Results — Quantitative Outcomes & Attendance Distributions</span>
                </span>
                <FiChevronDown className={`w-5 h-5 transition-transform ${expandedBlock === 'results' ? 'rotate-180 text-[#C77D2B]' : 'text-slate-400 dark:text-zinc-500'}`} />
              </button>

              <AnimatePresence>
                {expandedBlock === 'results' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-1 border-t border-slate-200 dark:border-zinc-800"
                  >
                    <div className="p-5 rounded-lg bg-white dark:bg-[#14181E] border border-slate-200 dark:border-zinc-800 space-y-4">
                      <div className="font-bold text-[#C77D2B] text-sm">
                        {internship.blocks.results.headline}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {internship.blocks.results.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 space-y-1">
                            <span className="text-[11px] text-slate-500 dark:text-zinc-400">{m.label}</span>
                            <div className="text-lg font-bold text-slate-900 dark:text-white">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans pt-1">
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
        <Card className="p-7 md:p-8 space-y-6 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-sm">
          <div className="border-b border-slate-200 dark:border-[#2A303A] pb-5">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#ECEFF4]">
              {webProject.title}
            </h3>
            <p className="text-sm font-mono text-slate-600 dark:text-zinc-400 mt-1">
              {webProject.context}
            </p>
          </div>

          <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
            {webProject.description}
          </p>

          {/* Pure Tech Stack: Strictly HTML5, Tailwind CSS, JavaScript (No React/Vite) */}
          <div className="flex flex-wrap gap-2.5">
            {webProject.tech.map((t) => (
              <Chip key={t} label={t} variant="default" />
            ))}
          </div>

          {/* Functional Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-[#2A303A] flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={webProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C77D2B] hover:bg-[#AF6A20] text-[#0B0E11] font-bold transition-colors shadow-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>[ Live Deployment ]</span>
            </a>

            <a
              href={webProject.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#181D24] text-slate-900 dark:text-[#ECEFF4] border border-slate-300 dark:border-[#2A303A] hover:border-[#C77D2B] font-semibold transition-colors shadow-xs"
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
