import React from 'react';
import { Badge } from './Badge';

export const ProjectCard = ({ project }) => {
  return (
    <div className="card animate-fade-in">
      <h3 className="mb-4 text-gradient">{project.title}</h3>
      
      <div className="flex flex-wrap gap-4 mb-4">
        {project.tags.map(tag => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      
      <p className="color-muted" style={{color: 'var(--color-muted)'}}>{project.summary}</p>
    </div>
  );
};
