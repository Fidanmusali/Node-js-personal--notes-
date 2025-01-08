import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

export const LanguageSwicher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const languages = ['en', 'az']; 

  const handleLanguageSwitch = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
  };

  return (
    <div className='lang-btn'>
      <button className='lang1' onClick={handleLanguageSwitch}>
        {language === 'en' ? 'English' : 'Azerbaijan'}
      </button>
    </div>
  );
};
