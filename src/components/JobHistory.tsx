import getEmploymentLength from 'helpers/getEmploymentLength'
import React from 'react'
import styled from 'styled-components'
import jobText from 'text/JobText'

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
    max-width: 35em;
`

const JobTitle = styled.span`
    font-weight: bold;
`

const CompanyName = styled.span`
    font-size: 1.2em;
`
const JobDetails = styled.span`
    white-space: pre-wrap;
`

const JobLinks = styled.a`
    text-decoration: none;
`

const EmploymentLengthSection = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 10em;
`

const JobHistory: React.FC<{}> = () => {
    return (
        <JobDetailList>
            {jobText.map((job, index) => (
                <JobDetailSectionWrapper key={index}>
                    <EmploymentLengthSection>
                        <span>
                            {job.date.start} - {job.date.end ?? 'Now'}
                        </span>
                        <span>
                            {getEmploymentLength(job.date.start, job.date.end)}
                        </span>
                    </EmploymentLengthSection>
                    <JobDetailSection>
                        <JobTitle>{job.jobTitle}</JobTitle>
                        <CompanyName>{job.companyName}</CompanyName>
                        <JobDetails>{job.details}</JobDetails>
                        {job.links?.map((link, index) => (
                            <div
                                key={`${job.companyName}-link-${index}`}
                                style={{ margin: '1em 0' }}
                            >
                                <JobLinks
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label}
                                </JobLinks>
                            </div>
                        ))}
                    </JobDetailSection>
                </JobDetailSectionWrapper>
            ))}
        </JobDetailList>
    )
}

export default JobHistory
