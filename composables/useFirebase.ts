import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
  const auth = getAuth();

  const userCreds = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    console.log(error);
  });

  return userCreds;
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();

  const userCreds = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    console.log(error);
  });

  return userCreds;
};

export const initUser = async () => {
  const auth = getAuth();

  const authChange = await onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
};
