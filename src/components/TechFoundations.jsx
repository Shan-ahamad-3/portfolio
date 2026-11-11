import Section from './ui/Section';
import Card from './ui/Card';

const foundations = [
  {
    category: "PYTHON & DATA ENGINEERING",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "ETL & IQR Scrubbing"
    ]
  },
  {
    category: "DATABASES & ANALYTICS",
    skills: [
      "SQL (Relational Queries)",
      "Exploratory Data Analysis",
      "Data Hygiene & Validation",
      "Statistical Distributions"
    ]
  },
  {
    category: "WEB FUNDAMENTALS",
    skills: [
      "HTML5 Semantic Architecture",
      "Tailwind CSS & Utility Styling",
      "Modern JavaScript (ES6+)",
      "Responsive Viewport Adaptation"
    ]
  },
  {
    category: "DEVELOPER TOOLS & INFRASTRUCTURE",
    skills: [
      "Git & GitHub Version Control",
      "VS Code & Debugging Tooling",
      "OSI Model & Networking Concepts",
      "Windows Environment & Diagnostics"
    ]
  }
];

export default function TechFoundations() {
  return (
    <Section 
      id="skills" 
      title="Tech Foundations" 
      subtitle="Structured technical competencies spanning Python data pipelines, relational query formulation, semantic web standards, and diagnostics tooling."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foundations.map((item) => (
          <Card 
            key={item.category} 
            className="p-6 space-y-5 bg-white dark:bg-[#14181E] border-slate-200 dark:border-[#2A303A] rounded-2xl shadow-xs"
          >
            <h3 className="font-mono text-xs theme-accent font-bold uppercase tracking-wider border-b border-slate-200 dark:border-[#2A303A] pb-3">
              {item.category}
            </h3>

            <div className="flex flex-col gap-2.5 w-full">
              {item.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full px-4 py-3 rounded-lg bg-slate-100/80 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/40 text-slate-800 dark:text-zinc-200 text-sm md:text-base font-medium tracking-wide hover:border-[var(--accent)] hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
