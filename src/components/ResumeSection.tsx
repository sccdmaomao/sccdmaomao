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

const JobDetailList = styled.div`
    display: flex;
    flex-direction: column;
`

const JobDetailSectionWrapper = styled.div`
    margin-bottom: 2em;
    display: flex;
    > * {
        margin-left: 2em;
    }
`

const JobDetailSection = styled.div`
    display: flex;
    flex-direction: column;
`

const JobTitle = styled.span`
    font-weight: bold;
`

const ResumeSection: React.FC<{ sectionTitle: string }> = ({
    sectionTitle,
}) => {
    const jobs = [
        {
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            details: 'Details',
            date: 'date',
        },
        {
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            details: 'Details',
            date: 'date',
        },
        {
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            details: 'Details',
            date: 'date',
        },
        {
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            details: 'Details',
            date: 'date',
        },
    ]

    return (
        <StyledSection>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <JobDetailList>
                {jobs.map((job, index) => (
                    <JobDetailSectionWrapper key={index}>
                        <div>date</div>
                        <JobDetailSection>
                            <JobTitle>Job Title</JobTitle>
                            <span>Company Name</span>
                            <span>Details</span>
                        </JobDetailSection>
                    </JobDetailSectionWrapper>
                ))}
            </JobDetailList>
        </StyledSection>
    )
}

export default ResumeSection
