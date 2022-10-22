import { useRef, useEffect } from 'react'

/**
 * A hook that can be used to control horizontal scroll position of an element
 * @param scrollDuration How long it takes to scroll to the next click (transition)
 * @returns A ref to pass to the container
 */
export function useHorizontalScroll<T extends HTMLElement = HTMLElement>() {
    const elRef = useRef<T | null>(null)
    useEffect(() => {
        const el = elRef.current
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return
                e.preventDefault()
                el.scrollBy(e.deltaY, 0)
            }
            el.addEventListener('wheel', onWheel)
            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])
    return elRef
}
