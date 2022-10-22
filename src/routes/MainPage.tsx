import { Card, ScrollWrapper } from 'components/InfiniteHorizontalScroll'
import { useHorizontalScroll } from 'hooks'
import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
    /* flex layout */
    display: flex;
    flex-direction: column;
    align-items: center; // horizontal center

    /* Full screen */
    height: 100vh;
    width: 100vw;
    background-color: #415a77;
    color: white;
    position: fixed;
`

const TopHeaderWrapper = styled.div`
    display: flex;
    padding: 2rem 5rem 0 5rem;
    > :first-child {
        flex-grow: 1;
    }
`

const ContentWrapper = styled.div`
    width: 100%;
`

const MainPage: React.FC = () => {
    const scrollRef: React.RefObject<HTMLDivElement> = useHorizontalScroll()

    return (
        <PageWrapper>
            <ContentWrapper>
                {/* Title Section */}
                <TopHeaderWrapper>
                    <h1>Guohao Yan</h1> <h2>Frontend Software Engineer</h2>
                </TopHeaderWrapper>

                {/* Content Section  */}
                <div>
                    <h1>Past Experiences</h1>
                    <ScrollWrapper ref={scrollRef}>
                        {Array(20)
                            .fill(1)
                            .map((item, index) => (
                                <Card key={index}>
                                    <h2>{index}</h2>
                                </Card>
                            ))}
                    </ScrollWrapper>
                </div>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default MainPage
