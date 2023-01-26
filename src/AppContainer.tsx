import './global.css'

import NavBar from 'components/NavBar'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from 'routes/LandingPage'
import Playground from 'routes/Playground'

export enum ROUTE_PATH {
    ROOT = '/',
    PROJECTS = 'projects',
    RESUME = 'resume',
    CONTACTS = 'contacts',
    PLAYGROUND = 'playground',
}

const router = createBrowserRouter([
    {
        path: ROUTE_PATH.ROOT,
        element: <NavBar />,
        children: [
            {
                path: ROUTE_PATH.ROOT,
                element: <LandingPage />,
            },
            {
                path: ROUTE_PATH.ROOT,
                element: <LandingPage />,
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
