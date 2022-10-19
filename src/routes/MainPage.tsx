import React from 'react'
import FullScreenSection from 'components/FullScreenSection'

const MainPage: React.FC = () => {
    const sections = [
        'projects',
        'education',
        'job history',
        'media',
        'bootcamp',
    ]
    return (
        <div>
            <nav>
                {sections.map((section) => (
                    <FullScreenSection key={section}>
                        {section}
                    </FullScreenSection>
                ))}
            </nav>
        </div>
    )
}

export default MainPage
