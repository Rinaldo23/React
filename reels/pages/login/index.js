import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Insta from '../../images/Insta.png'
import bg1 from '../../images/carousel_slide_1.png'
import bg2 from '../../images/carousel_slide_2.png'
import bg3 from '../../images/carousel_slide_3.png'
import { useState } from 'react';
import { useContext} from 'react';
import { AuthContext } from '../../Context/auth';
import {useRouter} from 'next/router'
import Link from 'next/link';

function login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login, user} = useContext(AuthContext)
  const router = useRouter()

  let handleClick = async () => {
    try {
      setLoading(true)
      setError('')
      await login(email, password)
      console.log("Logged In")
    } catch (error) {
      console.log(error)
      setError(error.message)
      setTimeout(() => {
        setError('')
      }, 2000);
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(user){
      router.push('/')
    }
  },[user])

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
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          {
            error != '' && <p style={{ color: 'red', margin: '0.5rem' }}>{error}</p>
          }

          <Button style={{ marginTop: '0.5rem' }} variant="contained" fullWidth component="label" onClick={handleClick} disabled={loading} >
            Login
          </Button>
          <Link href={"/forgetpassword"}><p style={{ color: 'blue', fontSize: '0.9rem' }}>Forgot Password?</p></Link>
        </div>
        <div className='bottom-container'>
          Don't have an account? <Link href={"/signup"}><span style={{ color: 'blue', marginLeft: '5px' }} >Sign up</span></Link>
        </div>
      </div>
    </div>
  )
}

export default login