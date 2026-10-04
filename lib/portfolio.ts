export const profile = {
  name: "Shubham Raj",
  role: "Data Analyst",
  goal: "Data Analyst → Data Engineer",
  location: "Bangalore, India",
  email: "shubhamraj.1937@gmail.com",
  github: "https://github.com/shubhamraj-65",
  linkedin: "https://www.linkedin.com/in/shubham-raj-6bb8b7273/",
  resume: "/resume.pdf",
  tagline: "I turn data into meaningful insights using Python, SQL, Excel and Power BI.",
};

export const about = [
  "I'm a fresher Data Analyst who likes getting messy, real-world data into shape and finding what it actually says. My day-to-day is cleaning and validating data, running analysis, and turning it into dashboards and reports people can act on.",
  "I work with Python, SQL, Excel and Power BI, and I'm interested in business insights, automation, AI and advanced analytics. My goal is to grow from Data Analyst into Data Engineer.",
];

export const skills = [
  { title: "Programming & Data", items: ["Python", "SQL", "Pandas", "NumPy"] },
  { title: "Visualization & BI", items: ["Power BI", "Excel", "Tableau", "Matplotlib", "Seaborn"] },
  { title: "Analytics", items: ["EDA", "Statistical Analysis", "Machine Learning"] },
  { title: "AI & Tools", items: ["Generative AI", "Git", "GitHub", "Jupyter Notebook", "VS Code"] },
];

export const experience = {
  role: "Data Analyst Intern",
  company: "TechSimPlus Learnings",
  location: "Bhopal, Madhya Pradesh",
  period: "Sep 2025 – Apr 2026",
  points: [
    "Cleaned and preprocessed 10+ retail and FMCG datasets with Python (Pandas, NumPy), reaching 98% data accuracy through validation.",
    "Built 4 interactive Power BI dashboards, including Blinkit and Coca-Cola sales analysis, using Power Query and DAX.",
    "Ran EDA and ad hoc analysis on 50K+ records to surface sales and customer trends for stakeholders.",
    "Automated recurring reporting workflows with Python and SQL, cutting manual effort by 35%.",
    "Worked on Generative AI and prompt-engineering applications.",
  ],
};

const gh = "https://github.com/shubhamraj-65";
export const projects = [
  { title: "Digital Payment Transaction Analytics Dashboard", category: "Business Intelligence", image: "/images/payment-dashboard.png", featured: true,
    description: "Interactive Power BI dashboard tracking the health of digital payments, with KPI cards, DAX measures and month-over-month growth analysis.",
    tech: ["Power BI", "DAX", "Data Analytics"], metrics: ["300K+ transactions", "100K+ users", "3.47Bn total value", "96% success rate"], github: gh, live: "" },
  { title: "Customer Segmentation Analysis", category: "Machine Learning", image: "/images/customer-segmentation.png", featured: false,
    description: "Clustering-based segmentation to identify meaningful customer groups and understand customer behavior.",
    tech: ["Python", "Pandas", "NumPy", "Machine Learning"], metrics: ["Clustering", "Customer behavior"], github: gh, live: "" },
  { title: "Sales Analysis Dashboard", category: "Business Intelligence", image: "/images/sales-dashboard.png", featured: false,
    description: "Interactive dashboard for analyzing sales performance, revenue, profit, products and regional trends.",
    tech: ["Excel", "Power BI", "DAX"], metrics: ["Revenue", "Profit", "Regional trends"], github: gh, live: "" },
  { title: "Predictive Crime Analysis", category: "Machine Learning", image: "/images/crime-analysis.png", featured: false,
    description: "Machine-learning-based crime prediction project.",
    tech: ["Python", "Pandas", "Machine Learning"], metrics: ["~87% model accuracy"], github: gh, live: "" },
  { title: "Dubai Cold Coffee Finder", category: "Geospatial App", image: "/images/coffee-finder.png", featured: false,
    description: "Geospatial application for exploring coffee locations with interactive maps and filtering.",
    tech: ["Python", "Pandas", "Streamlit", "Folium"], metrics: ["500+ locations", "Interactive map"], github: gh, live: "" },
];

export const education = [
  { title: "B.Tech – Computer Science & Engineering (AI & Data Science)", place: "LNCT Group, RGPV University", period: "2022–2026", note: "" },
  { title: "Higher Secondary (12th) – PCM", place: "M. V. College, Nalanda, Bihar", period: "2020–2022", note: "67.4%" },
  { title: "Secondary (10th)", place: "Bihar School Examination Board", period: "", note: "64.8%" },
];

export const stats = [
  { value: "5+", label: "Analytics Projects" },
  { value: "300K+", label: "Transactions Analyzed" },
  { value: "100K+", label: "Users Analyzed" },
  { value: "87%", label: "Model Accuracy" },
  { value: "500+", label: "Locations Analyzed" },
];
