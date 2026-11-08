import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-6xl px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column (7 cols): Direct, confident developer narrative */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-[#EFE9DC] dark:bg-[#14181E] border border-[#D8D1C2] dark:border-[#2A303A] text-[#525B64] dark:text-[#8E98A5]">
              <span className="w-2 h-2 rounded-full bg-[#C77D2B]" />
              <span>{profile.location} • Available for Data & Software Roles</span>
            </div>

            {/* Legal Name (strictly Md. Zeeshan Ahamad) & Exact Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#ECEFF4]">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#C77D2B] font-mono">
                {profile.title}
              </p>
            </div>

            {/* Confident Developer Narrative */}
            <p className="text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Computer Science graduate specializing in Python data engineering, automated ETL hygiene, and high-performance analytical pipelines. Hands-on experience developing vectorized outlier scrubbing routines with Pandas and architecting responsive web applications with precision viewport scaling.
            </p>

            {/* Retain only a single, clean primary CTA button */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C77D2B] hover:bg-[#AF6A20] text-[#0B0E11] font-bold text-sm font-mono transition-colors shadow-sm"
              >
                <span>Explore Work</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-1 text-slate-600 dark:text-zinc-400 text-sm font-mono">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C77D2B] flex items-center gap-1.5 transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C77D2B] flex items-center gap-1.5 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-[#C77D2B] flex items-center gap-1.5 transition-colors"
              >
                <span>{profile.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Generously Sized Headshot with Soft Glow */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-amber-500/10 dark:bg-amber-500/15 blur-xl group-hover:bg-amber-500/20 transition-all" />
              <img
                src={profile.photo}
                alt="Md. Zeeshan Ahamad"
                className="relative w-64 md:w-80 h-auto aspect-square object-cover object-center rounded-2xl ring-1 ring-amber-500/20 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
