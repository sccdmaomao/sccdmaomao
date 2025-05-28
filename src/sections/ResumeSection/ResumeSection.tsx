import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Education from './components/Education'
import JobHistory from './components/JobHistory'
import ResumeSectionComponent from './components/ResumeSection'
import SkillSummary from './components/SkillSummary'

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

const StyledHR = styled.hr`
    margin: 2rem 0;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
`

const ResumeSection: React.FC = () => {
    return (
        <Container>
            <Paper elevation={0} sx={{ py: 4 }}>
                <ContentWrapper>
                    <ResumeSectionComponent
                        sectionTitle={'Skills and Expertise'}
                        styles={{ flexDirection: 'column' }}
                    >
                        <SkillSummary />
                    </ResumeSectionComponent>
                    <StyledHR />
                    <ResumeSectionComponent sectionTitle={'Education'}>
                        <Education />
                    </ResumeSectionComponent>
                    <StyledHR />
                    <ResumeSectionComponent sectionTitle={'Work Experience'}>
                        <JobHistory />
                    </ResumeSectionComponent>
                    <StyledHR />
                </ContentWrapper>
            </Paper>
        </Container>
    )
}

export default ResumeSection
