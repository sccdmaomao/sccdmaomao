import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`

const SectionTitle = styled.h3`
    flex-grow: 1;
`

const ResumeSection: React.FC<{
    sectionTitle: string
    children: React.ReactElement
}> = ({ sectionTitle, children }) => {
    return (
        <StyledSection>
            <SectionTitle>{sectionTitle}</SectionTitle>
            {children}
        </StyledSection>
    )
}

export default ResumeSection
