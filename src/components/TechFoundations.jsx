import { FiCode, FiDatabase, FiLayout, FiCpu } from 'react-icons/fi';
import Section from './ui/Section';
import Card from './ui/Card';

const foundations = [
  {
    category: "PYTHON & DATA ENGINEERING",
    icon: FiCode,
    span: "md:col-span-2 lg:col-span-2",
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
    icon: FiDatabase,
    span: "md:col-span-1 lg:col-span-2",
    skills: [
      "SQL (Relational Queries)",
      "Exploratory Data Analysis",
      "Data Hygiene & Validation",
      "Statistical Distributions"
    ]
  },
  {
    category: "WEB FUNDAMENTALS",
    icon: FiLayout,
    span: "md:col-span-1 lg:col-span-2",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js"
    ]
  },
  {
    category: "DEVELOPER TOOLS & INFRASTRUCTURE",
    icon: FiCpu,
    span: "md:col-span-2 lg:col-span-2",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Linux CLI",
      "Vite"
    ]
  }
];

export default function TechFoundations() {
  return (
    <Section 
      id="skills" 
      title="Tech Foundations" 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono">
        {foundations.map((item) => {
          const Icon = item.icon;
          return (
            <Card 
              key={item.category} 
              className={`${item.span} p-6 space-y-4 rounded-2xl glass-card border-[var(--border-card)] shadow-xs flex flex-col justify-start`}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-3">
                <h3 className="font-mono text-xs theme-accent font-bold uppercase tracking-wider">
                  {item.category}
                </h3>
                <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />
              </div>

              <div className="flex flex-wrap gap-2 w-full pt-1">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] hover:border-[var(--accent-secondary)] text-[var(--text-primary)] text-xs font-medium tracking-wide hover:shadow-[0_0_12px_var(--accent-secondary-muted)] hover:bg-[var(--accent-muted)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
