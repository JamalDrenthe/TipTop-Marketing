import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = 'tiptop-theme';

function getSystemTheme(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // ignore storage errors
  }
  return getSystemTheme();
}

function applyThemeToDOM(resolvedTheme: Theme, storedOverride: Theme | null) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (meta) {
    meta.content = storedOverride ?? 'light dark';
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    const systemTheme = getSystemTheme();
    let storedOverride: Theme | null = null;
    try {
      if (newTheme !== systemTheme) {
        localStorage.setItem(STORAGE_KEY, newTheme);
        storedOverride = newTheme;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      storedOverride = newTheme;
    }
    applyThemeToDOM(newTheme, storedOverride);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    let storedOverride: Theme | null = null;
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      if (val === 'light' || val === 'dark') storedOverride = val;
    } catch {
      // ignore
    }
    applyThemeToDOM(theme, storedOverride);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== 'light' && stored !== 'dark') {
          const next = e.matches ? 'dark' : 'light';
          setThemeState(next);
          applyThemeToDOM(next, null);
        }
      } catch {
        // ignore
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const next = e.newValue === 'dark' || e.newValue === 'light' ? e.newValue : getSystemTheme();
        setThemeState(next);
        applyThemeToDOM(next, e.newValue === 'dark' || e.newValue === 'light' ? e.newValue : null);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    window.addEventListener('storage', handleStorage);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
