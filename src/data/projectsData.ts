import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'digital-skills-youth-lagos',
    name: 'Digital Skills & Tech Literacy Outreach',
    tagline: 'Equipping youth in underserved communities with modern digital skills.',
    description: 'A 6-week intensive bootcamp providing hands-on training in web fundamentals, UI design, and problem-solving to high school graduates.',
    fullDescription: 'The Digital Skills & Tech Literacy Outreach was initiated to bridge the technology gap for young people living in communities with limited access to digital infrastructure. Over 300 students participated in intensive hands-on workshops, receiving direct mentorship from software engineers and product designers. Each student completed a personal project focused on solving a local community problem using digital tools.',
    location: 'Ikeja, Lagos State',
    state: 'Lagos',
    status: 'Completed',
    category: 'Education',
    date: 'March 2026',
    year: 2026,
    livesImpacted: 340,
    impactBreakdown: [
      { label: 'Students Trained', count: '300+' },
      { label: 'Mentors Engaged', count: 18 },
      { label: 'Community Hubs Supported', count: 4 }
    ],
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    ],
    leadInfo: {
      name: 'Adewale Okins',
      role: 'Head of Tech & Education',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    isFeatured: true
  },
  {
    id: 'community-learning-hubs-ogun',
    name: 'Ogun Rural Community Learning Hub',
    tagline: 'Establishing sustainable community learning hubs powered by clean solar energy.',
    description: 'Construction and outfitting of a community center equipped with laptops, internet access, and learning resources for rural students.',
    fullDescription: 'Access to continuous electricity and educational resources remains a major hurdle for young learners in rural districts. Dovoix Foundation partnered with local community leaders in Abeokuta to erect a solar-powered learning hub. The hub operates 6 days a week, providing free computer access, digital literacy classes, and homework assistance.',
    location: 'Abeokuta, Ogun State',
    state: 'Ogun',
    status: 'Active',
    category: 'Community',
    date: 'January 2026 - Present',
    year: 2026,
    livesImpacted: 450,
    impactBreakdown: [
      { label: 'Daily Learners', count: '120+' },
      { label: 'Solar Capacity', count: '5kW' },
      { label: 'Local Facilitators', count: 6 }
    ],
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80'
    ],
    leadInfo: {
      name: 'Chioma Nnamdi',
      role: 'Community Outreach Director',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    isFeatured: true
  },
  {
    id: 'women-creative-writing-enugu',
    name: 'Women in Creative Storytelling Workshop',
    tagline: 'Empowering young women to master professional writing, journalism, and story craft.',
    description: 'A 4-week narrative writing residency designed to help young female writers publish their stories and build professional writing careers.',
    fullDescription: 'The Women in Creative Storytelling project brought together 80 aspiring writers across Eastern Nigeria. Facilitated by published authors and journalists, the workshop covered non-fiction essay writing, investigative journalism, digital publishing, and content strategy. An anthology of student work was published at the end of the cohort.',
    location: 'Enugu, Enugu State',
    state: 'Enugu',
    status: 'Completed',
    category: 'Outreach',
    date: 'February 2026',
    year: 2026,
    livesImpacted: 220,
    impactBreakdown: [
      { label: 'Female Writers Graduated', count: 80 },
      { label: 'Published Stories', count: 24 },
      { label: 'Partner Publications', count: 5 }
    ],
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
    ],
    leadInfo: {
      name: 'Grace Chukwu',
      role: 'Lead Writing Mentor',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    isFeatured: true
  },
  {
    id: 'interstate-video-documentary-abuja',
    name: 'Interstate Youth Video Production Masterclass',
    tagline: 'Hands-on filmmaking and video production training for young media creators.',
    description: 'Multi-state residential masterclass training youth in camera operations, lighting, sound engineering, and video editing.',
    fullDescription: 'Video production offers immense economic opportunities for creative youth. This interstate initiative invited 100 participants from FCT Abuja, Niger, and Nasarawa states for an immersive 10-day hands-on video workshop. Participants produced short documentaries spotlighting local social issues.',
    location: 'FCT Abuja & Nasarawa State',
    state: 'FCT Abuja',
    status: 'Upcoming',
    category: 'Interstate',
    date: 'September 2026',
    year: 2026,
    livesImpacted: 190,
    impactBreakdown: [
      { label: 'Expected Trainees', count: 100 },
      { label: 'States Involved', count: 3 },
      { label: 'Documentaries Planned', count: 10 }
    ],
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518173946687-a4c8a383592e?auto=format&fit=crop&w=800&q=80'
    ],
    leadInfo: {
      name: 'Michael Danjuma',
      role: 'Head of Media & Film Outreach',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    isFeatured: false
  }
];
