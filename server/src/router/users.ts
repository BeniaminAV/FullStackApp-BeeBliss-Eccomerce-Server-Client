import {
  createAuthWithEmailAndPassword,
  loginWithGoogle,
  signInAuthWithEmailAndPassword,
} from "../controllers/authentication"
import express from "express"

export default (router: express.Router) => {
  router.post("/auth/register", createAuthWithEmailAndPassword)
  router.post("/auth/login", signInAuthWithEmailAndPassword)
  router.post("/auth/credentials", loginWithGoogle)
}
