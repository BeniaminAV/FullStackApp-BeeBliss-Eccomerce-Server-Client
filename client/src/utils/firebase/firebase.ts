import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbqJky4ShssPDP53E8BdKdsaf7kzHJTsA",
  authDomain: "fullstackapp-1cef1.firebaseapp.com",
  projectId: "fullstackapp-1cef1",
  storageBucket: "fullstackapp-1cef1.appspot.com",
  messagingSenderId: "923383912606",
  appId: "1:923383912606:web:75ec0832a21c15caebc38f",
}

//initialize firebase
export const firebase = initializeApp(firebaseConfig)

//auth googleProvider
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  params: "select_account",
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//create DOC
const db = getFirestore()

export const createDocumentForAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const onSnapshot = await getDoc(userDocRef)

  if (!onSnapshot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userDocRef
}

//create login with email and password
export const createUserAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

//login with email and password
export const signInAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

//sign Out user
export const signOutUser = async () => await signOut(auth)

// control user
export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback)
