import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

import ContactForm from '../components/ContactForm'

type Site = 'linkedIn' | 'github'
const siteToLink: Record<Site, string> = {
    linkedIn: `https://www.linkedin.com/in/guohao-yan/`,
    github: `https://github.com/sccdmaomao`,
}

const ContactsPage: React.FC = () => {
    const handleIconClick = (site: Site) => {
        window.open(siteToLink[site], '_balnk')
    }

    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '40px',
                '> section': {
                    margin: '10px 0',
                },
            }}
        >
            <section>
                <Typography variant="h6">Online Profiles</Typography>
                <IconButton
                    color="primary"
                    aria-label="linkedIn"
                    onClick={() => handleIconClick('linkedIn')}
                >
                    <LinkedInIcon sx={{ width: '100px', height: 'auto' }} />
                </IconButton>
                <IconButton
                    color="primary"
                    aria-label="linkedIn"
                    onClick={() => handleIconClick('github')}
                >
                    <GitHubIcon sx={{ width: '100px', height: 'auto' }} />
                </IconButton>
            </section>
            <ContactForm />
        </Paper>
    )
}

export default ContactsPage
