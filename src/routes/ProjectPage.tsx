import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import {
    mediumProjectThumbnails,
    megaProjectThumbnails,
    reactProjectThumbnails,
    smallProjectThumbnails,
} from 'text/Thumbnails'

import Thumbnail from '../components/Thumbnail'

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
                    Mega Projects
                </Typography>
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {megaProjectThumbnails.map((tb) => (
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
