import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import Container from '../../components/Container'
import Thumbnail from './components/Thumbnail'
import {
    fullStackProjectThumbnails,
    mediumProjectThumbnails,
    reactProjectThumbnails,
    smallProjectThumbnails,
} from './text/Thumbnails'

const ProjectSection: React.FC = () => {
    return (
        <Container>
            <Paper elevation={0} sx={{ paddingBottom: '40px' }}>
                <Typography variant="h4" marginTop={4}>
                    Small Projects
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    sx={{ justifyContent: 'center' }}
                >
                    {smallProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item xs={12} sm={6} md={4}>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    Medium Projects
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    sx={{ justifyContent: 'center' }}
                >
                    {mediumProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item xs={12} sm={6} md={4}>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    React Specific Projects
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    sx={{ justifyContent: 'center' }}
                >
                    {reactProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item xs={12} sm={6} md={4}>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" marginTop={4}>
                    Fullstack Projects
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    sx={{ justifyContent: 'center' }}
                >
                    {fullStackProjectThumbnails.map((tb) => (
                        <Grid key={tb.title} item xs={12} sm={6} md={4}>
                            <Thumbnail {...tb} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    )
}

export default ProjectSection
