export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-card)] py-12 bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-6xl px-6 md:px-12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-zinc-400">
        <div>
          © 2026 Md. Zeeshan Ahamad. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#milestones" className="hover:text-[var(--accent)] transition-colors">
            milestones
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition-colors">
            deliverables
          </a>
          <a href="#skills" className="hover:text-[var(--accent)] transition-colors">
            foundations
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
            resume.pdf
          </a>
        </div>
      </div>
    </footer>
  );
}
