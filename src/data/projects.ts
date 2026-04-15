export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink: string;
  role: string;
}

export const projects: Project[] = [
    {
  id: "agentic-ai-systems",
  title: "Agentic AI & Intelligent Smart Learning Platform",
  description: "Developed backend-driven AI Smart Learning systems using agentic architectures where LLMs dynamically decide actions through tool-calling. Built exam study agents, NLP-powered applications, and API-integrated systems with persistent memory, RAG pipelines, and automated workflows. Focused on real-world use cases such as education, data analysis, and intelligent assistants.",
  tech: ["Python", "Flask", "React", "Node.js", "SQLite", "FAISS", "TensorFlow"],
  image: "/ai_exam.png",
  liveLink: "https://abitonp.pythonanywhere.com/",
  githubLink: "https://github.com/Abiton198/chatbot-backend-educat",
  role: "Independent Developer"
},
  {
    id: "rugby-referee",
    title: "Rugby Referee Management System",
    description: "A web-based management system for referees, coaches, and match reporting. Implemented real-time database synchronization for live updates and performance tracking. Streamlined reporting and referee assignment workflows.",
    tech: ["React", "Tailwind CSS", "Firebase", "Netlify"],
    image: "/rugby.png",
    liveLink: "https://refcentral.netlify.app/",
    githubLink: "https://github.com/Abiton198/refcentral",
    role: "Developer & Referee | Eastern Province Rugby Union"
  },
 {
    id: "care-academy-portal",
    title: "Care Academy: British Curriculum Portal",
    description: "A comprehensive hybrid learning ecosystem supporting both campus and virtual environments. Features specialized secure dashboards for Principals, Teachers, and Parents. Includes student portal, timetable scheduler, links engine for British curriculum-aligned. Future work includes real-time performance tracking with NLP integration.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind", "Netlify", "PWA"],
    image: "/care_academy.png",
    liveLink: "https://care-academy.netlify.app/",
    githubLink: "https://github.com/Abiton198/care_academy",
    role: "Developer | Coding Educator"
  },
  {
    id: "nlp-experiments",
    title: "Web Systems & API Integration Projects",
    description: "Built several small-scale applications using REST APIs and Firebase for data management. Experimented with integrating NLP APIs (e.g., text classification, sentiment analysis) for prototype apps.",
    tech: ["React", "Node.js", "Python", "TensorFlow"],
    image: "/projects.png",
    githubLink: "https://github.com/Abiton198",
    role: "Independent Developer"
  },

];
