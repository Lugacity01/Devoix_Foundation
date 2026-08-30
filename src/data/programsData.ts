import { Program } from '@/types';

export const programsData: Program[] = [
  {
    id: 'design',
    name: 'Design & Visual Communication',
    description: 'Master UI/UX design, brand identity, typography, and modern digital product design tools like Figma.',
    iconName: 'Palette',
    activeCohorts: ['Cohort 2026-A', 'Cohort 2026-B']
  },
  {
    id: 'video-production',
    name: 'Video Production & Editing',
    description: 'Hands-on training in storyboarding, cinematography, audio production, and post-production video editing.',
    iconName: 'Video',
    activeCohorts: ['Cohort 2026-A']
  },
  {
    id: 'writing',
    name: 'Creative & Technical Writing',
    description: 'Develop skills in storytelling, copywriting, technical documentation, journalism, and digital publishing.',
    iconName: 'PenTool',
    activeCohorts: ['Cohort 2026-A', 'Cohort 2026-B']
  },
  {
    id: 'technology',
    name: 'Technology & Software Engineering',
    description: 'Learn modern web development, frontend frameworks, problem-solving logic, and software engineering practices.',
    iconName: 'Code',
    activeCohorts: ['Cohort 2026-A', 'Cohort 2026-B', 'Cohort 2026-C']
  }
];
