import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

// Constants
export const HEADER_NAV_HEIGHT = 88
const NAME = 'Guohao Yan'

// Styled Component
const Container = styled('div')`
    height: ${HEADER_NAV_HEIGHT}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #3a3737;
    color: #fff;
    padding: 0 40px;
    user-select: none;
`
const LinkContainer = styled('div')`
    display: flex;
`

const NameText = styled(Typography)`
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
`

const LinkText = styled(Typography)`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    padding-left: 25px;
`

// Other Components
const navBarLinks = ['My Code', 'Blog'].map(linkText => (
    <LinkText key={`link-${linkText}`}>{linkText}</LinkText>
))

// Main Component
const HeaderNav: React.FC = () => {
    return (
        <Container>
            <NameText variant="h2">{NAME}</NameText>
            <LinkContainer>{navBarLinks}</LinkContainer>
        </Container>
    )
}

export default HeaderNav
