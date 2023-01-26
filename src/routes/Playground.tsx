import { ROUTE_PATH } from 'AppContainer'
import Animation from 'components/Animation'
import React from 'react'
import { Link } from 'react-router-dom'

interface PlaygroundElement {
    title: string
    element: JSX.Element
}

const elements: PlaygroundElement[] = [
    {
        title: 'Animation',
        element: <Animation />,
    },
]

const Playground = () => {
    const renderElements = () => {
        return elements.map(({ title, element }, index) => (
            <div key={`${title}-${index}`}>
                <h2>{title}</h2>
                {element}
            </div>
        ))
    }
    return (
        <div>
            <h1>Playground</h1> <Link to={ROUTE_PATH.ROOT}>Back</Link>
            {renderElements()}
        </div>
    )
}

export default Playground
