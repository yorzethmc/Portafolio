import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { WhatsAppForm } from '../components/WhatsAppForm';
import { useAppContext } from '../hooks/useAppContext';

export const Contact = () => {
  const { t } = useAppContext();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="animate-fade-in">
            <SectionHeader 
              eyebrow={t('contact', 'eyebrow')}
              title={t('contact', 'title')}
              description={t('contact', 'desc')}
            />
          </div>
          
          <div>
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </section>
  );
};
