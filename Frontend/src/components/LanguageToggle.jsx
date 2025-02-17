import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle language"
    >
      {language === 'en' ? <img className="h-3 w-4" src='https://i.postimg.cc/N2cnbRW4/sw-tz.jpg' border='0' alt='sw-tz'/>: <img className="h-3 w-4" src='https://i.postimg.cc/HcJXrKnc/en-gb.gif' border='0' alt='en-gb'/>}
    </button>
  );
}

export default LanguageToggle;