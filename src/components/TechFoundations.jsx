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
            className="p-6 sm:p-8 space-y-6 rounded-2xl glass-card shadow-xs"
          >
            <h3 className="font-mono text-xs theme-accent font-bold uppercase tracking-wider border-b border-[var(--border-card)] pb-4">
              {item.category}
            </h3>

            <div className="flex flex-col gap-3 w-full">
              {item.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)] text-sm md:text-base font-medium tracking-wide hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors"
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
