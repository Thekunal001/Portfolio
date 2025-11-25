export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  name: string;
  level: string; // e.g., "Beginner", "Intermediate", "Expert"
}