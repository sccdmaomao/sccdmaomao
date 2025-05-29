import { type ThumbnailProps } from '../components/Thumbnail'
import {
    fullStackProjectThumbnails,
    mediumProjectThumbnails,
    reactProjectThumbnails,
    smallProjectThumbnails,
} from '../text/Thumbnails'

interface ProjectSection {
    title: string
    projects: ThumbnailProps[]
}

export const projectSections: ProjectSection[] = [
    {
        title: 'Small Projects',
        projects: smallProjectThumbnails,
    },
    {
        title: 'Medium Projects',
        projects: mediumProjectThumbnails,
    },
    {
        title: 'React Specific Projects',
        projects: reactProjectThumbnails,
    },
    {
        title: 'Fullstack Projects',
        projects: fullStackProjectThumbnails,
    },
] 