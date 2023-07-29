import { authentication, random } from "../helpers"
import {
  createUserAuthWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../db/users"
import express from "express"

//sign in with email and password
export const signInAuthWithEmailAndPassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body

    const existingUser = await signInUserWithEmailAndPassword(email, password)

    return res.status(200).json(existingUser).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

//create user with username, email, password, confirmPassword
export const createAuthWithEmailAndPassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userName, email, password, confirmPassword } = req.body

    if (!userName || !email || !password || !confirmPassword) {
      return res.sendStatus(403)
    }

    const salt = random()

    const hashedPassword = authentication(salt, password, confirmPassword)

    await createUserAuthWithEmailAndPassword(
      userName,
      email,
      password,
      hashedPassword
    )
    return res.status(200).json({ userName, email, salt }).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

// login with google Credentials
export const loginWithGoogle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userCredential = await signInWithGooglePopup()

    const { uid, email } = userCredential.user

    return res.status(200).json({ uid, email }).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}
