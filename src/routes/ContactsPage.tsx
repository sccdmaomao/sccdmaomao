import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

import ContactForm from '../components/ContactForm'

const ContactsPage: React.FC = () => {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/guohao-yan/', '_balnk')
    }

    return (
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '40px',
            }}
        >
            <ContactForm />
            <IconButton
                color="primary"
                aria-label="linkedIn"
                onClick={handleLinkedInClick}
            >
                <LinkedInIcon sx={{ width: '100px', height: 'auto' }} />
            </IconButton>
        </Paper>
    )
}

export default ContactsPage
