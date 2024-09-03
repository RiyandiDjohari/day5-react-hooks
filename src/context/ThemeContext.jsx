import React from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme : light)');
    const mode = lightModeMediaQuery.matches ? "light" : "dark"

  const [theme, setTheme] = React.useState(mode);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
