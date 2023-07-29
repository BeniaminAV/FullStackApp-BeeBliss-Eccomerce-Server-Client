import Honey from "../model/honey"
import Honeys from "../data/honey"
import express from "express"

//function for get all Honey
export const getAllHoney = (req: express.Request, res: express.Response) => {
  try {
    const allHoney: Honey[] = Honeys.filter((honey) => honey.title === "Honey")

    if (!allHoney) {
      return res.sendStatus(404)
    }

    return res.status(200).json(allHoney).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

//function for get honey by id
export const getHoneyById = (req: express.Request, res: express.Response) => {
  try {
    const id: number = parseInt(req.params.id)
    const honeyById: Honey | undefined = Honeys.find((honey) => {
      return honey.items.some((item) => item.id === id)
    })

    if (honeyById) {
      const product = honeyById.items.find((item) => item.id === id)
      if (product) {
        return res.json(product)
      } else {
        return res.sendStatus(404)
      }
    } else {
      return res.sendStatus(404)
    }
  } catch (error) {
    return res.sendStatus(400)
  }
}
