import React, { useState } from 'react';

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={handleModeToggle}>Toggle Mode</button>
    </div>
  );
};

export default ModeToggle;
