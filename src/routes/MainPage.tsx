import React from 'react'
import { styled } from '@mui/material/styles'

import { HEADER_NAV_HEIGHT } from 'components/HeaderNav'

const FullHeightContainer = styled('div')`
    height: calc(100vh - ${HEADER_NAV_HEIGHT}px);
    background: #1f1d1d;
`
const MainPage: React.FC = () => {
    return <FullHeightContainer>hello</FullHeightContainer>
}

export default MainPage
