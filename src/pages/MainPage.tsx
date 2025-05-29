import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import LandingPage from '../sections/LandingSection'
import ProjectPage from '../sections/ProjectSection'
import ResumePage from '../sections/ResumeSection'
import TechnicalBlogPage from '../sections/TechnicalBlogSection'

const Section = styled.section`
    padding: 20px 0;
    scroll-margin-top: 8vh; // Accounts for the navbar height
`

const MainPage: React.FC = () => {
    return (
        <Box>
            <Section id="home">
                <LandingPage />
            </Section>

            <Section id="resume">
                <ResumePage />
            </Section>

            <Section id="projects">
                <ProjectPage />
            </Section>

            <Section id="blog">
                <TechnicalBlogPage />
            </Section>
        </Box>
    )
}

export default MainPage
