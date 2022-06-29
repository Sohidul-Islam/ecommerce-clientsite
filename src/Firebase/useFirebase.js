import React from 'react';
import firebaseInitialization from './Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
const useFirebase = () => {
    firebaseInitialization();
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const signInWithGoogle = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
    }
    return (
        {
            user,
            signInWithGoogle,
            error
        }
    );
};

export default useFirebase;