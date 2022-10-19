import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './MainPage'

const MyRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default MyRoutes
