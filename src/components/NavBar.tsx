import { BACKGROUND_COLORS } from 'colors'
import SideProjectIcon from 'icons/SideProjectIcon'
import React from 'react'
import styled from 'styled-components'

export const NAV_HEIGHT = '8vh'

const PageRoot = styled.div`
    background-color: ${BACKGROUND_COLORS.PAGE};
    min-height: 100vh;
    overflow-y: auto;
`

const ContentWrapper = styled.div`
    padding: 0 6em;
    height: 100%;
`

const Nav = styled.nav`
    padding: 0 6em;
    width: calc(100% - 12em);
    background-color: ${BACKGROUND_COLORS.NAV};
    position: fixed;
    top: 0;
    z-index: 1000;

    & > ul {
        height: ${NAV_HEIGHT};
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        & > li {
            user-select: none;
            margin-right: 1em;
            border-left: 1px solid black;
            padding-left: 1em;
            & > a {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
            white-space: nowrap;
        }
        & > li:first-child {
            border: none;
            padding-left: 0;
        }
    }
`

const NavItem = styled.li<{ selected?: boolean }>`
    font-weight: ${({ selected }) => selected && 'bold'};
    :hover {
        font-weight: bold;
    }
`

interface NavBarProps {
    children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
    const [activeSection, setActiveSection] = React.useState('home')

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'resume', 'projects', 'blog', 'contacts']
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) {
                setActiveSection(current)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <PageRoot>
            <Nav>
                <ul>
                    <NavItem selected={activeSection === 'resume'}>
                        <a
                            onClick={() => {
                                scrollToSection('resume')
                            }}
                        >
                            Resume
                        </a>
                    </NavItem>
                    <NavItem selected={activeSection === 'projects'}>
                        <SideProjectIcon />
                        <a
                            onClick={() => {
                                scrollToSection('projects')
                            }}
                        >
                            Side Projects
                        </a>
                    </NavItem>
                    <NavItem selected={activeSection === 'blog'}>
                        <a
                            onClick={() => {
                                scrollToSection('blog')
                            }}
                        >
                            Blogs
                        </a>
                    </NavItem>
                    <NavItem selected={activeSection === 'contacts'}>
                        <a
                            onClick={() => {
                                scrollToSection('contacts')
                            }}
                        >
                            Contact
                        </a>
                    </NavItem>
                </ul>
            </Nav>
            <ContentWrapper style={{ marginTop: NAV_HEIGHT }}>
                {children}
            </ContentWrapper>
        </PageRoot>
    )
}

export default NavBar
