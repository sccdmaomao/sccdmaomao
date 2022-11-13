import { PATH } from 'AppContainer'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FloatingWrapper = styled.div`
    background-color: cadetblue;
    display: flex;
    position: fixed;
    z-index: 5;
    bottom: 100px;
    right: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #1b1910;
`

const PlaygroundEntrance = () => {
    return (
        <FloatingWrapper>
            <StyledLink to={PATH.PLAYGROUND}>playground</StyledLink>
        </FloatingWrapper>
    )
}

export default PlaygroundEntrance
