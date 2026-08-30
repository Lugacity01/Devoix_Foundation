import { ReachLocation } from '@/types';

export const reachData: ReachLocation[] = [
  {
    id: 'reach-lagos',
    name: 'Lagos Metropolitan Area',
    state: 'Lagos',
    coordinates: { x: 20, y: 78 }, // SVG map coordinate percentage
    activeProjects: 2,
    completedProjects: 4,
    livesImpacted: 540,
    featuredProjectName: 'Digital Skills & Tech Literacy Outreach'
  },
  {
    id: 'reach-ogun',
    name: 'Abeokuta & Regional Hubs',
    state: 'Ogun',
    coordinates: { x: 18, y: 72 },
    activeProjects: 1,
    completedProjects: 2,
    livesImpacted: 450,
    featuredProjectName: 'Ogun Rural Community Learning Hub'
  },
  {
    id: 'reach-enugu',
    name: 'Enugu Central District',
    state: 'Enugu',
    coordinates: { x: 62, y: 70 },
    activeProjects: 1,
    completedProjects: 1,
    livesImpacted: 220,
    featuredProjectName: 'Women in Creative Storytelling Workshop'
  },
  {
    id: 'reach-abuja',
    name: 'FCT Abuja & Environs',
    state: 'FCT Abuja',
    coordinates: { x: 45, y: 48 },
    activeProjects: 1,
    completedProjects: 1,
    livesImpacted: 190,
    featuredProjectName: 'Interstate Youth Video Production Masterclass'
  },
  {
    id: 'reach-kano',
    name: 'Kano Education Zone',
    state: 'Kano',
    coordinates: { x: 55, y: 22 },
    activeProjects: 1,
    completedProjects: 0,
    livesImpacted: 150,
    featuredProjectName: 'Northern Digital Access Initiative'
  },
  {
    id: 'reach-rivers',
    name: 'Port Harcourt Coastal Hub',
    state: 'Rivers',
    coordinates: { x: 48, y: 88 },
    activeProjects: 1,
    completedProjects: 0,
    livesImpacted: 180,
    featuredProjectName: 'Delta Youth Skills Project'
  }
];
