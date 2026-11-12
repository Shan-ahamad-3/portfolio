import { FiAward } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';
import { certifications } from '../data/resume';

export default function Certifications() {
  return (
    <Section 
      id="certifications" 
      title="Certifications" 
      subtitle="Industry and academic credentials from Cisco Networking Academy, Infosys Springboard, and Microsoft."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <Card 
            key={idx} 
            className="flex items-start gap-4 p-6 sm:p-8 rounded-2xl glass-card transition-transform hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <div className="p-3 rounded-xl bg-[var(--bg-card)] theme-accent shrink-0 border border-[var(--border-card)]">
              <FiAward className="w-5 h-5 theme-accent" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold font-heading text-[var(--text-primary)] leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {cert.issuer}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
