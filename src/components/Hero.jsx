import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Text & Action Column: Stacked & centered on mobile/tablets, left-aligned on desktop (lg:text-left) */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#C77D2B]" />
              <span>{profile.location} • Available for Data & Software Roles</span>
            </div>

            {/* Legal Name (strictly Md. Zeeshan Ahamad) & Exact Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#ECEFF4]">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#C77D2B] font-mono">
                {profile.title}
              </p>
            </div>

            {/* Confident Developer Narrative */}
            <p className="text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer Science graduate specializing in Python data engineering, automated ETL hygiene, and high-performance analytical pipelines. Hands-on experience developing vectorized outlier scrubbing routines with Pandas and architecting responsive web applications with precision viewport scaling.
            </p>

            {/* Action Buttons: LinkedIn, GitHub, and Email only with dark slate card style and sleek amber accents */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiLinkedin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiGithub className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiMail className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>{profile.email}</span>
              </a>
            </div>

          </div>

          {/* Profile Image Column: Fluidly scaled image container (w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72) */}
          <div className="shrink-0 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-amber-500/10 dark:bg-amber-500/20 blur-xl group-hover:bg-amber-500/30 transition-all duration-300" />
              <img
                src={profile.photo}
                alt="Md. Zeeshan Ahamad"
                className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover object-center rounded-2xl ring-1 ring-amber-500/20 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
