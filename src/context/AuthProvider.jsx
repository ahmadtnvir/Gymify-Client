import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign In User
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Sign In User
  const googleSigninUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update User
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // Sign Out User
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signinUser,
    googleSigninUser,
    signoutUser,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
