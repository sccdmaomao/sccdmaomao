import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import React from 'react'

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
    const handleClick = (href) => {
        window.open(href, '_blank')
    }
    return (
        <Card sx={{ width: 320 }}>
            <CardActionArea onClick={() => handleClick(href)}>
                <CardMedia
                    sx={{
                        height: 180,
                        borderBottom: '1px solid black',
                        borderRadius: '5px',
                    }}
                    title={title}
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography>{desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Thumbnail
