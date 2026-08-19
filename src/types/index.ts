/**
 * Core TypeScript interfaces for Frame Portfolio
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory =
  | 'Master thesis'
  | 'internship'
  | 'research project'
  | 'master project'
  | 'bachelor project'
  | 'personal project'
  | 'industry'
  | 'Biomechatronics / Medical Device Design'; 

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
  size?: 'small' | 'medium' | 'large'; 
}

export interface NarrativeBlock {
  text: string;
  image?: ProjectImage; // optional image shown right after this block of text
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  heroVideo?: string;   // Optional video is required
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
  skills?: string[];        
  notes?: string;
  narrative?: NarrativeBlock[]; // optional interspersed text+image body, used instead of the flat gallery
  link?: {                  
    label: string;
    url: string;
  };
  galleryLayout?: 'stacked' | 'grid'; 
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    github?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'editorial' | 'commercial' | 'personal';
  message: string;
  timestamp: Date;
}
