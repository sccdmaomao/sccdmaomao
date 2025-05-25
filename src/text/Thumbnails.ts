import { type ThumbnailProps } from '../components/Thumbnail'

// thumbnails are screenshot made at 1280 x 720 px
// stoired at guohao-public-assets s3 bucket/thumbnails
export const smallProjectThumbnails: ThumbnailProps[] = [
    {
        title: 'Lotto 649 Generator',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/lotto-649-generator-thumbnail.png',
        href: 'https://spa-649-generator.s3.ca-central-1.amazonaws.com/index.html',
        desc: 'Generates valid a random 6 digit lotto 649 number',
    },
    {
        title: 'Tic-Tac-Toe Paper game',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/tic-tac-toe-thumbnail.png',
        href: 'https://spa-tic-tac-toe-game.s3.amazonaws.com/index.html',
        desc: 'The classic tic-tac-toe paper game implemented in React to play against basic AI',
    },

    {
        title: 'Tips Calculator',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/tips-calculator-thumbnail.png',
        href: 'https://spa-tips-calculator.s3.ca-central-1.amazonaws.com/index.html',
        desc: 'An interactive calculator to figure out how much tips to pay',
    },
]

export const mediumProjectThumbnails: ThumbnailProps[] = [
    {
        title: `Sara's Portfolio Website`,
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/sara-portfolio-thumbnail.png',
        href: 'http://spa-sara-portfolio.s3-website.ca-central-1.amazonaws.com/',
        desc: `Sara's portfolio website displaying some of her design projects`,
    },

    {
        title: 'National Park Advisor',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/national-park-advisor-thumbnail.png',
        href: 'http://spa-national-park-advisor.s3-website.ca-central-1.amazonaws.com/',
        desc: 'A park advisor on everything you need to know about any park in the United State',
    },
]

export const reactProjectThumbnails: ThumbnailProps[] = [
    {
        title: 'React Playground',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/react-playground-thumbnail.png',
        href: 'http://spa-react-demos.s3-website-us-east-1.amazonaws.com/',
        desc: 'React related technical playground',
    },
    {
        title: 'React Component Storybook',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/storybook-thumbnail.png',
        href: 'http://spa-alex-storybook.s3-website.ca-central-1.amazonaws.com/?path=/story/storybook-introduction--page',
        desc: 'React component storybook demonstrating some components that I built with goals to reuse in different scenarios',
    },
]

export const fullStackProjectThumbnails: ThumbnailProps[] = [
    {
        title: 'Trello Clone',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/trello-clone-thumbnail.png',
        href: 'http://trello-clone-project.s3-website.ca-central-1.amazonaws.com/',
        desc: 'A simplified version of Trello',
    },
    {
        title: 'Secret Santa',
        imageUrl:
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/secret-santa-thumbnail.jpg',
        href: 'http://spa-secret-santa.s3-website.ca-central-1.amazonaws.com/',
        desc: 'Give a gift to someone anonymously',
    },
]
