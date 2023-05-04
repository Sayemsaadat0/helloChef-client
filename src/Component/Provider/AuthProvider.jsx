import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import firebaseApp from '../../Utilities/Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(firebaseApp)


const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loader,setLoader] = useState(true) 

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()

const createUser = (email, password) =>{
    setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    };
    const gitSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, gitProvider)
    }

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
        googleSignIn,
        gitSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;