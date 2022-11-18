import firebaseInitialization from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import React, { useEffect, useState } from 'react';
firebaseInitialization();
const Googleprovider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
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
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user).then(token => {
                    // console.log(token)
                    localStorage.setItem('IDtoken', token);
                })
                setUser(user);
            }
            else {
                setUser({})
            }
        }
        )
    }, [])
    return {
        user,
        signInWithGoogle,
        logout,
        error
    }
        ;
};

export default useFirebase;