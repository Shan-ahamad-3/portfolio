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
      {/* Balanced 3-Column Bento Row: Compact, uniform height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch font-mono">
        
        {/* Card 1: B.Sc. Computer Science (Aditya Degree College) */}
        <Card className="p-6 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6] transition-all duration-300 shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {bsc.stage}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FiCalendar className="w-3.5 h-3.5 theme-accent" />
                <span className="whitespace-nowrap">{bsc.year}</span>
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)] leading-snug">
                {bsc.school}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                Specialized in core Computer Science fundamentals, analytical computing, and automated Python data engineering.
              </p>
            </div>
          </div>

          {/* Metric Pills (No duplicate degree label) */}
          <div className="pt-4 border-t border-[var(--border-card)] flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[var(--bg-canvas)] border border-[#8B5CF6]/40 text-xs font-bold text-[#8B5CF6] whitespace-nowrap shadow-xs">
              80% Aggregate
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-bold text-[var(--accent)] whitespace-nowrap shadow-xs">
              9.00 SGPA Final Semester
            </span>
          </div>
        </Card>

        {/* Card 2: Intermediate MPC (B.V.K. Junior College) */}
        <Card className="p-6 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6]/60 transition-all duration-300 shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {inter.stage}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FiCalendar className="w-3.5 h-3.5 theme-accent" />
                <span className="whitespace-nowrap">{inter.year}</span>
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)] leading-snug">
                {inter.school}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                Mathematics, Physics & Chemistry focus building strong logical foundation and quantitative reasoning.
              </p>
            </div>
          </div>

          {/* Metric Badge */}
          <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-end">
            <span className="px-3 py-1 rounded-md bg-[var(--bg-canvas)] border border-[var(--border-card)] text-xs font-bold text-[var(--text-primary)] whitespace-nowrap shadow-xs">
              62% Aggregate
            </span>
          </div>
        </Card>

        {/* Card 3: Secondary School Certificate (P.E.N. School) */}
        <Card className="p-6 flex flex-col justify-between border-[var(--border-card)] hover:border-[#8B5CF6]/60 transition-all duration-300 shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                {ssc.stage}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <FiCalendar className="w-3.5 h-3.5 theme-accent" />
                <span className="whitespace-nowrap">{ssc.year}</span>
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text-primary)] leading-snug">
                {ssc.school}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                Secondary school foundational curriculum completed with academic distinction and top honors.
              </p>
            </div>
          </div>

          {/* Metric Badge */}
          <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-end">
            <span className="px-3 py-1 rounded-md bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-bold text-[var(--accent)] whitespace-nowrap shadow-xs">
              99% Aggregate
            </span>
          </div>
        </Card>

      </div>
    </Section>
  );
}
