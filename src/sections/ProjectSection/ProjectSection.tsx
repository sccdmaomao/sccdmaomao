import { Paper, Typography } from '@mui/material'
import React from 'react'

import Container from '../../components/Container'
import ProjectGrid from './components/ProjectGrid'
import { projectSections } from './config/projectSections'

const ProjectSection: React.FC = () => {
    return (
        <Container>
            <Paper elevation={0} sx={{ paddingBottom: '40px' }}>
                <Typography 
                    variant="h3" 
                    component="h3" 
                    gutterBottom 
                    sx={{ textAlign: 'center', marginTop: 4, marginBottom: 6 }}
                >
                    Projects
                </Typography>
                {projectSections.map((section) => (
                    <ProjectGrid
                        key={section.title}
                        title={section.title}
                        projects={section.projects}
                    />
                ))}
            </Paper>
        </Container>
    )
}

export default ProjectSection
