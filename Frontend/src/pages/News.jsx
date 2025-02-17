import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

function News() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      title: t.newCommunityCenter,
      date: '2024-02-15',
      excerpt: t.communityDesc,
      category: t.announcements,
      content: t.announcementscont,
      image: 'https://i.postimg.cc/RhJ6pNyB/explore-the-beauty-of.jpg'
    },
    {
      title: t.charityDrive,
      date: '2024-02-10',
      excerpt: t.charityDesc,
      category: t.events,
      content: t.eventscont,
      image: 'https://i.postimg.cc/XYSFhknD/macadamia-s.jpg'
    },
    {
      title: t.volunteerProgram,
      date: '2024-02-05',
      excerpt: t.volunteerDesc,
      category: t.community,
      content: t.communitycont,
      image: 'https://i.postimg.cc/5NbcB0FS/irente-viewpoint.jpg'
    }
  ];

  return (
    <div className="py-20 dark:bg-gray-900">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary dark:text-green-light mb-8">{t.latestNews}</h1>
        <div ref={ref} className={`space-y-8 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {news.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200 flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green dark:text-green-light font-semibold">{item.category}</span>
                  <span className="text-text-light dark:text-gray-400">{item.date}</span>
                </div>
                <h2 className="text-2xl font-semibold text-secondary dark:text-green-light mb-4">{item.title}</h2>
                <p className="text-text-light dark:text-gray-300 mb-4">{item.excerpt}</p>
                <button 
                  onClick={() => setSelectedNews(item)}
                  className="text-primary dark:text-green-light hover:text-secondary dark:hover:text-green-400 transition-colors"
                >
                  {t.readMore}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* News Popup */}
        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 dark:bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Popup Image */}
              <div className="relative h-64">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Popup Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green dark:text-green-light font-semibold">{selectedNews.category}</span>
                  <span className="text-text-light dark:text-gray-400">{selectedNews.date}</span>
                </div>
                <h2 className="text-3xl font-semibold text-secondary dark:text-green-light mb-6">{selectedNews.title}</h2>
                <p className="text-text-base dark:text-gray-300 leading-relaxed">{selectedNews.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;