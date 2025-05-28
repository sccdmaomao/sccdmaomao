import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

import ContactForm from '../components/ContactForm'

type Site = 'linkedIn' | 'github'

const ContactsSection = () => {
    const handleSocialClick = (site: Site) => {
        switch (site) {
            case 'linkedIn':
                window.open('https://www.linkedin.com/in/guohao-yan/', '_blank')
                break
            case 'github':
                window.open('https://github.com/sccdmaomao', '_blank')
                break
        }
    }

    return (
        <Paper elevation={0}>
            <Typography variant="h4" marginTop={4}>
                Contact Me
            </Typography>
            <div>
                <IconButton
                    onClick={() => {
                        handleSocialClick('linkedIn')
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    onClick={() => {
                        handleSocialClick('github')
                    }}
                >
                    <GitHubIcon />
                </IconButton>
            </div>
            <ContactForm />
        </Paper>
    )
}

export default ContactsSection
