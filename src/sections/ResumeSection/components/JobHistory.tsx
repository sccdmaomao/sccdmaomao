import { Button } from '@mui/material'
import {
    Details,
    LeftSection,
    RightSection,
    SubTitle,
    Title,
} from 'components/commonStyles'
import getEmploymentLength from 'helpers/getEmploymentLength'
import { useScrollToSection } from 'hooks/useScrollToSection'
import React from 'react'
import styled from 'styled-components'

import jobText from '../text/JobText'

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
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        text-decoration: underline;
    }
`

const ExpandButton = styled(Button)`
    align-self: center;
    margin: 1em 0;
`

const JobEntry: React.FC<{
    job: (typeof jobText)[0]
    index: number
}> = ({ job, index }) => (
    <JobDetailSectionWrapper key={index}>
        <LeftSection>
            <span>
                {job.date.start} - {job.date.end ?? 'Now'}
            </span>
            <span>{getEmploymentLength(job.date.start, job.date.end)}</span>
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
                    <JobLinks href={link.link} target="_blank" rel="noreferrer">
                        {link.label}
                    </JobLinks>
                </div>
            ))}
        </RightSection>
    </JobDetailSectionWrapper>
)

const JobHistory: React.FC = () => {
    const [showAllJobs, setShowAllJobs] = React.useState(false)
    const scrollToSection = useScrollToSection()
    const visibleJobs = showAllJobs ? jobText : jobText.slice(0, 2)

    const handleToggle = () => {
        setShowAllJobs(!showAllJobs)
        if (showAllJobs) {
            scrollToSection('resume')
        }
    }

    return (
        <JobDetailList>
            {visibleJobs.map((job, index) => (
                <JobEntry key={index} job={job} index={index} />
            ))}
            {jobText.length > 2 && (
                <ExpandButton onClick={handleToggle} variant="text">
                    {showAllJobs
                        ? 'Show Less'
                        : `Show ${jobText.length - 2} More Jobs`}
                </ExpandButton>
            )}
        </JobDetailList>
    )
}

export default JobHistory
