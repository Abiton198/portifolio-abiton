export interface Course {
  id: string;
  title: string;
  institution: string;
  platform?: string;
  type: "formal" | "self-paced";
}

export const courses: Course[] = [
  {
    id: "ml-stanford",
    title: "Machine Learning Specialization",
    institution: "Stanford",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "dl-michigan",
    title: "Programming for Everyone (Python)",
    institution: "University of Michigan",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "nlp-imperial",
    title: "Natural Language Processing Specialization",
    institution: "DeepLearning AI, Stanford",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "ds-ibm",
    title: "Deep Learning Specialization",
    institution: "Deep Learning AI, Stanford",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "ai-everyone",
    title: "AI for Everyone",
    institution: "DeepLearning.AI",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "ai-everyon",
    title: "Mathematics for Machine Learning Specialization",
    institution: "Emperial College London",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "react-tailwind",
    title: "React, Tailwind CSS, Firebase",
    institution: "Self-Paced Learning",
    type: "self-paced"
  },
  {
    id: "deployment",
    title: "Deployment and Version Control",
    institution: "Self-Paced Learning",
    type: "self-paced"
  },
  {
    id: "nlp-foundations",
    title: "NLP Foundations (TensorFlow, PyTorch, Transformers)",
    institution: "Self-Paced Learning",
    type: "self-paced"
  },
  {
    id: "web-dev",
    title: "Web Development",
    institution: "Scrimba",
    type: "self-paced"
  }
];
