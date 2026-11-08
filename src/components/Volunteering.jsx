import Section from './ui/Section';
import Card from './ui/Card';
import { volunteering } from '../data/resume';

export default function Volunteering() {
  return (
    <Section 
      id="volunteering" 
      title="Civic Leadership" 
      subtitle="Large-scale public event cohort leadership, crowd orientation, and rapid incident coordination."
    >
      <div className="space-y-6">
        
        {/* Open Metrics Banner across 3 wide columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {volunteering.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#14181E] border border-slate-200 dark:border-[#2A303A] rounded-2xl p-6 space-y-2 shadow-xs transition-transform hover:-translate-y-0.5"
            >
              <div className="font-mono text-xs uppercase text-[#C77D2B] font-bold tracking-wider">
                {metric.label}
              </div>
              <div className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-[#ECEFF4]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Card */}
        <Card className="p-7 md:p-8 space-y-4 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-[#2A303A] pb-4 gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-[#ECEFF4]">
                {volunteering.org}
              </h3>
              <div className="text-sm font-mono text-[#C77D2B] font-semibold mt-0.5">
                {volunteering.role}
              </div>
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-zinc-400">
              {volunteering.period}
            </div>
          </div>

          <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed pt-1">
            {volunteering.description}
          </p>
        </Card>

      </div>
    </Section>
  );
}
