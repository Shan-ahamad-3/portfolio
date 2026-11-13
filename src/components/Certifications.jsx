import { FiAward } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { certifications } from '../data/resume';

export default function Certifications() {
  return (
    <Section 
      id="certifications" 
      title="Certifications" 
    >
      {/* Bento Grid Architecture: 6-tile mosaic layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 font-mono">
        {certifications.map((cert, idx) => {
          // Asymmetrical Bento spans: First item wide, rest neat tiles
          const isFeatured = idx === 0 || idx === 3;
          return (
            <Card 
              key={idx} 
              className={`${isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'} flex items-start gap-4 p-6 sm:p-7 rounded-2xl glass-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]`}
            >
              <div className="p-3 rounded-xl bg-[var(--bg-canvas)] theme-accent shrink-0 border border-[var(--border-card)]">
                <FiAward className="w-5 h-5 theme-accent" />
              </div>

              <div className="space-y-1 my-auto">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">
                    Verified Credential
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[var(--text-primary)] leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {cert.issuer}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
