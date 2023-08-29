import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { UserAuth } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyDqiCDJNd5MaDGUt37xIQq1-o1BI0uTG4A",
  authDomain: "crwn-clothing-db-2f814.firebaseapp.com",
  projectId: "crwn-clothing-db-2f814",
  storageBucket: "crwn-clothing-db-2f814.appspot.com",
  messagingSenderId: "309322989473",
  appId: "1:309322989473:web:01f3b79952200fa65a15e0",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: UserAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
