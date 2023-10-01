import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'

export const createUser = async (username: string, email: string, password: string) => {
  const auth = getAuth()

  const userCreds = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error)
  })

  if (userCreds) {
    updateProfile(auth.currentUser!, {
      displayName: username,
    })
  }

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

  onAuthStateChanged(auth, (user) => {
    console.log('state changed!')
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
