import React from 'react'
import { Button } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
    return (
        <div className='upload-container'>
            <Button className='upload-btn' startIcon={<MovieIcon />} variant="outlined" fullWidth component="label">
                Upload
                <input hidden accept="video/*" multiple type="file" />
            </Button>
            <Box className='linear-loader'>
                <LinearProgress variant="determinate" value={70} />
            </Box>
        </div>
    )
}

export default Upload