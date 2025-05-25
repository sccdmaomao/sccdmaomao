import { Paper } from '@mui/material'
import React from 'react'
import Education from 'routes/ResumePage/components/Education'
import JobHistory from 'routes/ResumePage/components/JobHistory'
import ResumeSection from 'routes/ResumePage/components/ResumeSection'
import SkillSummary from 'routes/ResumePage/components/SkillSummary'
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
