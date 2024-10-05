import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface ThemeContextType {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>; }


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState("light");
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
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