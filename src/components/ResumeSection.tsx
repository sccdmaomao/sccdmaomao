import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    > * {
        margin-left: 2em;
    }
`

const SectionTitle = styled.h3`
    flex-grow: 1;
`

const DetailSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ResumeSection: React.FC<{ sectionTitle: string }> = ({
    sectionTitle,
}) => {
    return (
        <StyledSection>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <div>date</div>
            <DetailSectionContainer>
                <span>Job Title</span>
                <span>Company Name</span>
                <span>Details</span>
            </DetailSectionContainer>
        </StyledSection>
    )
}

export default ResumeSection
