import { Paper, Typography } from '@mui/material'
import React from 'react'

import Container from '../components/Container'

/*
topics: 
1. rsbuild vs webpack
2. vsc and cursor editor
3. styled component vs tailwind css 
*/
const TechnicalBlogSection = () => {
    return (
        <Container>
            <Paper elevation={0}>
                <Typography variant="h4" marginTop={4}>
                    Coming Soon...
                </Typography>
            </Paper>
        </Container>
    )
}

export default TechnicalBlogSection
