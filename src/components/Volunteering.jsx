import Section from './ui/Section';
import Card from './ui/Card';
import { volunteering } from '../data/resume';

const volunteerPhotos = [
  { src: '/images/volunteering-1.jpg', alt: 'Vizag Volunteers crowd coordination' },
  { src: '/images/volunteering-2.jpg', alt: 'Volunteering cohort logistics' },
  { src: '/images/volunteering-3.jpg', alt: 'Vizag Navy Marathon event support' }
];

export default function Volunteering() {
  return (
    <Section 
      id="volunteering" 
      title="Volunteering Leadership" 
      subtitle="Large-scale public event cohort leadership, crowd orientation, and rapid incident coordination."
    >
      <div className="space-y-6">
        
        {/* Open Metrics Banner: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-[#2A303A] pb-4 gap-4 flex-wrap">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-[#ECEFF4]">
                {volunteering.org}
              </h3>
              <div className="text-sm font-mono text-[#C77D2B] font-semibold mt-0.5">
                {volunteering.role}
              </div>
            </div>

            {/* Interactive Volunteering Photo Stack + Date Tag */}
            <div className="flex items-center gap-3.5 flex-wrap">
              {/* Stacked Photo Thumbnail Bundle */}
              <div 
                className="group relative inline-flex items-center cursor-pointer py-1"
                title="Vizag Volunteers on-ground operations"
              >
                <div className="flex items-center -space-x-3 sm:-space-x-4 group-hover:space-x-2 transition-all duration-300 ease-out">
                  {volunteerPhotos.map((photo, i) => {
                    const rotations = ["-rotate-6", "rotate-0", "rotate-6"];
                    const zIndexes = [10, 20, 30];

                    return (
                      <div
                        key={i}
                        style={{ zIndex: zIndexes[i] }}
                        className={`relative transition-all duration-300 ease-out ${rotations[i]} group-hover:rotate-0 hover:!scale-125 hover:!z-40`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-9 h-9 sm:w-11 sm:h-11 object-cover rounded-lg border-2 border-slate-900 shadow-md ring-1 ring-amber-500/20"
                          onError={(e) => {
                            e.currentTarget.src = '/images/headshot.jpg';
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date tag */}
              <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 shrink-0">
                {volunteering.period}
              </div>
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
