import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
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

    const store = {
        login,
        user
    }

    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthWrapper