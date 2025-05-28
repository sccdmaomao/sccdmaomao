import './global.css'

import NavBar from 'components/NavBar'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import MainPage from './pages/MainPage'
import { ThemeProvider } from './theme/ThemeContext'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.text};
  }

  html {
    scroll-behavior: smooth;
  }
`

const AppContainer: React.FC = () => {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <NavBar>
                <MainPage />
            </NavBar>
        </ThemeProvider>
    )
}

export default AppContainer
