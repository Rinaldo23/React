import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase'

export const AuthContext = React.createContext()

function AuthWrapper({ children }) {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
        setLoading(false)
    },[])

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function forgetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    const store = {
        login,
        user,
        logout,
        forgetPassword
    }

    return (
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthWrapper