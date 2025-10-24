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
    title: "Machine Learning",
    institution: "StanfordOnline",
    platform: "Coursera",
    type: "formal"
  },
  {
    id: "dl-michigan",
    title: "Deep Learning Specialization",
    institution: "University of Michigan",
    type: "formal"
  },
  {
    id: "nlp-imperial",
    title: "Natural Language Processing with PyTorch",
    institution: "Imperial College London",
    type: "formal"
  },
  {
    id: "ds-ibm",
    title: "Data Science Foundations",
    institution: "IBM",
    type: "formal"
  },
  {
    id: "ai-everyone",
    title: "AI for Everyone",
    institution: "DeepLearning.AI",
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
  }
];
