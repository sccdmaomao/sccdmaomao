export type ThemeMode = 'light' | 'dark'

export interface Theme {
    colors: {
        background: string
        text: string
        nav: string
        primary: string
        secondary: string
    }
}

export const themes: Record<ThemeMode, Theme> = {
    light: {
        colors: {
            background: '#ffffff',
            text: '#000000',
            nav: '#ffffff',
            primary: '#1a73e8',
            secondary: '#666666',
        },
    },
    dark: {
        colors: {
            background: '#121212',
            text: '#ffffff',
            nav: '#1e1e1e',
            primary: '#90caf9',
            secondary: '#b3b3b3',
        },
    },
}
