import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const InvisibleNav = styled.nav`
    display: none;
`

const NavBar: React.FC = () => {
    return (
        <div>
            <InvisibleNav>
                <ul>
                    <li>
                        <Link to={`/`}>Main</Link>
                    </li>
                    <li>
                        <Link to={`/projects`}>Projects</Link>
                    </li>
                    <li>
                        <Link to={`/2`}>Your Friend</Link>
                    </li>
                </ul>
            </InvisibleNav>
            <Outlet />
        </div>
    )
}

export default NavBar
