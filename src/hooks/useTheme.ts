import { useContext } from "react"
import { themeContext } from "../context/themeContext"
import type { IThemeContext } from "../modules/ITheme.module";

export const useTheme = ():IThemeContext => {
    const ThemeContext = useContext(themeContext);
    if (!ThemeContext) {
        throw new Error("ThemeContextError")
    }
    return ThemeContext;
}