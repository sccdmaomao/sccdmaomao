import React from 'react'
import styled from 'styled-components'
import text from 'text/LandingPageText'

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 900px;
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
        <PageWrapper>
            <ContentWrapper>
                <FakeImg src="https://fakeimg.pl/300/"></FakeImg>
                <TextWrapper>
                    <Title>{text.title}</Title>
                    <p>{text.introParagraph}</p>
                </TextWrapper>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default LandingPage
