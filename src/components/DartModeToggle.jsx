import React, { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // Update class and localStorage when dark mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className='cursor-pointer text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <IoMdSunny className='text-gray-800 dark:text-yellow-300' />
      ) : (
        <IoMdMoon className='text-gray-800 dark:text-white' />
      )}
    </button>
  );
};

export default DarkModeToggle;
