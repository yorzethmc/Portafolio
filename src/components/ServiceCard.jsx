import React from 'react';
import { Smartphone, QrCode, Store, Zap } from 'lucide-react';
import './cards.css';

const IconMap = { Smartphone, QrCode, Store, Zap };

export const ServiceCard = ({ service }) => {
  const IconComponent = IconMap[service.icon] || Zap;

  return (
    <div className="card service-card animate-fade-in">
      <div className="service-icon-wrapper">
        <IconComponent className="service-icon" size={32} />
      </div>
      <h3 className="mb-2">{service.title}</h3>
      <p className="color-muted mb-4">{service.desc}</p>
      
      {service.img && (
        <div className="service-mockup">
          <img src={service.img} alt={service.title} loading="lazy" />
        </div>
      )}
      
      <a href={`#contact?type=${encodeURIComponent(service.title)}`} className="service-link mt-4">
        Solicitar Demo <span>→</span>
      </a>
    </div>
  );
};
