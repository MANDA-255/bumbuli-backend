import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function Footer() {
  const { language, translations } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setStatus('sending');
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: email,
          message: `${t.subMessage} ${email}`,
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        setEmail('');
      } else {
        throw new Error('Message failed to send');
      }
      
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('Message failed to send');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <footer className="bg-secondary dark:bg-gray-900 text-white pt-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-green-light">{t.aboutBumbuli}</h3>
            <p className="text-gray-200 dark:text-gray-300">{t.aboutBumbuliCont}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-green-light">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-200 dark:text-gray-300 hover:text-green-light transition-colors">{t.about}</a></li>
              <li><a href="/gallery" className="text-gray-200 dark:text-gray-300 hover:text-green-light transition-colors">{t.gallery}</a></li>
              <li><a href="/contact" className="text-gray-200 dark:text-gray-300 hover:text-green-light transition-colors">{t.contact}</a></li>
              <li><a href="/tradition" className="text-gray-200 dark:text-gray-300 hover:text-green-light transition-colors">{t.culture}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-green-light">{t.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-200 dark:text-gray-300">
                <i className="fas fa-map-marker-alt"></i>
                <span>{t.location}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-200 dark:text-gray-300">
                <i className="fas fa-phone"></i>
                <span>+255 27 264 0154</span>
              </li>
              <li className="flex items-center gap-2 text-gray-200 dark:text-gray-300">
                <i className="fas fa-envelope"></i>
                <span>info@bumbuli.go.tz</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-green-light">{t.newsLetter}</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input 
                type="email"
                name="email"
                placeholder={t.placeholderEmail}
                required 
                className="w-full px-4 py-2 rounded-lg text-text-base bg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button 
                type="submit" 
                className="btn w-full btn-secondary dark:bg-green-dark hover:dark:bg-green disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.sending : t.subscribe}
              </button>
              {status === 'Message sent successfully' && (
                <p className="text-green-light text-sm mt-2">{status}</p>
              )}
              {status === 'Message failed to send' && (
                <p className="text-red-500 text-sm mt-2">{status}</p>
              )}
            </form>
          </div>
        </div>
        <div className="text-center border-t border-white/10 py-6">
          <p className="text-gray-200 dark:text-gray-300">&copy; {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;