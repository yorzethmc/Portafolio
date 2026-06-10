import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { useAppContext } from '../hooks/useAppContext';

export const CorporateProfile = () => {
  const { t, tData } = useAppContext();
  const projects = tData('projectsData');

  return (
    <section id="corporate" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow={t('corporate', 'eyebrow')}
          title={t('corporate', 'title')}
          description={t('corporate', 'desc')}
        />
        
        <div className="grid grid-cols-2 mt-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};
