import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ITheme, IThemeContext } from "../modules/ITheme.module";

export const themeContext = createContext<null | IThemeContext>(null);

export default function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<ITheme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const theme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", theme);
            return theme;
        });
    }

    const contextValue:IThemeContext = {
        theme, 
        toggleTheme
    }

    return (
        <themeContext.Provider value={contextValue}>
            {children}
        </themeContext.Provider>
    )
}