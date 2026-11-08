/**
 * src/data/resume.js
 * Master verified data for Md. Zeeshan Ahamad.
 * Strict factual content only.
 */

export const profile = {
  name: "Md. Zeeshan Ahamad",
  title: "Python Developer & Data Analytics Engineer",
  location: "Visakhapatnam, India",
  email: "zeeshanplacements@gmail.com",
  phone: "9398508443",
  linkedin: "https://linkedin.com/in/zeeshan-ahamad",
  github: "https://github.com/Shan-ahamad-3",
  resumeFile: "/resume.pdf", // Single confirmed resume file in /public
  photo: "/images/headshot.jpg", // Professional headshot — light background
  bio: "Computer Science graduate with hands-on experience designing automated Python data pipelines, executing IQR outlier cleansing, and engineering responsive web applications. Experienced working across collaborative technical teams, delivering clean ETL hygiene, and leading large-scale event operations."
};

export const education = [
  { 
    stage: "SSC", 
    school: "P.E.N. School, Visakhapatnam", 
    degree: "Secondary School Certificate (SSC)", 
    detail: "99% Aggregate", 
    year: "2021" 
  },
  { 
    stage: "Intermediate", 
    school: "B.V.K. Junior College, Visakhapatnam", 
    degree: "Intermediate MPC", 
    detail: "62%-63% Aggregate", 
    year: "2021–2023" 
  },
  { 
    stage: "B.Sc. Computer Science", 
    school: "Aditya Degree College, Visakhapatnam", 
    degree: "B.Sc. Computer Science", 
    detail: "80% Aggregate, 9.00 SGPA Final Semester", 
    year: "2023–2026", 
    isTerminus: true 
  }
];

export const experience = [
  {
    org: "Adhoc Network — Data Analytics Internship",
    period: "Dec 2025 - Mar 2026",
    summary: "Engineered automated data hygiene workflows, conducted quantitative filtering with interquartile range (IQR) outlier detection, and analyzed patient appointment datasets using Python, Pandas, and Matplotlib.",
    blocks: {
      rawData: {
        title: "Cleaned Hospital Records Schema",
        records: "100,000+ Records Processed",
        schema: [
          { field: "Appointment_ID", type: "VARCHAR(16)", note: "Primary tracking key" },
          { field: "Patient_Age", type: "INT", note: "Cleaned via IQR (0-105 range)" },
          { field: "Scheduled_Day", type: "DATETIME", note: "ISO 8601 normalized" },
          { field: "Waiting_Days", type: "INT", note: "Delta computation (>=0 filtered)" },
          { field: "Attendance_Status", type: "TINYINT(1)", note: "Binary classification target" }
        ]
      },
      stack: `import pandas as pd
import numpy as np

# Vectorized IQR Outlier Scrubbing & Hygiene Routine
q1, q3 = df['waiting_days'].quantile([0.25, 0.75])
iqr = q3 - q1
df_clean = df[(df['waiting_days'] >= (q1 - 1.5 * iqr)) & (df['waiting_days'] <= (q3 + 1.5 * iqr))].copy()
df_clean['lead_time_bucket'] = pd.cut(df_clean['waiting_days'], bins=[0, 3, 7, 14, 30, np.inf])`,
      results: {
        headline: "99.2% Data Integrity & Vectorized Hygiene",
        metrics: [
          { label: "Volume Cleaned", value: "100k+ Records" },
          { label: "Outliers Purged", value: "4.8% via IQR" },
          { label: "Execution Time", value: "< 1.4s Vectorized" }
        ],
        takeaway: "Isolated wait-time correlations against appointment no-shows, uncovering a 28% drop in patient attendance for lead times exceeding 14 calendar days."
      }
    }
  }
];

