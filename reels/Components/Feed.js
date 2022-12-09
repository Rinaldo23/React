import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../Context/auth'
import { db } from '../firebase'
import NavBar from './NavBar'
import Upload from './Upload'
import Video from './Video'

function Feed() {

  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    // console.log(user.uid)
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
      setUserData(doc.data())
    });

    // Pata nahi kyun likha hai
    // return () => {
    //   unsub();
    // }

  }, [user])

  return (
    <div>
      <NavBar userData={userData}/>
      <Upload userData={userData}/>
      <Video />
    </div>
  )
}

export default Feed
