import { Paper } from '@mui/material'
import Education from 'components/Education'
import JobHistory from 'components/JobHistory'
import ResumeSection from 'components/ResumeSection'
import SkillSummary from 'components/SkillSummary'
import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
    width: 100%;
`

const ResumePage: React.FC = () => {
    return (
        <Paper elevation={0}>
            <ContentWrapper>
                <ResumeSection
                    sectionTitle={'Skills and Expertise'}
                    styles={{ flexDirection: 'column' }}
                >
                    <SkillSummary />
                </ResumeSection>
                <hr />
                <ResumeSection sectionTitle={'Education'}>
                    <Education />
                </ResumeSection>
                <hr />
                <ResumeSection sectionTitle={'Work Experience'}>
                    <JobHistory />
                </ResumeSection>

                <hr />
            </ContentWrapper>
        </Paper>
    )
}

export default ResumePage
