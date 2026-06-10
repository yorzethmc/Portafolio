import React from 'react';

export const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''} animate-fade-in`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-gradient mb-4">{title}</h2>
      {description && <p className="color-muted" style={{color: 'var(--color-muted)', maxWidth: '600px', margin: align === 'center' ? '0 auto' : '0'}}>{description}</p>}
    </div>
  );
};
