import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const usePageViewTracking = () => {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
    }, [])
}

export default usePageViewTracking
