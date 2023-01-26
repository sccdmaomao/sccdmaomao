import { ROUTE_PATH } from 'AppContainer'
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const BACKGROUND_COLOR = '#edebeb'

const PageRoot = styled.div`
    background-color: ${BACKGROUND_COLOR};
    color: black;
    padding: 2em 6em;
    height: calc(
        100vh - 4em
    ); // We want a full height single page, minus the 4em padding
    font-family: 'Montserrat', sans-serif;
`

const Nav = styled.nav`
    height: 5vh;
    margin-bottom: 2em;
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
        font-size: 2em;
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
                            <h3>Guohao Yan</h3>
                        </GuohaoLink>
                        <span>Software Engineer</span>
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
            <Outlet />
        </PageRoot>
    )
}

export default NavBar
