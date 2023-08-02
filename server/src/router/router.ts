import express from "express"
import honey from "./product"

const router = express.Router()

export default (): express.Router => {
  honey(router)
  return router
}
