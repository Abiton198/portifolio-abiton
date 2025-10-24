export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Tailwind CSS", "Node.js"]
  },
  {
    category: "Databases & Cloud",
    skills: ["Firebase", "Firestore", "API Integration"]
  },
  {
    category: "Deployment & Tools",
    skills: ["Netlify", "Git", "GitHub", "Figma"]
  },
  {
    category: "Machine Learning/NLP",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face Transformers"]
  },
  {
    category: "Other Skills",
    skills: ["Documentation Analysis", "Problem Solving", "Multilingual Communication"]
  }
];
