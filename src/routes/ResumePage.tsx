import Education from 'components/Education'
import JobHistory from 'components/JobHistory'
import PageTitle from 'components/PageTitle'
import ResumeSection from 'components/ResumeSection'
import SkillSummary from 'components/SkillSummary'
import React from 'react'
import styled from 'styled-components'
import ResumePageText from 'text/ResumePageText'

import { PageWrapper } from './CommonStyles'

const ContentWrapper = styled.div`
    width: 100%;
`

const ResumePage: React.FC = () => {
    return (
        <PageWrapper>
            <ContentWrapper>
                <PageTitle titleText={ResumePageText.title} />
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
        </PageWrapper>
    )
}

export default ResumePage
