import './global.css'

import { ThemeProvider } from '@mui/material'
import NavBar from 'components/NavBar'
import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ContactsPage from 'routes/ContactsPage'
import ErrorPage from 'routes/ErrorPage'
import LandingPage from 'routes/LandingPage'
import ProjectPage from 'routes/ProjectPage'
import ResumePage from 'routes/ResumePage'
import { createGlobalStyle } from 'styled-components'

import { BACKGROUND_COLORS } from './colors'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${BACKGROUND_COLORS.PAGE}
  }
`

export enum ROUTE_PATH {
    ROOT = '/',
    PROJECTS = 'projects',
    RESUME = 'resume',
    CONTACTS = 'contacts',
    PLAYGROUND = 'playground',
}

const router = createHashRouter([
    {
        path: ROUTE_PATH.ROOT,
        element: <NavBar />,
        children: [
            {
                path: ROUTE_PATH.ROOT,
                element: <LandingPage />,
            },
            {
                path: ROUTE_PATH.RESUME,
                element: <ResumePage />,
            },
            {
                path: ROUTE_PATH.PROJECTS,
                element: <ProjectPage />,
            },
            {
                path: ROUTE_PATH.CONTACTS,
                element: <ContactsPage />,
            },
        ],
        errorElement: <ErrorPage />,
    },
])

const AppContainer: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    )
}

export default AppContainer
