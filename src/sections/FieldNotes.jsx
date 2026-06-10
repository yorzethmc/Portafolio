import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAppContext } from '../hooks/useAppContext';

export const FieldNotes = () => {
  const { t, tData } = useAppContext();
  const fieldNotes = tData('notesData');

  return (
    <section id="notes" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow={t('nav', 'notes')}
          title="Patrones & Arquitectura"
          description=""
        />
        
        <div className="grid grid-cols-2 mt-8">
          {fieldNotes.map((note, idx) => (
            <div key={idx} className="card animate-fade-in" style={{borderLeft: '4px solid var(--color-cyan)'}}>
              <h4 className="mb-2" style={{color: 'var(--color-text)'}}>{note.title}</h4>
              <p className="color-muted" style={{color: 'var(--color-muted)', fontSize: '0.95rem'}}>{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
