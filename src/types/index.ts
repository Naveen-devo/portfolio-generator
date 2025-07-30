export interface Portfolio {
  id: string;
  template: 'modern' | 'creative' | 'elegant' | 'tech' | 'artistic';
  hero: HeroSection;
  about: AboutSection;
  skills: Skill[];
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  blog: BlogPost[];
  contact: ContactSection;
  createdAt: Date;
  updatedAt: Date;
}

export interface HeroSection {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutSection {
  bio: string;
  experience: number;
  education: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number; // 1-5
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
}

export interface ContactSection {
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  twitter?: string;
  instagram?: string;
}

export interface PortfolioContextType {
  portfolios: Portfolio[];
  currentPortfolio: Portfolio | null;
  isLoading: boolean;
  createPortfolio: (portfolio: Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updatePortfolio: (id: string, updates: Partial<Portfolio>) => void;
  deletePortfolio: (id: string) => void;
  getPortfolioById: (id: string) => Portfolio | undefined;
  filterPortfolios: (filters: PortfolioFilters) => Portfolio[];
}

export interface PortfolioFilters {
  skills?: string[];
  role?: string;
  template?: 'modern' | 'creative' | 'elegant' | 'tech' | 'artistic';
}

export type TemplateType = 'modern' | 'creative' | 'elegant' | 'tech' | 'artistic'; 