import React, { useState } from 'react'
import styled from 'styled-components'

/*
    Scroll horizontally infinately
    utlize transform CSS. Reference: https://www.orb-space.com/
*/

export const ScrollWrapper = styled.div<{ xDelta?: number }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    > * {
        transform: ${({ xDelta }) =>
            xDelta ? `translate(${xDelta}px, 0)` : ''};
    }
`

export const Card = styled.div`
    flex: 0 0 auto;
    border: 1px solid black;
    width: 250px;
    height: 250px;
`
const InfiniteHorizontalScroll = () => {
    const [xDelta, setXDelta] = useState(0)

    const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
        setXDelta(xDelta + e.deltaY)
        if (xDelta > 2000) {
            setXDelta(0)
        }
        if (xDelta < -2000) {
            setXDelta(0)
        }
    }
    return (
        <ScrollWrapper onWheel={onWheel} xDelta={xDelta}>
            {Array(8)
                .fill(1)
                .map((item, index) => (
                    <Card key={index}>
                        <h2>{index}</h2>
                    </Card>
                ))}
            {Array(8)
                .fill(1)
                .map((item, index) => (
                    <Card key={index}>
                        <h2>{index}</h2>
                    </Card>
                ))}
        </ScrollWrapper>
    )
}

export default InfiniteHorizontalScroll
