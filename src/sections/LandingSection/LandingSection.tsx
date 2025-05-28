import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import { CURRENT_JOB_COMPANY, CURRENT_JOB_TITLE } from '../../constants'
import text from './text/LandingSectionText'

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`

const Title = styled.h1`
    display: inline-block;
    margin-bottom: 1rem;
`

const ProfileImage = styled.img`
    margin: 20px;
    border-radius: 50%;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 300px;
        height: 300px;
        margin: 0;
    }
`

const LandingSection: React.FC = () => {
    return (
        <Container>
            <Paper elevation={0}>
                <ContentWrapper>
                    <ProfileImage
                        src="https://guohao-public-assets.s3.ca-central-1.amazonaws.com/images/guohao-profile-pic.jpg"
                        loading="lazy"
                        alt="Profile"
                    />
                    <TextWrapper>
                        <Title>
                            {CURRENT_JOB_TITLE} @ {CURRENT_JOB_COMPANY}
                        </Title>
                        <p>{text.introParagraph}</p>
                    </TextWrapper>
                </ContentWrapper>
            </Paper>
        </Container>
    )
}

export default LandingSection
