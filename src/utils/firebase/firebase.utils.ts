import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import {
  CategoriesMap,
  Product,
} from "../../store/categories/category.reducer";

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

interface ObjectToAdd {
  title: string;
  items: Product[];
}

export const addCollectionAndDocuments = async (
  colletionKey: string,
  objectsToAdd: ObjectToAdd[],
) => {
  const collectionRef = collection(db, colletionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(
      collectionRef,
      object.title.toLowerCase(),
    );
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// export interface CategoryMap {
//   [key: string]: Product[];
// }

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce(
    (acc: CategoriesMap, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {},
  );

  return categoryMap;
};

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
}

interface AdditionalInformation {}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation = {},
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void,
) => onAuthStateChanged(auth, callback);
