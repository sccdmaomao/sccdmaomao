import React from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './AppContainer'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<AppContainer tab="home" />)
