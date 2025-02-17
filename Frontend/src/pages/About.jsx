import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="py-20 dark:bg-gray-900">
      <div className="container">
        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-secondary dark:text-green-light mb-8">{t.aboutBumbuli}</h1>
          <p className="text-lg mb-8 dark:text-gray-300">
            {t.aboutDesc}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary dark:text-green-light mb-4">{t.location}</h2>
              <p className="dark:text-gray-300">
                {language === 'en' ? 
                  "Situated in the Western Usambara Mountains, Bumbuli enjoys a temperate climate perfect for agriculture and is surrounded by lush forests and scenic mountain views. Our location in the Lushoto District makes us an integral part of Tanzania's agricultural heartland." :
                  "Iliyopo katika Milima ya Usambara Magharibi, Bumbuli inafurahia hali ya hewa ya wastani inayofaa kwa kilimo na imezungukwa na misitu mingi na mandhari nzuri ya milima. Eneo letu katika Wilaya ya Lushoto linatufanya kuwa sehemu muhimu ya moyo wa kilimo wa Tanzania."}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-secondary dark:text-green-light mb-4">{t.community}</h2>
              <p className="dark:text-gray-300">
                {language === 'en' ? 
                  "Our community is primarily composed of hardworking farmers and small business owners who contribute to the region's agricultural success. We take pride in our cultural heritage and sustainable farming practices." :
                  "Jamii yetu ina wakulima wafanyakazi na wamiliki wadogo wa biashara ambao wanachangia mafanikio ya kilimo katika mkoa. Tunajivunia urithi wetu wa kitamaduni na mbinu endelevu za kilimo."}
              </p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary dark:text-green-light mb-4">
              {language === 'en' ? "Key Features" : "Vipengele Muhimu"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary dark:text-green-light mb-2">
                  {language === 'en' ? "Agriculture" : "Kilimo"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === 'en' ? 
                    "Known for producing high-quality vegetables, fruits, and tea in the fertile mountain soil." :
                    "Inajulikana kwa uzalishaji wa mboga, matunda, na chai bora katika udongo wenye rutuba wa mlimani."}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary dark:text-green-light mb-2">
                  {language === 'en' ? "Education" : "Elimu"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === 'en' ? 
                    "Home to several primary and secondary schools, focusing on quality education for our youth." :
                    "Makao ya shule kadhaa za msingi na sekondari, zinazolenga elimu bora kwa vijana wetu."}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary dark:text-green-light mb-2">
                  {language === 'en' ? "Culture" : "Utamaduni"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === 'en' ? 
                    "Rich in traditional Wasambaa culture, with vibrant local customs and traditions." :
                    "Tajiri katika utamaduni wa Wasambaa, yenye mila na desturi hai za wenyeji."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;