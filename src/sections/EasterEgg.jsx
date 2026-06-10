import React from 'react';

export const EasterEgg = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div 
      className="animate-fade-in"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, var(--color-magenta), #ffb703)',
        color: '#000',
        padding: '12px 30px',
        borderRadius: '30px',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)',
        zIndex: 9999,
        boxShadow: '0 10px 25px rgba(217, 70, 239, 0.4)'
      }}
    >
      🕺 ¡Modo Conga Activado! 🎮
    </div>
  );
};
