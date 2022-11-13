import './global.css'

import NavBar from 'components/NavBar'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from 'routes/MainPage'
import Playground from 'routes/Playground'

export enum PATH {
    ROOT = '/',
    PLAYGROUND = 'playground',
}

const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <NavBar />,
        children: [
            {
                path: PATH.ROOT,
                element: <MainPage />,
            },
        ],
        errorElement: <div>404</div>,
    },
    { path: PATH.PLAYGROUND, element: <Playground /> },
])
const AppContainer: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppContainer
