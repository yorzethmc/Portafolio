import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { useAppContext } from '../hooks/useAppContext';

export const PymeServices = () => {
  const { t, tData } = useAppContext();
  const services = tData('servicesData');

  return (
    <section id="pymes" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow={t('pymes', 'eyebrow')}
          title={t('pymes', 'title')}
          description={t('pymes', 'desc')}
          align="center"
        />
        
        <div className="grid grid-cols-2 mt-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
