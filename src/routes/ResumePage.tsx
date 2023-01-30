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
                <ResumeSection sectionTitle={'Work Experience'} />
            </ContentWrapper>
        </PageWrapper>
    )
}

export default ResumePage
