import Honeys from "../data/honey"
import express from "express"

export const getAllProduct = (req: express.Request, res: express.Response) => {
  try {
    return res.json(Honeys)
  } catch (error) {
    return res.sendStatus(400)
  }
}



