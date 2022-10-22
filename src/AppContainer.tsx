import './global.css'

import NavBar from 'components/NavBar'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from 'routes/MainPage'
import Playground from 'routes/Playground'

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
        ],
        errorElement: <div>404</div>,
    },
    { path: '/playground', element: <Playground /> },
])
const AppContainer: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppContainer
