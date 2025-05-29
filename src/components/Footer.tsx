import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.nav};
    color: ${({ theme }) => theme.colors.text};
`

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Copyright = styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
`

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <FooterContainer>
            <SocialLinks>
                <IconButton
                    href="https://github.com/sccdmaomao"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                >
                    <GitHub />
                </IconButton>
                <IconButton
                    href="https://www.linkedin.com/in/guohao-yan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                >
                    <LinkedIn />
                </IconButton>
            </SocialLinks>
            <Copyright>
                © {currentYear} Guohao Yan. All rights reserved.
            </Copyright>
        </FooterContainer>
    )
}

export default Footer 