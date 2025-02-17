import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun } from 'lucide-react';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-[#daa520]" />
      ) : (
        <i className="fas fa-moon text-gray-600"></i>
      )}
    </button>
  );
}

export default ThemeToggle;