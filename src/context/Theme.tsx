
// export const Themecontext = React.createContext("light");

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
    mode: string;
    setmode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState("light");

    return (
        <ThemeContext.Provider value={{ mode, setmode: setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export { ThemeProvider, useTheme };