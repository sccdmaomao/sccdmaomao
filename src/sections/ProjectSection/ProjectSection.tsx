import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import Thumbnail from './components/Thumbnail'
import {
    fullStackProjectThumbnails,
    mediumProjectThumbnails,
    reactProjectThumbnails,
    smallProjectThumbnails,
} from './text/Thumbnails'

const ProjectPage: React.FC = () => {
    return (
        <Paper elevation={0} sx={{ paddingBottom: '40px' }}>
            <div>
                <Typography variant="h4" marginTop={4}>
                    Small Projects
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {smallProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    Medium Projects
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {mediumProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    React Specific Projects
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {reactProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    Fullstack Projects
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {fullStackProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Paper>
    )
}

export default ProjectPage
