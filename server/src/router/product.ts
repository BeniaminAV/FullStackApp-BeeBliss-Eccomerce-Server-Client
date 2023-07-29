import { getAllWorldHoney, getWorldHoneyById } from "../controllers/worldHoney"
import { getAllLaptisor, getLaptisorById } from "../controllers/laptisor"
import { getAllCandy, getCandyById } from "../controllers/candy"
import { getAllHoney, getHoneyById } from "../controllers/honey"
import { getAllTonic, getTonicById } from "../controllers/tonic"
import { getAllProduct } from "../controllers/product"
import express from "express"

export default (router: express.Router) => {
  //router for all rroduct
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
  //router for get Candy by id
  router.get("/product/candy/:id", getCandyById)

  //router for all world-honey
  router.get("/product/world-honey", getAllWorldHoney)
  //router for get world-honey by id
  router.get("/product/world-honey/:id", getWorldHoneyById)

  //router for all Tonic
  router.get("/product/tonic", getAllTonic)
  //router get all Tonic by id
  router.get("/product/tonic/:id", getTonicById)
}
