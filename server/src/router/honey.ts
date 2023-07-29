import {
  getAllHoney,
  getAllLaptisor,
  getLaptisorById,
} from "../controllers/honey"
import express from "express"

export default (router: express.Router) => {
  router.get("/product", getAllHoney)
  router.get("/product/laptisor", getAllLaptisor)
  router.get("/product/laptisor/:id", getLaptisorById)
}
