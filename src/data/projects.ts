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
    image: "/rugby.png",
    liveLink: "https://refcentral.netlify.app/",
    githubLink: "https://github.com/Abiton198/refcentral",
    role: "Developer & Referee | Eastern Province Rugby Union"
  },
  {
    id: "exam-assistant",
    title: "Exam & Study Assistant Application",
    description: "A student learning platform for automated quiz generation, grading, and performance tracking. Plans to integrate NLP models for question-answer interaction in Arabic and English.",
    tech: ["React", "Firebase", "Tailwind", "Netlify"],
    image: "/eduapp.png",
    liveLink: "https://eduplanet-cat-online.netlify.app/",
    githubLink: "https://github.com/Abiton198/eduplanet_online_cat",
    role: "Developer & Computer Teacher | Private Secondary School"
  },
  {
    id: "nlp-experiments",
    title: "Web Systems & API Integration Projects",
    description: "Built several small-scale applications using REST APIs and Firebase for data management. Experimented with integrating NLP APIs (e.g., text classification, sentiment analysis) for prototype apps.",
    tech: ["React", "Node.js", "Python", "TensorFlow"],
    image: "/projects.png",
    githubLink: "https://github.com/Abiton198",
    role: "Independent Developer"
  }
];
