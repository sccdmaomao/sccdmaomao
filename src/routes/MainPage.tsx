import { Card, ScrollWrapper } from 'components/InfiniteHorizontalScroll'
import { useHorizontalScroll } from 'hooks'
import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
    /* flex layout */
    display: flex;
    flex-direction: column;
    align-items: center; // horizontal center

    background-color: #415a77;
    color: white;
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
    const scrollRef2: React.RefObject<HTMLDivElement> = useHorizontalScroll()
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

                {/* Projects Section */}
                <div>
                    <h1>Projects</h1>
                    <ScrollWrapper ref={scrollRef2}>
                        {Array(20)
                            .fill(1)
                            .map((item, index) => (
                                <Card key={index}>
                                    <h2>{index}</h2>
                                </Card>
                            ))}
                    </ScrollWrapper>
                </div>

                {/* Media Section */}
                <div>
                    <h1>Media</h1>
                    {/* linked in, github */}
                    {Array(20)
                        .fill(1)
                        .map((item, index) => (
                            <Card key={index}>
                                <h2>{index}</h2>
                            </Card>
                        ))}
                </div>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default MainPage
