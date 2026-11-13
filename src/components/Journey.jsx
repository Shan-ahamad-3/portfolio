import { FiCalendar, FiAward, FiBookOpen } from 'react-icons/fi';
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
      {/* Bento Grid Architecture: 3-column mosaic with interlocking hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
        
        {/* Flagship Terminus Card: B.Sc. Computer Science (Spans 2 columns on tablet, 2 or 3 on desktop) */}
        <Card className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6 sm:p-8 flex flex-col justify-between border-[var(--accent-border)] shadow-md relative overflow-hidden group">
          {/* Subtle accent highlight badge */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]">
              Degree Terminus
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <FiCalendar className="w-3.5 h-3.5 theme-accent" />
              <span>{bsc.year}</span>
            </span>
          </div>

          <div className="space-y-4 my-auto">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {bsc.stage}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)] leading-tight">
                {bsc.school}
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
              Specialized in core Computer Science fundamentals, object-oriented systems, data architectures, and analytical computing.
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--border-card)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FiAward className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs font-semibold text-[var(--text-primary)]">{bsc.degree}</span>
            </div>
            <span className="px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-xs font-bold text-[var(--accent)]">
              {bsc.detail}
            </span>
          </div>
        </Card>

        {/* Intermediate MPC Card */}
        <Card className="md:col-span-1 lg:col-span-2 p-6 sm:p-7 flex flex-col justify-between border-[var(--border-card)] hover:border-[var(--accent)]/60">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
              {inter.stage}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <FiCalendar className="w-3.5 h-3.5 theme-accent" />
              <span>{inter.year}</span>
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)]">
              {inter.school}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Mathematics, Physics & Chemistry focus building logical foundation.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-between text-xs">
            <span className="text-[var(--text-secondary)]">{inter.degree}</span>
            <span className="font-semibold text-[var(--text-primary)]">{inter.detail}</span>
          </div>
        </Card>

        {/* Secondary School Certificate (SSC) Card */}
        <Card className="md:col-span-1 lg:col-span-2 p-6 sm:p-7 flex flex-col justify-between border-[var(--border-card)] hover:border-[var(--accent)]/60">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
              {ssc.stage}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <FiCalendar className="w-3.5 h-3.5 theme-accent" />
              <span>{ssc.year}</span>
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)]">
              {ssc.school}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-sans">
              Secondary school curriculum culminating with distinction.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-between text-xs">
            <span className="text-[var(--text-secondary)]">{ssc.degree}</span>
            <span className="font-bold text-[var(--accent)] bg-[var(--accent-muted)] px-2.5 py-0.5 rounded-md border border-[var(--accent-border)]">
              {ssc.detail}
            </span>
          </div>
        </Card>

      </div>
    </Section>
  );
}
