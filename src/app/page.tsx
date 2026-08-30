import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { MissionVision } from '@/components/MissionVision';
import { TeamSection } from '@/components/TeamSection';
import { PartnersSection } from '@/components/PartnersSection';
import { ImpactSummary } from '@/components/ImpactSummary';
import { SubdomainGateway } from '@/components/SubdomainGateway';
import { LatestHighlights } from '@/components/LatestHighlights';

import { teamData } from '@/data/teamData';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionVision />
      <TeamSection team={teamData} />
      <PartnersSection />
      <ImpactSummary />
      <SubdomainGateway />
      <LatestHighlights />
    </>
  );
}
