import styled from 'styled-components'

export const PageWrapper = styled.div<{ centerAlign?: boolean }>`
    display: flex;
    height: 100%;
    padding: 2em 0;
    justify-content: ${(props) => (props.centerAlign ? 'center' : '')};
    align-items: ${(props) => (props.centerAlign ? 'center' : '')};
`
