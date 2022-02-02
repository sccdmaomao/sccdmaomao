import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import Routes from 'routes'
import theme from './theme'
import './global.css'
import logger from 'utils/logger'

const AppContainer = () => {
    logger(theme, 'Theme Object')
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppContainer
