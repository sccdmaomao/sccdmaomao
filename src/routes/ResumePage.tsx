import JobHistory from 'components/JobHistory'
import PageTitle from 'components/PageTitle'
import ResumeSection from 'components/ResumeSection'
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
                <ResumeSection sectionTitle={'Work Experience'}>
                    <JobHistory />
                </ResumeSection>
                <hr />
                {/* <ResumeSection sectionTitle={'Education'} />
                <hr />
                <ResumeSection sectionTitle={'Skills and Expertise'} /> */}
            </ContentWrapper>
        </PageWrapper>
    )
}

export default ResumePage
