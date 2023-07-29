import express from "express"
import users from "./users"
import honey from "./honey"

const router = express.Router()

export default (): express.Router => {
  users(router)
  honey(router)
  return router
}
