'use client';
import { createContext, useContext, useState } from "react";

enum DataDisplay {
  List = 'list',
  Grid = 'grid'
}

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  },
  dataDisplay: DataDisplay,
}

const defaultTheme: Theme = {
  colors: {
    primary: 'black',
    secondary: 'white'
  },
  dataDisplay: DataDisplay.List
}

const ThemeContext = createContext<{
  theme: Theme;
  toggleDataDisplay: () => void;
}>({
  theme: defaultTheme,
  toggleDataDisplay: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleDataDisplay = () => {
    setTheme(currentTheme => ({
      ...currentTheme,
      dataDisplay: currentTheme.dataDisplay === DataDisplay.List ? DataDisplay.Grid : DataDisplay.List,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDataDisplay }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

