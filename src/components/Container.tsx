import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px; // Maximum content width
    margin: 0 auto; // Center the container
    padding: 0 24px; // Minimum padding on smaller screens
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 0 48px; // More padding on medium screens
    }

    @media (min-width: 1024px) {
        padding: 0 64px; // Even more padding on larger screens
    }
`

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <Box width="100%">
            <StyledContainer className={className}>{children}</StyledContainer>
        </Box>
    )
}

export default Container
