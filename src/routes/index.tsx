import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainPage from './MainPage'
import HeaderNav from 'components/HeaderNav'

const MyRoutes: React.FC = () => {
    return (
        <div>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default MyRoutes
