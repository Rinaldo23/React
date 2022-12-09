import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Insta from '../../images/Insta.png'
import { AuthContext } from '../../Context/auth';
import { useRouter } from 'next/router';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Link from 'next/link';
import { doc, setDoc } from 'firebase/firestore';

function signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signUp, user } = useContext(AuthContext)
  const router = useRouter()

  let handleClick = async () => {
    try {
      setLoading(true)
      setError('')
      const user = await signUp(email, password)
      console.log("Signed Up")

      const storageRef = ref(storage, `${user.uid}/Profile`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);

            let userObj = {
              name: name,
              email: email,
              uid: user.user.uid,
              photoURL: downloadURL,
              posts: []
            }

            await setDoc(doc(db, "users", user.user.uid), userObj);

          });
        }
      );
    }
    catch (error) {
      console.log(error)
      setError(error.message)
      setTimeout(() => {
        setError('')
      }, 2000);
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <>
      <div className='signup'>
        <div className='signup-container'>
          <Image src={Insta} className="insta-img" />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth size="small" margin="dense" id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextField style={{ marginBottom: '0.8rem' }} fullWidth size="small" margin="dense" id="outlined-basic" label="Full Name" type="text" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          <Button variant="outlined" fullWidth component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
          </Button>
          <p className='signup-policy'>By signing up, you agree to our <span className='signup-policy-span'> Terms , Privacy Policy</span>  and <span className='signup-policy-span'>Cookies Policy .</span></p>
          <Button style={{ marginTop: '1rem' }} variant="contained" fullWidth component="label" onClick={handleClick} disabled={loading}>
            Sign Up
          </Button>
        </div>
        <div className='bottom-container'>
          Have an account? <Link href={"/login"}><span style={{ color: 'blue', marginLeft: '5px' }} >Log in</span></Link>
        </div>
      </div>
    </>
  )
}

export default signup