export const webProject = {
  title: "Zeeshan Restaurant Website",
  context: "Adhoc Tech Fusion Hackathon (Nov 2024)",
  description: "Dedicated web application engineered during a 5-person hackathon sprint, emphasizing desktop-first precision, fluid viewport scaling, and rigorous cross-device mobile compatibility.",
  tech: ["HTML5", "Tailwind CSS", "JavaScript"],
  liveUrl: "https://github.com/Shan-ahamad-3",
  repoUrl: "https://github.com/Shan-ahamad-3"
};

export const skills = {
  "Python & Data Engineering": [
    { name: "Python", level: "Intermediate" },
    { name: "Pandas", level: "Intermediate" },
    { name: "NumPy", level: "Intermediate" },
    { name: "Matplotlib", level: "Intermediate" },
    { name: "ETL & IQR Scrubbing", level: "Intermediate" }
  ],
  "Databases & Analytics": [
    { name: "SQL (Relational Queries)", level: "Intermediate" },
    { name: "Exploratory Data Analysis", level: "Intermediate" },
    { name: "Data Hygiene & Validation", level: "Intermediate" },
    { name: "Statistical Distributions", level: "Basic" }
  ],
  "Web Fundamentals": [
    { name: "HTML5 Semantic Architecture", level: "Intermediate" },
    { name: "Tailwind CSS & Utility Styling", level: "Intermediate" },
    { name: "Modern JavaScript (ES6+)", level: "Intermediate" },
    { name: "Responsive Viewport Adaptation", level: "Intermediate" }
  ],
  "Developer Tools & Infrastructure": [
    { name: "Git & GitHub Version Control", level: "Intermediate" },
    { name: "VS Code & Debugging Tooling", level: "Intermediate" },
    { name: "OSI Model & Networking Concepts", level: "Basic" },
    { name: "Windows Environment & System Diagnostics", level: "Intermediate" }
  ]
};

export const certifications = [
  { name: "Python Programming", issuer: "Cisco Networking Academy" },
  { name: "Digital Infrastructure", issuer: "Cisco Networking Academy" },
  { name: "Cloud Computing", issuer: "Infosys Springboard" },
  { name: "Python for Data Science", issuer: "Infosys Springboard" },
  { name: "Generative AI", issuer: "Microsoft and DigiSaksham" }
];

export const volunteering = {
  org: "Vizag Volunteers",
  role: "Volunteer Team Lead",
  period: "Oct 2024 - Present",
  metrics: [
    { label: "Volunteers Led", value: "20+" },
    { label: "Attendees Coordinated", value: "1,000+" },
    { label: "Events Managed", value: "Vizag Navy Marathon, Yogandhra" }
  ],
  description: "Served as Volunteer Team Lead managing on-ground logistics, crowd orientation, and rapid incident resolution across major civic gatherings, directing 20+ volunteers in high-density live operations."
};

export const pursuits = [
  { 
    direction: "Northwest",
    shortDir: "NW",
    name: "Chess", 
    image: "/images/pursuits/chess.jpg", 
    tagline: "Calculation & Tactical Endgames",
    context: "Strategic thinking under rigid clock constraints, positional pawn play, and anticipating multi-move decision trees." 
  },
  { 
    direction: "Northeast",
    shortDir: "NE",
    name: "Karate", 
    image: "/images/pursuits/karate.jpg", 
    tagline: "Discipline, Kata & Precision",
    context: "Physical and mental conditioning rooted in repetitive execution, rigorous kata symmetry, and defensive posture control." 
  },
  { 
    direction: "Southwest",
    shortDir: "SW",
    name: "Badminton", 
    image: "/images/pursuits/badminton.jpg", 
    tagline: "Agility & Court Awareness",
    context: "High-cadence cardiovascular endurance, split-step footwork, and precise shot placement along deep tramlines." 
  },
  { 
    direction: "Southeast",
    shortDir: "SE",
    name: "Literature", 
    image: "/images/pursuits/literature.jpg", 
    tagline: "Operational Discipline & Introspection",
    context: "Curated reading in biographical narratives, operational discipline, and contemplative works by authors like Mary Oliver and modern essayists." 
  }
];
