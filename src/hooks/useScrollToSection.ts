import { useCallback } from 'react'

interface ScrollOptions {
    behavior?: ScrollBehavior
    block?: ScrollLogicalPosition
    inline?: ScrollLogicalPosition
}

const defaultOptions: ScrollOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
}

export const useScrollToSection = () => {
    const scrollToSection = useCallback(
        (sectionId: string, options: ScrollOptions = defaultOptions) => {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView(options)
            }
        },
        []
    )

    return scrollToSection
}
