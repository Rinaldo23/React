import React from 'react'
import { Avatar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Video() {
    return (
        <div className='video-container'>
            <div className='video-holder'>
                <div className='reel-video'>
                    <div className='video-info'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        <p className='video-name'>Paro - Nej</p>
                    </div>
                    <div className='like-info'>
                        <FavoriteIcon fontSize='large' />
                        <p>10</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video