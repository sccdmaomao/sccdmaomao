import './global.css'

import React, { useState } from 'react'
import jobs from './sections/ResumeSection/text/JobText'
import {
    fullStackProjectThumbnails,
    mediumProjectThumbnails,
    reactProjectThumbnails,
    smallProjectThumbnails,
} from './sections/ProjectSection/text/Thumbnails'

const github = 'https://github.com/sccdmaomao'
const archive = [...reactProjectThumbnails, ...fullStackProjectThumbnails, ...mediumProjectThumbnails, ...smallProjectThumbnails]
const skills = ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Component systems', 'Responsive UI', 'Jest & Cypress', 'REST APIs', 'AWS', 'GitHub Actions']

export default function AppContainer() {
    const [dark, setDark] = useState(() => {
        try { return localStorage.getItem('portfolio-theme') === 'dark' } catch { return false }
    })
    const toggleTheme = () => {
        setDark(previous => !previous)
        try { localStorage.setItem('portfolio-theme', dark ? 'light' : 'dark') } catch { /* Theme remains available without storage. */ }
    }

    return (
        <div className="portfolio" data-theme={dark ? 'dark' : 'light'}>
            <a className="skip-link" href="#main">Skip to content</a>
            <header className="site-header">
                <a className="wordmark" href="#home" aria-label="Alex Yan, home">ay<span>.</span></a>
                <nav aria-label="Main navigation">
                    <a href="#projects">Work</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark}>
                    {dark ? 'Light' : 'Dark'} <span aria-hidden="true">{dark ? '◐' : '◑'}</span>
                </button>
            </header>

            <main id="main">
                <section id="home" className="hero section-shell">
                    <div className="hero-copy">
                        <p className="eyebrow"><span className="status-dot" /> FRONTEND ENGINEER · MARKHAM, ON</p>
                        <h1>Good interfaces.<br />Thoughtful <span>engineering.</span></h1>
                        <p className="hero-intro">Hi, I’m Alex <span className="quiet">(Guohao Yan).</span> I build React applications, untangle UI problems, and turn complex workflows into clear, usable experiences.</p>
                        <div className="hero-actions">
                            <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
                            <a className="text-link" href={github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                        </div>
                        <div className="hero-footnote"><strong>8 years</strong> of React experience <span aria-hidden="true">/</span> Principal Software Engineer at Autodesk</div>
                    </div>
                    <div className="hero-portrait">
                        <span className="portrait-label">THE PERSON BEHIND THE PIXELS</span>
                        <img src="https://guohao-public-assets.s3.ca-central-1.amazonaws.com/images/guohao-profile-pic.jpg" alt="Alex Yan" width="440" height="520" fetchPriority="high" />
                        <div className="portrait-caption"><span>Builder, debugger,<br />occasional lake explorer.</span><span aria-hidden="true">↙</span></div>
                    </div>
                </section>

                <div className="expertise-strip" aria-label="Areas of focus"><span>React & TypeScript</span><span>UI architecture</span><span>Component systems</span><span>Product engineering</span></div>

                <section id="projects" className="section-shell work-section">
                    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Built to be used.</h2></div><p>A personal product, reusable components,<br className="desktop-break" /> and experiments that keep me curious.</p></div>
                    <article className="featured-project">
                        <a className="project-image" href="https://yoyo-spaces.com/" target="_blank" rel="noreferrer" aria-label="Visit Yoyo Spaces (sign-in required)"><div className="image-topline"><span className="tiny-dot" /><span className="tiny-dot" /><span className="tiny-dot" /><span>YOYO SPACES / DOCUMENT WORKSPACE</span></div><img src="./portfolio/yoyo-document.jpg" width="1600" height="1000" loading="lazy" alt="Yoyo Spaces document view showing a fictional weekend project plan" /></a>
                        <div className="featured-copy"><span className="project-number">FEATURED PROJECT / 01</span><h3>Yoyo Spaces</h3><p>A personal workspace for documents, journals, calendars, and photo albums. Built end to end as a solo developer with AI-assisted development.</p><div className="tags"><span>React</span><span>TypeScript</span><span>Tiptap</span><span>AWS</span></div><details className="case-study"><summary>Inside the document workflow <span aria-hidden="true">+</span></summary><p>Rich-text editing connects local changes, asynchronous save feedback, and unsaved-change warnings. TanStack Query coordinates server data and cache invalidation.</p><p>Verified with fictional content: saved formatting, title persistence after reload, and the internal-link warning appearing. The document view was also inspected at a 390-pixel viewport.</p><small>Personal project. Live app requires sign-in; the preview uses sample data.</small></details><div className="project-links"><a href="https://yoyo-spaces.com/" target="_blank" rel="noreferrer">Visit app ↗</a><a href={`${github}/yoyo-docs`} target="_blank" rel="noreferrer">Source code ↗</a></div></div>
                    </article>
                    <div className="project-pair">{reactProjectThumbnails.map((project, index) => <article className="small-project" key={project.title}><div className="small-project-top"><span className="project-number">EXPERIMENT / 0{index + 2}</span><span aria-hidden="true">↗</span></div><h3>{project.title}</h3><p>{index === 0 ? 'A space to explore React patterns and try out technical ideas.' : 'Reusable components, explored in isolation. A practical look at building consistent interfaces.'}</p><a href={project.href} target="_blank" rel="noreferrer">Explore project <span className="sr-only">{project.title}</span> ↗</a></article>)}</div>
                    <details className="project-archive"><summary>More from the project archive <span>{archive.length} projects <span aria-hidden="true">+</span></span></summary><div className="archive-grid">{archive.map(project => <a key={project.title} href={project.href} target="_blank" rel="noreferrer"><strong>{project.title} ↗</strong><span>{project.desc}</span></a>)}</div><p className="archive-note">Earlier experiments and demos. Some external demo hosts may no longer be available.</p></details>
                </section>

                <section id="experience" className="experience-section"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Depth behind the details.</h2></div><p>From shared components to complex products.<br className="desktop-break" /> A career spent building for the web.</p></div><div className="experience-layout"><aside><h3>My everyday toolkit</h3><div className="tags skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div><div className="education"><p className="eyebrow">EDUCATION</p><strong>University of Toronto</strong><p>Honours BSc, Computer Science<br />2012–2017</p></div></aside><div className="career-list">{jobs.slice(0, 3).map(job => <article className="career-row" key={`${job.companyName}-${job.jobTitle}`}><p className="career-date">{job.date.start} — {job.date.end ?? 'Present'}</p><div><h3>{job.jobTitle}</h3><p className="company">{job.companyName}</p><p>{job.companyName === 'Veeva Systems' ? 'Product development, shared component libraries, frontend infrastructure, and mentoring in pharmacovigilance software.' : job.jobTitle === 'Principal Frontend Engineer' ? 'Lead web engineering for Autodesk Build Forms, with a focus on architecture, customer issues, and code modernisation.' : 'Frontend engineering for Progress Tracking and Assets, alongside application architecture and mentorship.'}</p></div></article>)}<details className="earlier-career"><summary>Earlier experience <span aria-hidden="true">+</span></summary>{jobs.slice(3).map(job => <article key={`${job.companyName}-${job.jobTitle}`}><p className="career-date">{job.date.start} — {job.date.end}</p><h3>{job.jobTitle} · {job.companyName}</h3><p className="preserved-details">{job.details}</p></article>)}</details></div></div></div></section>

                <section id="contact" className="section-shell contact-section"><p className="eyebrow">03 / LET’S BUILD SOMETHING</p><div className="contact-grid"><h2>A stubborn UI bug?<br /><span>Let’s untangle it.</span></h2><div><p>I take on small, clearly scoped React UI fixes. Share what’s happening, what you expected, and how to reproduce it. We’ll start with a written conversation.</p><a className="button primary" href="https://www.fiverr.com/ay3712/fix-a-react-ui-bug-in-your-existing-web-application" target="_blank" rel="noreferrer">Work with me on Fiverr ↗</a><p className="contact-note">For other conversations: <a href="mailto:sccdmaomao@hotmail.com">send me an email ↗</a></p></div></div></section>
            </main>
            <footer className="site-footer"><a className="wordmark" href="#home">ay<span>.</span></a><span>© {new Date().getFullYear()} Guohao Yan</span><div><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/guohao-yan/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
        </div>
    )
}
