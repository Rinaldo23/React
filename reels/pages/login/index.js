import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Insta from '../../images/Insta.png'

function login() {
  return (
    <div className='login-main-page'>
      <div className='carousel-background'>
        <Carousel>
        </Carousel>
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