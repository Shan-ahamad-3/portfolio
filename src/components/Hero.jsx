import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/resume';

export default function Hero() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Rule of Thirds Layout: 2/3 text & identity, 1/3 portrait on desktop */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left Column (lg:w-2/3): Identity strictly aligned to the left axis */}
          <div className="w-full lg:w-2/3 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-[var(--border-card)] text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full theme-accent-bg" />
              <span>{profile.location} • Available for Data & Software Roles</span>
            </div>

            {/* Strict Left-Aligned Identity Header & 1.25 Typography Scale */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight font-heading uppercase">
                MOHAMMAD ZEESHAN AHAMAD
              </h1>
              <p className="text-lg sm:text-xl font-medium theme-accent font-mono leading-snug">
                {profile.title}
              </p>
            </div>

            {/* Confident Developer Narrative: 1.25 Scale text-base leading-relaxed */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Computer Science graduate specializing in Python data engineering, automated ETL hygiene, and high-performance analytical pipelines. Hands-on experience developing vectorized outlier scrubbing routines with Pandas and architecting responsive web applications with precision viewport scaling.
            </p>

            {/* Action Links: Enforcing minimum 44x44px touch targets (Fitts's Law) anchored below text */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-white/5 border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiLinkedin className="w-4 h-4 theme-accent group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-white/5 border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiGithub className="w-4 h-4 theme-accent group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-xl bg-white/5 border border-[var(--border-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] font-mono text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 group"
              >
                <FiMail className="w-4 h-4 theme-accent group-hover:scale-110 transition-transform" />
                <span>{profile.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column (lg:w-1/3): Portrait aligned in 1/3 column */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group">
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition-all duration-300"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <img
                src={profile.photo}
                alt="Md. Zeeshan Ahamad"
                className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover object-center rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] border"
                style={{ borderColor: 'var(--accent-border)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
