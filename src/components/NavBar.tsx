import { ROUTE_PATH } from 'AppContainer'
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import navText from 'text/NavigationText'

export const BACKGROUND_COLOR = '#edebeb'
export const NAV_HEIGHT = '5vh'

const PageRoot = styled.div`
    background-color: ${BACKGROUND_COLOR};
    color: black;
    font-family: 'Montserrat', sans-serif;
`

const OutletWrapper = styled.div`
    padding: 2em 6em;
    height: calc(100vh - 4em); // Minus Padding on top and bottom
`

const Nav = styled.nav`
    position: fixed;
    height: ${NAV_HEIGHT};
    margin: 0 6em;
    width: calc(100vw - 12em); // minus margin on left and right
    & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;

        & > li {
            user-select: none;
            margin-right: 1em;
            border-left: 1px solid black;
            padding-left: 1em;
            & > a {
                color: black;
                text-decoration: none;
            }
        }

        & > li:first-child {
            flex-grow: 1;
        }
        & > li:first-child,
        li:nth-child(2) {
            border: none;
            padding-left: 0;
        }
    }
`

const GuohaoLink = styled(Link)`
    margin-right: 1em;
    > h3 {
        display: inline-block;
        font-size: 1.5em;
    }
`

const SubPageLink = styled.li<{ selected?: boolean }>`
    font-weight: ${({ selected }) => selected && 'bold'};
    :hover {
        font-weight: bold;
    }
`

const NavBar: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <PageRoot>
            <Nav>
                <ul>
                    <li>
                        <GuohaoLink to={ROUTE_PATH.ROOT}>
                            <h3>{navText.name}</h3>
                        </GuohaoLink>
                        <span>
                            {navText.title} @ {navText.company}
                        </span>
                    </li>
                    <SubPageLink
                        selected={pathname.includes(ROUTE_PATH.RESUME)}
                    >
                        <Link to={ROUTE_PATH.RESUME}>Resume</Link>
                    </SubPageLink>
                    <SubPageLink
                        selected={pathname.includes(ROUTE_PATH.PROJECTS)}
                    >
                        <Link to={ROUTE_PATH.PROJECTS}>Projects</Link>
                    </SubPageLink>
                    <SubPageLink
                        selected={pathname.includes(ROUTE_PATH.CONTACTS)}
                    >
                        <Link to={ROUTE_PATH.CONTACTS}>Contact</Link>
                    </SubPageLink>
                </ul>
            </Nav>
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </PageRoot>
    )
}

export default NavBar
