import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()

  const userCreds = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error)
  })

  return userCreds
}

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth()

  const userCreds = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error)
  })
  return userCreds
}

export const initUser = async () => {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser

  const authChange = await onAuthStateChanged(auth, (user) => {
    if (user) {
      // signin
    } else {
      // signout
    }
    firebaseUser.value = user
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  return result
}
