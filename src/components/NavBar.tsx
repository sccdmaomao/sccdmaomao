import { BACKGROUND_COLORS } from 'colors'
import SideProjectIcon from 'icons/SideProjectIcon'
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTE_PATH } from '../AppContainer'
import { CURRENT_JOB_COMPANY, CURRENT_JOB_TITLE, NAME } from '../constants'

export const NAV_HEIGHT = '8vh'

const PageRoot = styled.div`
    background-color: ${BACKGROUND_COLORS.PAGE};
    max-height: 100vh;
    overflow: hidden;
`

const ScrollWrapper = styled.div`
    overflow: auto;
    height: calc(100vh - ${NAV_HEIGHT});
`

const OutletWrapper = styled.div`
    padding: 0 6em;
    height: 100%;
`

const Nav = styled.nav`
    padding: 0 6em;
    width: calc(100% - 12em);
    background-color: ${BACKGROUND_COLORS.NAV};

    & > ul {
        height: ${NAV_HEIGHT};
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
            white-space: nowrap;
        }

        & > li:first-child {
            flex-grow: 1;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
        }
        /* No border style for First and Second route link */
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
        margin: 0;
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
                            <h3>{NAME} </h3>
                        </GuohaoLink>
                        <span>
                            {CURRENT_JOB_TITLE} @ {CURRENT_JOB_COMPANY}
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
                        <SideProjectIcon />
                        <Link to={ROUTE_PATH.PROJECTS}>Side Projects</Link>
                    </SubPageLink>
                    <SubPageLink selected={pathname.includes(ROUTE_PATH.BLOG)}>
                        <Link to={ROUTE_PATH.BLOG}>Blogs</Link>
                    </SubPageLink>
                    <SubPageLink
                        selected={pathname.includes(ROUTE_PATH.CONTACTS)}
                    >
                        <Link to={ROUTE_PATH.CONTACTS}>Contact</Link>
                    </SubPageLink>
                </ul>
            </Nav>
            <ScrollWrapper>
                <OutletWrapper>
                    <Outlet />
                </OutletWrapper>
            </ScrollWrapper>
        </PageRoot>
    )
}

export default NavBar
