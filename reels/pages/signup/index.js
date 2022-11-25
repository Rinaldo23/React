import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Insta from '../../images/Insta.png'

function signup() {
  return (
    <>
      <div className='signup'>
        <div className='signup-container'>
          <Image src={Insta} className="insta-img" />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" />
          <TextField style={{ marginBottom: '0.8rem' }} fullWidth size="small" margin="dense" id="outlined-basic" label="Full Name" type="text" variant="outlined" />
          <Button variant="outlined" fullWidth component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <p className='signup-policy'>By signing up, you agree to our <span className='signup-policy-span'> Terms , Privacy Policy</span>  and <span className='signup-policy-span'>Cookies Policy .</span></p>
          <Button style={{ marginTop: '1rem' }} variant="contained" fullWidth component="label">
            Sign Up
          </Button>
        </div>
        <div className='bottom-container'>
          Have an account? <span style={{color:'blue',marginLeft:'5px'}} >Log in</span>
        </div>
      </div>
    </>
  )
}

export default signup