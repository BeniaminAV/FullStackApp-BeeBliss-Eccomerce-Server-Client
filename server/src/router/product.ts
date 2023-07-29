import { getAllCandy, getCandyById } from "../controllers/candy"
import { getAllHoney, getHoneyById } from "../controllers/honey"
import { getAllLaptisor, getLaptisorById } from "../controllers/laptisor"
import { getAllProduct } from "../controllers/product"
import express from "express"

export default (router: express.Router) => {
  //Router for All Product
  router.get("/product", getAllProduct)
  //router for all Laptisor
  router.get("/product/laptisor", getAllLaptisor)
  //router for get by id Laptisor
  router.get("/product/laptisor/:id", getLaptisorById)

  //router for all honey
  router.get("/product/honey", getAllHoney)
  //router for get honey by id
  router.get("/product/honey/:id", getHoneyById)

  //router for get all Candy
  router.get("/product/candy", getAllCandy)
  //router for gey Candy by id
  router.get("/product/candy/:id", getCandyById)
}
