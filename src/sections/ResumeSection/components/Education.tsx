import {
    Details,
    LeftSection,
    RightSection,
    SubTitle,
    Title,
} from 'components/commonStyles'
import React from 'react'
import styled from 'styled-components'

import educationText from '../text/EducationText'

const SectionWrapper = styled.div`
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

const Education = () => {
    return (
        <SectionWrapper>
            <JobDetailSectionWrapper>
                <LeftSection>
                    <span>{educationText.time}</span>
                </LeftSection>
                <RightSection>
                    <Title>{educationText.school}</Title>
                    <SubTitle>{educationText.degree}</SubTitle>
                    <Details>{educationText.desc}</Details>
                </RightSection>
            </JobDetailSectionWrapper>
        </SectionWrapper>
    )
}

export default Education
