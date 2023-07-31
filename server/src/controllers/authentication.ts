import { auth } from "../db/firebase"
import {
  createUserAuthWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  signOutAuth,
} from "../db/users"
import { authentication, random } from "../helpers"
import express from "express"

//sign in with email and password
export const signInAuthWithEmailAndPassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.sendStatus(403)
    }

    await signInUserWithEmailAndPassword(email, password)

    const currentUser = auth.currentUser
    const { uid, displayName } = currentUser

    return res.status(200).json({ email, uid, displayName }).end()
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

    if (password !== confirmPassword) {
      return res.sendStatus(403)
    }

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

// signOut User
export const signOutFromApp = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const currentUser = auth.currentUser

    if (!currentUser) {
      return res.status(401).json({ message: "User not authenticated." })
    }

    const { uid, email, displayName } = currentUser

    await signOutAuth()

    return res.status(200).json({
      message: "User signed out successfully.",
      user: { uid, email, displayName },
    })
  } catch (error) {
    return res.sendStatus(400)
  }
}
