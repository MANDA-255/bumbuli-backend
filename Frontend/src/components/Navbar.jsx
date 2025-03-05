import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { language, translations } = useLanguage();
  const t = translations[language];
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ margin: '0', padding: '0', border: 'none', backgroundColor: 'transparent' }}>
      <div className={`bg-green-dark h-[66px] dark:bg-gray-800 py-2 text-sm ${isScrolled ? 'fixed hidden w-full top-0' : ''}`}>
        <div className="container flex justify-between items-center">
          <div className="hidden md:flex gap-5">
            <a href="tel:+255272640154" className="text-white flex items-center gap-2">
              <i className="fas fa-phone"></i> +255 27 264 0154
            </a>
            <a href="mailto:info@bumbuli.go.tz" className="text-white flex items-center gap-2">
              <i className="fas fa-envelope"></i> info@bumbuli.go.tz
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-white hover:text-green-light transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-green-light transition-colors flex items-center justify-center w-4 h-4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-green-light transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className={`bg-white dark:bg-gray-900 fixed w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'top-0 py-4' : 'top-[32px] py-4'
      } ${visible ? 'block' : 'hidden'}`}>
        <div className="container flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-green-dark dark:text-green-light">
            <img src="https://i.postimg.cc/65KwBW0m/bumbuli-logo.png" alt="Bumbuli Logo" className="w-18 h-10" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" >
              <li><a href="/" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.home}</a></li>
              <li><a href="/about" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.about}</a></li>
              <li><a href="/gallery" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.gallery}</a></li>
              <li><a href="/news" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.news}</a></li>
              <li><a href="/contact" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.contact}</a></li>
              <li><a href="/tradition" className="text-text-base dark:text-white dark:hover:text-green hover:text-green transition-colors">{t.culture}</a></li>
            </ul>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Toggle Buttons */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-dark dark:text-green-light"
            >
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col py-4">
              <li><a href="/" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.home}</a></li>
              <li><a href="/about" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.about}</a></li>
              <li><a href="/gallery" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.gallery}</a></li>
              <li><a href="/news" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.news}</a></li>
              <li><a href="/contact" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.contact}</a></li>
              <li><a href="/tradition" className="block px-6 py-2 text-text-base dark:text-white hover:text-green dark:hover:text-green transition-colors">{t.culture}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;