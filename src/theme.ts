import { createTheme } from '@mui/material'

import { BACKGROUND_COLORS } from './colors'

const theme = createTheme({
    palette: {
        background: {
            paper: BACKGROUND_COLORS.PAGE,
        },
    },
})

export default theme
