import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    margin: 0;
`

const PageTitle: React.FC<{ titleText: string }> = ({ titleText }) => {
    return <StyledH1>{titleText}</StyledH1>
}

export default PageTitle
