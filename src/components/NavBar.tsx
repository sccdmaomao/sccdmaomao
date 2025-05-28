import { BACKGROUND_COLORS } from 'colors'
import BlogIcon from 'icons/BlogIcon'
import ContactIcon from 'icons/ContactIcon'
import ResumeIcon from 'icons/ResumeIcon'
import SideProjectIcon from 'icons/SideProjectIcon'
import ThemeIcon from 'icons/ThemeIcon'
import React from 'react'
import styled from 'styled-components'

import { useTheme } from '../theme/ThemeContext'

export const NAV_HEIGHT = '8vh'

const PageRoot = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    overflow-y: auto;
    color: ${({ theme }) => theme.colors.text};
`

const ContentWrapper = styled.div`
    padding: 0 6em;
    height: 100%;
`

const Nav = styled.nav`
    padding: 0 6em;
    width: calc(100% - 12em);
    background-color: ${({ theme }) => theme.colors.nav};
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
            border-left: 1px solid ${({ theme }) => theme.colors.text};
            padding-left: 1em;
            & > a {
                color: ${({ theme }) => theme.colors.text};
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
    display: flex;
    align-items: center;
    gap: 0.5em;
`

const ThemeToggle = styled.li`
    margin-left: auto !important;
    cursor: pointer;
    display: flex;
    align-items: center;
`

interface NavBarProps {
    children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
    const [activeSection, setActiveSection] = React.useState('home')
    const { toggleTheme } = useTheme()

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
                        <ResumeIcon />
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
                        <BlogIcon />
                        <a
                            onClick={() => {
                                scrollToSection('blog')
                            }}
                        >
                            Blogs
                        </a>
                    </NavItem>
                    <NavItem selected={activeSection === 'contacts'}>
                        <ContactIcon />
                        <a
                            onClick={() => {
                                scrollToSection('contacts')
                            }}
                        >
                            Contact
                        </a>
                    </NavItem>
                    <ThemeToggle onClick={toggleTheme}>
                        <ThemeIcon />
                    </ThemeToggle>
                </ul>
            </Nav>
            <ContentWrapper style={{ marginTop: NAV_HEIGHT }}>
                {children}
            </ContentWrapper>
        </PageRoot>
    )
}

export default NavBar
