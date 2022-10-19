import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'
import './global.css'

const AppContainer = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default AppContainer
