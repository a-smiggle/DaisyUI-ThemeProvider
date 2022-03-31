import React, { createContext, useContext, useEffect, useState } from 'react';
import {ThemeValue, CustomProps} from './types';


const ThemeContext = createContext<ThemeValue | undefined>(undefined);

export default function DaisyUIThemeProvider({children}: CustomProps) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('daisyUI-theme')
        if (storedTheme) {
            const temp:string= storedTheme;
            setTheme(temp);
            document.documentElement.setAttribute("data-theme", theme);
        }      
        
    }, []);
    
    useEffect(() => {
        localStorage.setItem('daisyUI-theme', theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const updateTheme = (newTheme:string) => {
        if (newTheme){
            setTheme(newTheme);
        }
    }

    return (
        <ThemeContext.Provider  value={{ theme, updateTheme }}>
            {children}  
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
  
    if (context === undefined) {
      throw new Error('useThemeContext must be used inside ThemeContext');
    }
  
    return context;
  };