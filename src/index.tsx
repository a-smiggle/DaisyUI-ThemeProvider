import React, { createContext, useContext, useEffect, useState } from 'react';
import {ThemeValue, CustomProps} from './types';


const ThemeContext = createContext<ThemeValue | undefined>(undefined);

export default function DaisyUIThemeProvider(props: CustomProps) {
    const [theme, setTheme] = useState('light');

    function systemCheck(){
        if (window.matchMedia && 
            window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme("dark")
        else setTheme("light")
        
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('daisyUI-theme')
        if (storedTheme) {
            const temp:string= storedTheme;
            // Only check system theme if light or dark used.
            if((temp === 'light' || temp === 'dark') &&  props.useSystem === true){
                systemCheck();
            }
            else{
                setTheme(temp);
            }
        }
        else if(props.useSystem){
            systemCheck();
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
            {props.children}  
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