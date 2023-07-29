import { getAllWorldHoney, getWorldHoneyById } from "../controllers/worldHoney"
import { getAllCandy, getCandyById } from "../controllers/candy"
import { getAllHoney, getHoneyById } from "../controllers/honey"
import { getAllLaptisor, getLaptisorById } from "../controllers/laptisor"
import { getAllProduct } from "../controllers/product"
import express from "express"

export default (router: express.Router) => {
  router.get("/product", getAllProduct)
  router.get("/product/laptisor", getAllLaptisor)
  router.get("/product/laptisor/:id", getLaptisorById)

  router.get("/product/honey", getAllHoney)
  router.get("/product/honey/:id", getHoneyById)

  router.get("/product/candy", getAllCandy)
  router.get("/product/candy/:id", getCandyById)

  router.get("/product/world-honey", getAllWorldHoney)
  router.get("/product/world-honey/:id", getWorldHoneyById)
}
