export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/15 bg-white/[0.02] py-8 px-6 transition-colors font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Full Legal Copyright */}
        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-medium text-[var(--text-primary)] text-center md:text-left">
          <span className="font-bold font-heading tracking-tight">
            ZEESHAN<span className="text-[#BAFF29] font-extrabold">.</span>
          </span>
          <span className="hidden sm:inline text-[var(--text-secondary)]">|</span>
          <span>© 2026 Mohammad Zeeshan Ahamad. All rights reserved.</span>
        </div>

        {/* Right Side: Navigation Links & Resume Pill Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
          <a 
            href="#milestones" 
            className="min-h-[44px] inline-flex items-center px-2 text-[var(--text-secondary)] hover:text-[#BAFF29] transition-colors"
          >
            Milestones
          </a>
          <a 
            href="#projects" 
            className="min-h-[44px] inline-flex items-center px-2 text-[var(--text-secondary)] hover:text-[#BAFF29] transition-colors"
          >
            Deliverables
          </a>
          <a 
            href="#skills" 
            className="min-h-[44px] inline-flex items-center px-2 text-[var(--text-secondary)] hover:text-[#BAFF29] transition-colors"
          >
            Foundations
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="min-h-[44px] inline-flex items-center border border-[#BAFF29]/40 text-[#BAFF29] bg-[#BAFF29]/10 hover:bg-[#BAFF29]/20 rounded-lg px-3 py-1.5 transition-all shadow-xs"
          >
            Resume.pdf
          </a>
        </div>

      </div>
    </footer>
  );
}
