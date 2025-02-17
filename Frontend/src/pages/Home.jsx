import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://i.postimg.cc/RZCLLrRY/mambo-viewpoint.jpg',
      title: t.welcome
    },
    {
      url: 'https://i.postimg.cc/XYSFhknD/macadamia-s.jpg',
      title: t.agriculturalHeritage
    },
    {
      url: 'https://i.postimg.cc/RhJ6pNyB/explore-the-beauty-of.jpg',
      title: t.beautifulLandscapes
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? heroImages.length - 1 : prevSlide - 1
    );
  };

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [causeRef, causeInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: 'fa-mountain',
      title: t.beautifulLandscapes,
      description: t.landscapesDesc,
    },
    {
      icon: 'fa-leaf',
      title: t.agriculturalHeritage,
      description: t.agricultureDesc,
    },
    {
      icon: 'fa-users',
      title: t.vibrantCommunity,
      description: t.communityDesc,
    },
  ];

  const initiatives = [
    {
      image: "https://i.postimg.cc/XYSFhknD/macadamia-s.jpg",
      title: t.agriculturalDev,
      progress: 70,
      description: t.agriculturalDevDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
      title: t.educationInitiative,
      progress: 85,
      description: t.educationDesc,
    },
    {
      image: "https://i.postimg.cc/Kvb8VxC0/mambo-village.jpg",
      title: t.infrastructureDev,
      progress: 60,
      description: t.infrastructureDesc,
    },
  ];

  return (
    <>
    {/* Hero Section */}
      <Parallax speed={-20}>
        <section className="relative h-[600px] flex items-center text-white text-center overflow-hidden">
          {/* Slides */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms] ease-linear"
                style={{
                  backgroundImage: `url('${image.url}')`,
                  transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
                }}
              ></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Content */}
          <div className="container relative z-20">
            <div className="max-w-3xl mx-auto animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl sd:text-1xl font-bold mb-6">
                {heroImages[currentSlide].title}
              </h1>
              <p className="text-lg mb-8">
                {t.welcomeDesc}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="/about" className="btn btn-primary">
                  {t.exploreBumbuli}
                </a>
                <a href="/contact" className="btn btn-secondary">
                  {t.connectWithUs}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-10 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <i className={`fas ${feature.icon} text-4xl text-green dark:text-green-light mb-6`}></i>
                <h3 className="text-xl font-semibold text-green-dark dark:text-green-light mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-light dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 dark:bg-gray-900">
        <div className="container">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${aboutInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div>
              <h2 className="section-title">{t.aboutBumbuli}</h2>
              <p className="section-subtitle dark:text-green-light">
                {t.thrivingConstituency}
              </p>
              <p className="mb-8 dark:text-gray-300">
                {t.aboutDesc}
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green dark:text-green-light">1,500+</h3>
                  <p className="dark:text-gray-300">{t.farmers}</p>
                </div>
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green dark:text-green-light">30+</h3>
                  <p className="dark:text-gray-300">{t.villages}</p>
                </div>
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green dark:text-green-light">5+</h3>
                  <p className="dark:text-gray-300">{t.teaFactories}</p>
                </div>
              </div>
              <a href="/about" className="btn btn-primary">
                {t.learnMore}
              </a>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/rmwBBYMZ/mambo-viewpoint.jpg"
                alt="Bumbuli Landscape"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section ref={causeRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container ">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.developmentInitiatives}</h2>
            <p className="text-text-light dark:text-gray-300">
              {t.supportingCommunity}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg ${
                  causeInView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-dark dark:text-green-light mb-4">
                    {initiative.title}
                  </h3>
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 rounded-full mb-4">
                    <div 
                      className="bg-green dark:bg-green-light h-full rounded-full"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-text-light dark:text-gray-300 mb-4">
                    <span>{t.progress}: {initiative.progress}%</span>
                    <span>{t.target}: 100%</span>
                  </div>
                  <p className="mb-6 dark:text-gray-300">{initiative.description}</p>
                  <a
                    href="/contact"
                    className="btn btn-primary w-full text-center"
                  >
                    {t.learnMore}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 text-white text-center">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/20 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/5NbcB0FS/irente-viewpoint.jpg')`,
          }}
        ></div>
        <div className="container relative z-20">
          <div className={`max-w-3xl mx-auto ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6">{t.visitBumbuli}</h2>
            <p className="text-lg mb-8">{t.visitDesc}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/gallery" className="btn btn-primary">
                {t.viewGallery}
              </a>
              <a href="/contact" className="btn btn-secondary">
                {t.connectWithUs}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;