import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 1. Create the Context 
export const ThemeContext = createContext();

// 2. Create the Provider component to wrap around our App
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // 3. Update global CSS variables whenever the theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--color-background', '#111827');
      root.style.setProperty('--color-surface', '#1f2937');
      root.style.setProperty('--text-main', '#f9fafb');
      root.style.setProperty('--text-muted', '#9ca3af');
    } else {
      root.style.setProperty('--color-background', '#f3f4f6');
      root.style.setProperty('--color-surface', '#ffffff');
      root.style.setProperty('--text-main', '#1f2937');
      root.style.setProperty('--text-muted', '#6b7280');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};