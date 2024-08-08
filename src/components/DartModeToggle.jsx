import React, { useState, useEffect } from 'react';
import { IoMdSunny,IoMdMoon } from "react-icons/io";


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (

    <div
      className='cursor-pointer text-2xl'
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <IoMdMoon className='text-white' /> // Moon icon for light mode
      ) : (
        <IoMdSunny className='text-white' /> 
      )}
    </div>
   
  );
};

export default DarkModeToggle;
