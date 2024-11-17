// firebase/auth.js
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { createUserInFirestore } from "./firebaseOperation"; // Importing from firebaseOperation.js
import useStore from "../store/userStore"; // Import the Zustand store

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  const setUser = useStore.getState().setUser; // Access setUser from Zustand
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Store user information in Firestore
    await createUserInFirestore(user);

    setUser(user);

    return user;
  } catch (error) {
    console.error("Error logging in with Google: ", error);
    throw error;
  }
};

export const logout = async () => {
  const resetStore = useStore.getState().resetStore; // Access resetStore from Zustand
  try {
    await signOut(auth);
    resetStore();
  } catch (error) {
    console.error("Error logging out: ", error);
    throw error;
  }
};

// Export the auth state change listener
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
