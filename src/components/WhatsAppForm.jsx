import React, { useState, useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { useAppContext } from '../hooks/useAppContext';
import { Button } from './Button';
import { Send } from 'lucide-react';
import './form.css';

export const WhatsAppForm = () => {
  const { tData } = useAppContext();
  const formT = tData('form');

  const [formData, setFormData] = useState({
    name: '',
    type: formT.options ? formT.options[0] : 'Sitio web / Landing page',
    message: ''
  });
  
  const [error, setError] = useState('');

  // Auto-fill select based on URL hash when clicking "Solicitar Demo"
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#contact?type=')) {
        const type = decodeURIComponent(hash.split('=')[1]);
        setFormData(prev => ({ ...prev, type }));
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setError(formT.error);
      return;
    }
    setError('');
    openWhatsApp(formData.name, formData.type, formData.message);
  };

  return (
    <form className="wa-form card animate-fade-in" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{formT.name}</label>
        <input 
          id="name"
          type="text" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          placeholder={formT.namePlaceholder}
        />
      </div>

      <div className="form-group">
        <label htmlFor="type">{formT.type}</label>
        <select 
          id="type"
          value={formData.type}
          onChange={e => setFormData({...formData, type: e.target.value})}
        >
          {formT.options && formT.options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">{formT.message}</label>
        <textarea 
          id="message"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          placeholder={formT.msgPlaceholder}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <Button type="submit" variant="whatsapp" className="w-full mt-4">
        <Send size={18} /> {formT.submit}
      </Button>
    </form>
  );
};
