import './global.css'

import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import usePageTracking from 'hooks/usePageTracking'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

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
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
`

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const MainContent = styled.main`
    flex: 1;
`

const PageTracker: React.FC = () => {
    usePageTracking()
    return null
}

const AppContainer: React.FC = () => {
    return (
        <BrowserRouter>
            <PageTracker />
            <ThemeProvider>
                <GlobalStyle />
                <AppWrapper>
                    <MainContent>
                        <NavBar>
                            <MainPage />
                        </NavBar>
                    </MainContent>
                    <Footer />
                </AppWrapper>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default AppContainer
