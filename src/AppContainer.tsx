import './global.css'

import NavBar from 'components/NavBar'
import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ContactsPage from 'routes/ContactsPage'
import LandingPage from 'routes/LandingPage'
import Playground from 'routes/Playground'
import ProjectPage from 'routes/ProjectPage'
import ResumePage from 'routes/ResumePage'

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
        errorElement: <div>404</div>,
    },
    { path: ROUTE_PATH.PLAYGROUND, element: <Playground /> },
])
const AppContainer: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppContainer
