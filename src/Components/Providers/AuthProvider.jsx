import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../../Firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    const handleSignUp = (email,password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }


    const handleSignIn = (email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }



    const authInfo = {
      handleSignUp,
      handleSignIn,
      user,
      loading,
      
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;