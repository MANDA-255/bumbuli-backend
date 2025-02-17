import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function Contact() {
  const { language, translations } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServerAvailable, setIsServerAvailable] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (value.length < 3) {
          return t.nameMinLength;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return t.invalidEmail;
        }
        break;
      case 'message':
        if (value.length < 10) {
          return t.messageMinLength;
        }
        break;
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate on change and show error
    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      setFormStatus({
        message: t.fixFormErrors,
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ message: '', isError: false });

    if (!isServerAvailable) {
      setFormStatus({
        message: t.serverUnavailable,
        isError: true
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Message not sent successfully');
      }

      const data = await response.json();
      setFormStatus({
        message: t.messageSentSuccess,
        isError: false
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submit error:', error);
      if (!navigator.onLine || error.message === 'Failed to fetch') {
        setFormStatus({
          message: t.serverUnavailable,
          isError: true
        });
        setIsServerAvailable(false);
      } else {
        setFormStatus({
          message: t.messageSentError,
          isError: true
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if server is available
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch(`${API_URL}/api/test`);
        const data = await response.json();
        setIsServerAvailable(response.ok);
      } catch (error) {
        console.error('Server check failed:', error);
        setIsServerAvailable(false);
      }
    };
    
    checkServer();
    const interval = setInterval(checkServer, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20">
      <div className="container">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto ${
            inView ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold text-secondary mb-8">
            {t.contactUs}
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                {t.getInTouch}
              </h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  {t.location}
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-phone text-primary"></i>
                  +255 27 264 0154
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-envelope text-primary"></i>
                  info@bumbuli.go.tz
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm dark:text-white font-medium text-text-base mb-1">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.placeholderName}
                    required
                    className={`w-full px-4 py-2 border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      fieldErrors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm dark:text-white font-medium text-text-base mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.placeholderEmail}
                    required
                    className={`w-full px-4 py-2 border dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      fieldErrors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm dark:text-white font-medium text-text-base mb-1">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.placeholderMessage}
                    required
                    rows="4"
                    className={`w-full px-4 py-2 border dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      fieldErrors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
                  )}
                </div>

                {formStatus.message && (
                  <p
                    className={`text-sm ${
                      formStatus.isError ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.sending : t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
