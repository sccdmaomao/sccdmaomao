import { Grid, Typography } from '@mui/material'
import React from 'react'
import { type ThumbnailProps } from './Thumbnail'
import Thumbnail from './Thumbnail'

interface ProjectGridProps {
    title: string
    projects: ThumbnailProps[]
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ title, projects }) => {
    return (
        <>
            <Typography variant="h4" marginTop={4} marginBottom={4}>
                {title}
            </Typography>
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                sx={{ justifyContent: 'center' }}
            >
                {projects.map((project) => (
                    <Grid key={project.title} item xs={12} sm={6} md={4}>
                        <Thumbnail {...project} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProjectGrid 