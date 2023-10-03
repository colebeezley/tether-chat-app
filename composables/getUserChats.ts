import { doc, getDoc, serverTimestamp, updateDoc, setDoc, addDoc, collection, DocumentData } from 'firebase/firestore'

export const getUserChats = async (username: string): Promise<DocumentData> => {
  try {
    const { $firestore }: any = useNuxtApp()
    const docRef = doc($firestore, 'chats', username)

    let docSnap = await getDoc(docRef)

    if (docSnap.data() === undefined) {
      await setDoc(docRef, {})
      docSnap = await getDoc(docRef)
    }

    let docData: DocumentData = docSnap.data()!
    return docSnap.data()!
  } catch (err) {
    console.log('error: ', err)

    return ['']
  }
}

export const getUserChatsWithTarget = async (username: string, target: string): Promise<[String]> => {
  try {
    const { $firestore }: any = useNuxtApp()
    const docRef = doc($firestore, 'chats', username)

    let docSnap = await getDoc(docRef)

    if (docSnap.data() === undefined) {
      await setDoc(docRef, {})
      docSnap = await getDoc(docRef)
    }

    let docData: DocumentData = docSnap.data()!
    let previousMessages = docData[target] ? docData[target] : []

    return previousMessages
  } catch (err) {
    console.log('error: ', err)

    return ['']
  }
}
