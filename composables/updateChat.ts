import { doc, getDoc, serverTimestamp, updateDoc, setDoc, addDoc, collection } from 'firebase/firestore'

export const updateUserChat = async (username: string, target: string, message: string) => {
  try {
    const { $firestore }: any = useNuxtApp()
    const docRef = doc($firestore, 'chats', username)

    let docSnap = await getDoc(docRef)

    if (docSnap.data() === undefined) {
      console.log('setting default')
      await setDoc(docRef, {})
      docSnap = await getDoc(docRef)
    }

    let docData: any = docSnap.data()
    let previousMessages = docData[target] ? docData[target] : []

    previousMessages.unshift(message)
    docData[target] = previousMessages

    await setDoc(docRef, docData)
  } catch (err) {
    console.log('error: ', err)

    return false
  }
  return true
}
