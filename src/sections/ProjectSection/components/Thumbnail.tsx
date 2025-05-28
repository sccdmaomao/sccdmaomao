import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const ResponsiveCard = styled(Card)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const ResponsiveCardActionArea = styled(CardActionArea)`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export interface ThumbnailProps {
    title: string
    imageUrl: string
    desc: string
    href: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    title,
    imageUrl,
    desc,
    href,
}) => {
    const handleClick = () => {
        window.open(href, '_blank')
    }

    return (
        <ResponsiveCard>
            <ResponsiveCardActionArea onClick={handleClick}>
                <CardMedia
                    sx={{
                        height: 0,
                        paddingTop: '56.25%', // 16:9 aspect ratio
                        borderBottom: '1px solid black',
                        borderRadius: '5px',
                    }}
                    title={title}
                    image={imageUrl}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
            </ResponsiveCardActionArea>
        </ResponsiveCard>
    )
}

export default Thumbnail
