import { Paper, Typography } from '@mui/material'

import Container from '../../components/Container'

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
                <Typography variant="h3" component="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: 6 }}>
                    Technical Blog
                </Typography>
                <Typography variant="h4" marginTop={4}>
                    Coming Soon...
                </Typography>
            </Paper>
        </Container>
    )
}

export default TechnicalBlogSection
