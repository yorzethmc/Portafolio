import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('dark');

  const t = (section, key) => {
    return translations[lang]?.[section]?.[key] || translations['es']?.[section]?.[key] || '';
  };

  const tData = (key) => {
    return translations[lang]?.[key] || translations['es']?.[key] || [];
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t, tData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
