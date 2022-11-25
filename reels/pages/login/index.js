import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Insta from '../../images/Insta.png'
import bg1 from '../../images/carousel_slide_1.png'
import bg2 from '../../images/carousel_slide_2.png'
import bg3 from '../../images/carousel_slide_3.png'

function login() {
  return (
    <div className='login-main-page'>
      <div className='car-bg'>
        <div className='car'>
          <Carousel showIndicators={false}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            interval={2000}
            transitionTime={1000}>
            <Image src={bg1} style={{ height: '31rem' }} />
            <Image src={bg2} style={{ height: '31rem' }} />
            <Image src={bg3} style={{ height: '31rem' }} />
          </Carousel>
        </div>
      </div>
      <div className='login'>
        <div className='login-container'>
          <Image src={Insta} className="insta-img" />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" />
          <Button style={{ marginTop: '1rem' }} variant="contained" fullWidth component="label">
            Login
          </Button>
          <p style={{ color: 'blue', fontSize: '0.9rem' }}>Forgot Password?</p>
        </div>
        <div className='bottom-container'>
          Don't have an account? <span style={{ color: 'blue', marginLeft: '5px' }} >Sign up</span>
        </div>
      </div>
    </div>
  )
}

export default login