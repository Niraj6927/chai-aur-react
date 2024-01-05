import { createContext, useContext } from "react";



export const ThemeContext = createContext({
    themeMode: 'light', // In createContext to put variables , method , state
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}