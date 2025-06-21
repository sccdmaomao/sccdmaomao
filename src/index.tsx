import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'

import AppContainer from './AppContainer'

const container = document.getElementById('root')
const root = createRoot(container)
ReactGA.initialize('G-M8801CJ4DP')
root.render(<AppContainer />)
