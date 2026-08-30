export type ProjectStatus = 'Active' | 'Completed' | 'Upcoming';
export type ProjectCategory = 'Outreach' | 'Education' | 'Community' | 'Interstate';

export interface ProjectLead {
  name: string;
  role: string;
  photo: string;
}

export interface ImpactBreakdown {
  label: string;
  count: number | string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  location: string;
  state: string;
  status: ProjectStatus;
  category: ProjectCategory;
  date: string;
  year: number;
  livesImpacted: number;
  impactBreakdown?: ImpactBreakdown[];
  coverImage: string;
  galleryImages: string[];
  leadInfo: ProjectLead;
  videoUrl?: string;
  isFeatured: boolean;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  iconName: string;
  activeCohorts: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  isFounder: boolean;
}

export interface ReachLocation {
  id: string;
  name: string;
  state: string;
  coordinates: {
    x: number; // Percentage X on SVG map
    y: number; // Percentage Y on SVG map
  };
  activeProjects: number;
  completedProjects: number;
  livesImpacted: number;
  featuredProjectName: string;
}

export interface StudentRegistrationInput {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  stateOfResidence: string;
  lga?: string;
  programOfInterest: string;
  projectCohort: string;
  howHeard?: string;
  personalStatement?: string;
}

export interface ContactEnquiryInput {
  fullName: string;
  email: string;
  subject: 'General Enquiry' | 'Partnership' | 'Media' | 'Other';
  message: string;
}
