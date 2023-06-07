import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googloprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass, name, url) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass, name, url);
    }
    const saveProfile = (name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }
    const signIn = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup( auth, googloprovider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
            setUser(currentUser);
            console.log('Current User: ', currentUser)
            setLoading(false)
          });
          return() =>{
            return unsubscribe();
          }
    } , [])
    const authInfo = {
        user,
        loading,
        createUser,
        saveProfile,
        signIn,
        signInWithGoogle,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;