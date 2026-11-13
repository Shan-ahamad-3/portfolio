import { FiCalendar, FiAward } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { education } from '../data/resume';

export default function Journey() {
  const bsc = education.find((e) => e.stage.includes('B.Sc')) || education[2];
  const inter = education.find((e) => e.stage.includes('Intermediate')) || education[1];
  const ssc = education.find((e) => e.stage.includes('SSC')) || education[0];

  return (
    <Section 
      id="milestones" 
      title="Academic Milestones" 
    >
      {/* Asymmetric 3-Column Bento Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        
        {/* Flagship Terminus Card: B.Sc. Computer Science (Spans 2 columns on desktop) */}
        <Card className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6] transition-all duration-300 shadow-md relative overflow-hidden group">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]">
              Degree Terminus
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <FiCalendar className="w-3.5 h-3.5 theme-accent" />
              <span>{bsc.year}</span>
            </span>
          </div>

          <div className="space-y-4 my-2">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {bsc.stage}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                {bsc.school}
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
              Specialized in core Computer Science fundamentals, analytical computing, automated data hygiene pipelines, and object-oriented software engineering.
            </p>
          </div>

          {/* Prominent Metric Pills */}
          <div className="pt-6 border-t border-[var(--border-card)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FiAward className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs font-semibold text-[var(--text-primary)]">{bsc.degree}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[#8B5CF6]/40 text-xs font-bold text-[#8B5CF6] shadow-xs">
                80% Aggregate
              </span>
              <span className="px-3 py-1 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-bold text-[var(--accent)] shadow-xs">
                9.00 SGPA Final Semester
              </span>
            </div>
          </div>
        </Card>

        {/* Right Column Interlocking Stack for B.V.K. and P.E.N. School */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* Intermediate MPC Card */}
          <Card className="p-6 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6]/60 transition-all duration-300">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {inter.stage}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FiCalendar className="w-3.5 h-3.5 theme-accent" />
                <span>{inter.year}</span>
              </span>
            </div>

            <div className="space-y-1.5 mb-4">
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                {inter.school}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans">
                Mathematics, Physics & Chemistry focus building analytical rigor.
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-card)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-secondary)]">{inter.degree}</span>
              <span className="font-semibold text-[var(--text-primary)]">{inter.detail}</span>
            </div>
          </Card>

          {/* Secondary School Certificate (SSC) Card with prominent 99% Aggregate */}
          <Card className="p-6 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6]/60 transition-all duration-300">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {ssc.stage}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FiCalendar className="w-3.5 h-3.5 theme-accent" />
                <span>{ssc.year}</span>
              </span>
            </div>

            <div className="space-y-1.5 mb-4">
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                {ssc.school}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans">
                Secondary school foundational curriculum completed with top distinction.
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-card)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-secondary)]">{ssc.degree}</span>
              <span className="font-bold text-[var(--accent)] bg-[var(--accent-muted)] px-3 py-1 rounded-md border border-[var(--accent-border)] shadow-xs">
                99% Aggregate
              </span>
            </div>
          </Card>
        </div>

      </div>
    </Section>
  );
}
