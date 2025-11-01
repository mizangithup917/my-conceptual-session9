import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { 
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {auth} from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) =>{
    return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
  };    
const sendEmailVerificationFunc = () => {
  return sendEmailVerification(auth.currentUser);
}

  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailFunc = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const signInWithGithubFunc = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const signoutUserFunc = () => {
    return signOut(auth);
  };
  const sendPassResetEmailFunc = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signInWithGithubFunc,
    signoutUserFunc,
    sendPassResetEmailFunc,
    sendEmailVerificationFunc,
    updateProfileFunc,
  };

  return<AuthContext value={authInfo}>{children}</AuthContext>

};

export default AuthProvider;
