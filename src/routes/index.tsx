import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MyRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MyComponent />} />
        </Routes>
    )
}

const MyComponent = () => <div>hi</div>
export default MyRoutes
