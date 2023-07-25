import { createContext } from 'react'

const ThemeContext = createContext('light')
const ThemeProvider = ThemeContext.Provider

export { ThemeContext, ThemeProvider }
