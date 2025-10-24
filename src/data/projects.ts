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
    id: "rugby-referee",
    title: "Rugby Referee Management System",
    description: "A web-based management system for referees, coaches, and match reporting. Implemented real-time database synchronization for live updates and performance tracking. Streamlined reporting and referee assignment workflows.",
    tech: ["React", "Tailwind CSS", "Firebase", "Netlify"],
    image: "https://d64gsuwffb70l.cloudfront.net/68f90e872209bc2f5f062c91_1761152701380_e5e07dd6.webp",
    liveLink: "https://rugby-referee-system.netlify.app",
    githubLink: "https://github.com/yourusername/rugby-referee-system",
    role: "Developer & Referee | Eastern Province Rugby Union"
  },
  {
    id: "exam-assistant",
    title: "Exam & Study Assistant Application",
    description: "A student learning platform for automated quiz generation, grading, and performance tracking. Plans to integrate NLP models for question-answer interaction in Arabic and English.",
    tech: ["React", "Firebase", "Tailwind", "Netlify"],
    image: "https://d64gsuwffb70l.cloudfront.net/68f90e872209bc2f5f062c91_1761152702501_2c3c523a.webp",
    liveLink: "https://exam-study-assistant.netlify.app",
    githubLink: "https://github.com/yourusername/exam-assistant",
    role: "Developer & Computer Teacher | Private Secondary School"
  },
  {
    id: "nlp-experiments",
    title: "Web Systems & API Integration Projects",
    description: "Built several small-scale applications using REST APIs and Firebase for data management. Experimented with integrating NLP APIs (e.g., text classification, sentiment analysis) for prototype apps.",
    tech: ["React", "Node.js", "Hugging Face APIs", "TensorFlow"],
    image: "https://d64gsuwffb70l.cloudfront.net/68f90e872209bc2f5f062c91_1761152703389_ac9eccfd.webp",
    githubLink: "https://github.com/yourusername/nlp-experiments",
    role: "Independent Developer"
  }
];
