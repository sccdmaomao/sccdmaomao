import './global.css'

import { ThemeProvider } from '@mui/material'
import NavBar from 'components/NavBar'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { BACKGROUND_COLORS } from './colors'
import MainPage from './pages/MainPage'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${BACKGROUND_COLORS.PAGE};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }
`

const AppContainer: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavBar>
                <MainPage />
            </NavBar>
        </ThemeProvider>
    )
}

export default AppContainer
