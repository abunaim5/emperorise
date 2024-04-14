import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

// create user with email and password
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// update user profile
const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoUrl
    })
}
const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        console.log(user)

        const authInfo = { user, createUser, setUser, updateUser }

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