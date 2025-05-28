import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { type Theme, type ThemeMode, themes } from './theme'

interface ThemeContextType {
    theme: Theme
    themeMode: ThemeMode
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

const createMuiTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
            background: {
                default: themes[themeMode].colors.background,
                paper: themes[themeMode].colors.nav,
            },
            text: {
                primary: themes[themeMode].colors.text,
                secondary: themes[themeMode].colors.secondary,
            },
            primary: {
                main: themes[themeMode].colors.primary,
            },
        },
    })
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        const savedTheme = localStorage.getItem('theme')
        return (savedTheme as ThemeMode) || 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', themeMode)
    }, [themeMode])

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const theme = themes[themeMode]
    const muiTheme = createMuiTheme(themeMode)

    return (
        <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}
