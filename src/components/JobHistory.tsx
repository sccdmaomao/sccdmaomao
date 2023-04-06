import {
    Details,
    LeftSection,
    RightSection,
    SubTitle,
    Title,
} from 'commonComponents/commonStyles'
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

const JobLinks = styled.a`
    text-decoration: none;
`

const JobHistory: React.FC<{}> = () => {
    return (
        <JobDetailList>
            {jobText.map((job, index) => (
                <JobDetailSectionWrapper key={index}>
                    <LeftSection>
                        <span>
                            {job.date.start} - {job.date.end ?? 'Now'}
                        </span>
                        <span>
                            {getEmploymentLength(job.date.start, job.date.end)}
                        </span>
                    </LeftSection>
                    <RightSection>
                        <Title>{job.jobTitle}</Title>
                        <SubTitle>{job.companyName}</SubTitle>
                        <Details>{job.details}</Details>
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
                    </RightSection>
                </JobDetailSectionWrapper>
            ))}
        </JobDetailList>
    )
}

export default JobHistory
