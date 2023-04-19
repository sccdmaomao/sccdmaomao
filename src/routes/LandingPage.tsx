import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import text from 'text/LandingPageText'

const ContentWrapper = styled.div`
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextWrapper = styled.div``

const Title = styled.h1`
    display: inline-block;
`
const FakeImg = styled.img`
    margin: 20px;
    border-radius: 50%;
    border: 1px solid black;
    width: 300px;
`

const LandingPage: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <ContentWrapper>
                <FakeImg
                    src="https://guohao-public-assets.s3.ca-central-1.amazonaws.com/images/guohao-profile-pic.jpg"
                    loading="lazy"
                ></FakeImg>
                <TextWrapper>
                    <Title>{text.title}</Title>
                    <p>{text.introParagraph}</p>
                </TextWrapper>
            </ContentWrapper>
        </Paper>
    )
}

export default LandingPage
