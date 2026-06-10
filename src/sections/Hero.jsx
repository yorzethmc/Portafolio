import React from 'react';
import { useTripleClick } from '../hooks/useTripleClick';
import { useAppContext } from '../hooks/useAppContext';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import './hero.css';

export const Hero = ({ onActivateEasterEgg }) => {
  const handleAvatarClick = useTripleClick(onActivateEasterEgg, 2000);
  const { t } = useAppContext();

  const skills = ['React 19', 'ETQ Reliance', 'QMS', 'Automation', 'Web Design', 'Process Improvement'];

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        
        <div className="hero-text animate-fade-in">
          <span className="eyebrow">{t('hero', 'eyebrow')}</span>
          <h1 className="hero-title text-gradient" dangerouslySetInnerHTML={{ __html: t('hero', 'title') }}></h1>
          <p className="hero-lead color-muted">
            {t('hero', 'lead')}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="primary" onClick={() => window.location.href = '#contact'}>
              {t('hero', 'btnTalk')}
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#corporate'}>
              {t('hero', 'btnProjects')}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in">
          <div className="avatar-ring" onClick={handleAvatarClick} title="Click to view profile">
            <img 
              src="/assets/images/profile.png" 
              alt="Erick Yorzeth Masis" 
              className="avatar-img"
              width="300"
              height="300"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
