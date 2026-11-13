import { useState } from 'react';
import { FiExternalLink, FiGithub, FiTerminal, FiLayers, FiTrendingUp } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import Chip from './ui/Chip';
import { experience, webProject } from '../data/resume';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('schema');
  const internship = experience[0];

  return (
    <Section 
      id="projects" 
      title="Internships & Projects" 
    >
      {/* Bento Grid Architecture: 4-column dynamic mosaic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
        
        {/* Bento Tile 1: Flagship Internship Overview & Pipeline (md:col-span-2 lg:col-span-3) */}
        <Card className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 space-y-6 flex flex-col justify-between border-[var(--border-card)]">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-card)] pb-4">
              <div>
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                  Internship Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)] leading-tight mt-1">
                  {internship.org}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                {internship.period}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
              {internship.summary}
            </p>
          </div>

          {/* Interactive Inspection Deck within the tile */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 border-b border-[var(--border-card)] pb-2 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('schema')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'schema'
                    ? 'bg-[var(--accent)] text-[#030407]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                <FiLayers className="w-3.5 h-3.5" />
                <span>Tabular Schema</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'code'
                    ? 'bg-[var(--accent)] text-[#030407]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                <FiTerminal className="w-3.5 h-3.5" />
                <span>Python / Pandas Routine</span>
              </button>
            </div>

            {activeTab === 'schema' ? (
              <div className="p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-card)] overflow-x-auto text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-card)]">
                  <span className="font-bold text-[var(--accent)]">{internship.blocks.rawData.title}</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {internship.blocks.rawData.records}
                  </span>
                </div>
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead>
                    <tr className="text-[var(--text-secondary)] border-b border-[var(--border-card)]">
                      <th className="pb-2">Field</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Hygiene Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-card)]">
                    {internship.blocks.rawData.schema.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-2 font-bold text-[var(--text-primary)]">{row.field}</td>
                        <td className="py-2 text-[var(--accent)]">{row.type}</td>
                        <td className="py-2 text-[var(--text-secondary)]">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-card)] overflow-x-auto text-xs font-mono">
                <pre className="text-emerald-500 dark:text-emerald-400 leading-relaxed">
                  {internship.blocks.stack}
                </pre>
              </div>
            )}
          </div>
        </Card>

        {/* Bento Tile 2: Quantitative Metrics Counter (col-span-1) */}
        <Card className="col-span-1 p-6 sm:p-7 flex flex-col justify-between border-[var(--border-card)] space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
              <FiTrendingUp className="w-4 h-4" />
              <span>Outcomes</span>
            </div>
            <h4 className="text-lg font-bold font-heading text-[var(--text-primary)]">
              {internship.blocks.results.headline}
            </h4>
          </div>

          <div className="space-y-3">
            {internship.blocks.results.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)]">
                <div className="text-[10px] text-[var(--text-secondary)] uppercase">{m.label}</div>
                <div className="text-lg font-bold text-[var(--text-primary)] mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed pt-2 border-t border-[var(--border-card)]">
            {internship.blocks.results.takeaway}
          </p>
        </Card>

        {/* Bento Tile 3: Hackathon Restaurant Web App (md:col-span-2 lg:col-span-4) */}
        <Card className="md:col-span-2 lg:col-span-4 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-[var(--border-card)] hover:border-[var(--accent)]/60">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                Hackathon Sprint
              </span>
              <span className="text-xs text-[var(--text-secondary)]">•</span>
              <span className="text-xs text-[var(--text-secondary)]">{webProject.context}</span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              {webProject.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
              {webProject.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {webProject.tech.map((t) => (
                <Chip key={t} label={t} variant="default" />
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-center">
            <a
              href={webProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl theme-accent-bg text-[#090a0f] font-bold text-xs transition-all shadow-sm hover:opacity-90"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Deployment</span>
            </a>

            <a
              href={webProject.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[var(--bg-canvas)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--accent)] font-semibold text-xs transition-colors shadow-xs"
            >
              <FiGithub className="w-4 h-4" />
              <span>Repository</span>
            </a>
          </div>
        </Card>

      </div>
    </Section>
  );
}
