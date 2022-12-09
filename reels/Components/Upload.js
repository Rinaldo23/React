import React from 'react'
import { Button } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

function Upload({ userData }) {

    const [loading, setLoading] = useState(false) //=> to check if video is loading or not, (uploading)
    const [error, setError] = useState('') //=> initially koi error nahi hai 
    const [progress, setProgress] = useState(0) //=> progressBar 

    const handleUpload = (e) => {
        const file = e.target.files[0]

        if (file == null) {
            setError("Please select a file")
            setTimeout(() => {
                setError('')
            }, 3000)
        }

        if ((file.size / (1024 * 1024)) > 50) {
            setError("Please select a smaller file")
            setTimeout(() => {
                setError('')
            }, 3000)
        }
        const uid = uuidv4();
        setLoading(true)

        //Upload wala kaam
        const storageRef = ref(storage, `${userData.uid}/posts/${uid}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(prog)
                console.log('Upload is ' + prog + '% done');

            },
            (error) => {
                // Handle unsuccessful uploads
                console.log(error)
                setError(error.message)
                setTimeout(() => {
                    setError('')
                }, 3000)
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);

                    let userObj = {
                        likes: [],
                        postId: uid,
                        postURL: downloadURL,
                        profileName: userData.name,
                        profileURL: userData.photoURL,
                        uid: userData.uid,
                        timestamp: serverTimestamp(),
                        size : (file.size/(1024*1024)).toFixed(2) + " MB"
                    }
                    console.log(userObj)

                    await setDoc(doc(db, "posts", uid), userObj);

                    // Atomically add a new region to the "regions" array field.
                    await updateDoc(doc(db, "users", userData.uid), {
                        posts: arrayUnion(uid)
                    });

                    console.log("Post added")
                    setLoading(false)

                });
            }
        )
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {
                // if error is there show the alert msg or else diaplay the upload button
                error != '' ?
                    <Alert severity="error">{error}</Alert> :
                    <Button className='upload-btn' startIcon={<MovieIcon />} variant="outlined" fullWidth component="label" style={{
                        width: '15vw',
                        marginTop: '0.5rem'
                    }}>
                        Upload
                        <input hidden accept="video/*" multiple type="file" onChange={handleUpload} />
                    </Button>
            }
            {
                // Agar video load/upload ho rahi hai toh he progressBar show karna hai 
                loading &&
                <Box className='linear-loader'>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
            }

        </div >
    )
}

export default Upload