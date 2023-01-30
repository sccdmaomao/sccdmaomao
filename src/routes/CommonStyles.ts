import { NAV_HEIGHT } from 'components/NavBar'
import styled from 'styled-components'

export const PageWrapper = styled.div<{ centerAlign?: boolean }>`
    display: flex;
    height: 100%;
    margin: 0 10%;
    margin-top: ${NAV_HEIGHT};
    justify-content: ${(props) => (props.centerAlign ? 'center' : '')};
    align-items: ${(props) => (props.centerAlign ? 'center' : '')};
`
