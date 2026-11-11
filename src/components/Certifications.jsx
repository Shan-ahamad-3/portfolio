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
            className="flex items-start gap-4 p-6 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-xs transition-transform hover:-translate-y-0.5 hover:border-[var(--accent)]"
          >
            <div className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-[#181D24] theme-accent shrink-0 border border-slate-300 dark:border-[#2A303A]">
              <FiAward className="w-5 h-5 theme-accent" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-[#ECEFF4] leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                {cert.issuer}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
