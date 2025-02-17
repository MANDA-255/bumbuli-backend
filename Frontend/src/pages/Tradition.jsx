import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

function Tradition() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const traditions = [
    {
      title: t.annualGivingDay,
      description: t.givingDayDesc,
      icon: 'fa-calendar'
    },
    {
      title: t.youthLeadership,
      description: t.youthDesc,
      icon: 'fa-users'
    },
    {
      title: t.communityFestivals,
      description: t.festivalsDesc,
      icon: 'fa-star'
    }
  ];

  return (
    <div className="py-20 dark:bg-gray-900">
      <div className="container">
        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-secondary dark:text-green-light mb-8">{t.ourTraditions}</h1>
          <p className="text-lg mb-12 dark:text-gray-300">
            {t.traditionsDesc}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
                <i className={`fas ${tradition.icon} text-4xl text-green dark:text-green-light mb-4`}></i>
                <h3 className="text-xl font-semibold text-secondary dark:text-green-light mb-2">{tradition.title}</h3>
                <p className="text-text-light dark:text-gray-300">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradition