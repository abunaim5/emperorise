import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign out user
    const logOut = () =>{
        return signOut(auth);
    };

    // login user
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    // update user profile
    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const authInfo = { user, setUser, createUser,logInUser, logOut, updateUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;