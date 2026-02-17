/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      <div style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
