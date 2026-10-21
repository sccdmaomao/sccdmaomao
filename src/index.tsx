import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'

import AppContainer from './AppContainer'

const container = document.getElementById('root')
if (!container) throw new Error('Root element was not found')
const root = createRoot(container)
ReactGA.initialize('G-M8801CJ4DP')
root.render(<AppContainer />)
