import LoadingButton from '@mui/lab/LoadingButton'
import {
    Alert,
    Box,
    Button,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [toastOpen, setToastOpen] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const apiKey = process.env.REACT_APP_AWS_API_GATEWAY_KEY
    const fromEmail = process.env.REACT_APP_TO_EMAIL_ADDRESS
    const toEmail = process.env.REACT_APP_FROM_EMAIL_ADDRESS

    const handleToastClose = () => {
        setToastOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        // handle form submission logic here
        fetch(
            'https://ysk0a8a3ze.execute-api.ca-central-1.amazonaws.com/prod/my-resource',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    'x-api-key': apiKey!,
                },
                body: JSON.stringify({
                    to: toEmail,
                    from: fromEmail,
                    subject: `Message From ${name} - Sccdmaomao`,
                    body:
                        `sender's email: ${email} \nSent with following message:\n` +
                        message,
                }),
            }
        )
            .then(async (response) => {
                await response.json()
            })
            .then((data) => {
                setIsLoading(false)
                setToastOpen(true)
                setSendSuccess(true)
                setMessage('')
            })
            .catch((error) => {
                setIsLoading(false)
                setToastOpen(true)
                setSendSuccess(false)
                console.error(error)
            })
    }

    return (
        <section>
            <Typography variant="h6">Send me a message!</Typography>

            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '> *': { margin: '5px 0 !important' },
                    }}
                >
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        required
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(event) => {
                            setMessage(event.target.value)
                        }}
                        required
                    />
                    <div>
                        {isLoading ? (
                            <LoadingButton
                                loading
                                variant="outlined"
                                sx={{ float: 'right' }}
                            >
                                Submit
                            </LoadingButton>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ float: 'right' }}
                            >
                                Submit
                            </Button>
                        )}
                    </div>
                </Box>
            </form>
            <Snackbar
                open={toastOpen}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                onClose={handleToastClose}
            >
                {
                    <Alert
                        onClose={handleToastClose}
                        severity={sendSuccess ? 'success' : 'error'}
                        sx={{ width: '100%' }}
                    >
                        {sendSuccess
                            ? 'Message sent!'
                            : 'Failed to send message.'}
                    </Alert>
                }
            </Snackbar>
        </section>
    )
}

export default ContactForm
