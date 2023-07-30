import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

//Auth with googleProvider
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  params: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//CreateDocumentForUser
export const createDocumentForUserAuth = async (
  userAuth: any,
  additionInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const onSnapshot = getDoc(userDocRef)
  console.log(onSnapshot)
  console.log((await onSnapshot).exists())

  if (!(await onSnapshot).exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}

// Create/Sign in With Email and Password
export const createUserAuthWithEmailAndPassword = async (
  userName: string,
  email: string,
  password: string,
  confirmPassword: String
) => {
  if (!userName || !email || !password || !confirmPassword) return

  if (!password || !confirmPassword) {
    throw new Error("Password doesn t  mach")
  }

  await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuth = async () => await signOut(auth)
