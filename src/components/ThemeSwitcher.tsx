'use client';

import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-md bg-gray-800 dark:bg-gray-200 text-gray-100 dark:text-gray-900 flex items-center"
      aria-label="Toggle Dark Mode"
    >
      {/* Icon */}
      <span className="block md:hidden">{isDarkMode ? '☀️' : '🌙'}</span>

      {/* Text */}
      <span className="hidden md:block">
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
