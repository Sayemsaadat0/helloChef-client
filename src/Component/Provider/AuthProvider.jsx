import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import firebaseApp from '../../Utilities/Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(firebaseApp)


const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loader,setLoader] = useState(true) 
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) =>{
    setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

  const logout = () =>{
    setLoader(true)
    return signOut(auth);
  } 

useEffect(()=>{
const unsub = onAuthStateChanged(auth,loggedUser =>{
    // console.log('sdjughfjkdhfdhf', loggedUser)
    setUser(loggedUser)
    setLoader(false)
})
return () =>{
    unsub()
}

},[])

 
    const authInfo = {
        user,
        createUser,
        signinUser,
        logout,
        loader,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;