import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type SetTheme = (theme: Theme) => void;

function useDarkMode(): [Theme, SetTheme] {
  const [theme, setTheme] = useState<Theme>(
    (typeof window !== 'undefined'
      ? localStorage.getItem('theme')
      : 'light') as Theme
  );
  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
