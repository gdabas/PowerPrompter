// firebase/firebaseOperation.js
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Function to store user information in Firestore
export const createUserInFirestore = async (user) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(
    userRef,
    {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date(),
    },
    { merge: true }
  );
};

// Function to retrieve user information from Firestore
export const getUserData = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    console.log("No such user!");
    return null;
  }
};
