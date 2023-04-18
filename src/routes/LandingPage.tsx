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
                <FakeImg src="https://fakeimg.pl/300/"></FakeImg>
                <TextWrapper>
                    <Title>{text.title}</Title>
                    <p>{text.introParagraph}</p>
                </TextWrapper>
            </ContentWrapper>
        </Paper>
    )
}

export default LandingPage
