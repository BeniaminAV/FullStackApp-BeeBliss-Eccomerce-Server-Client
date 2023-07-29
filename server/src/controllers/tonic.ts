import Honeys from "../data/honey"
import Honey from "../model/honey"
import express from "express"

//get all Tonic Product
export const getAllTonic = (req: express.Request, res: express.Response) => {
  try {
    const tonicProduct: Honey[] = Honeys.filter(
      (item) => item.title === "Tonic"
    )

    if (!tonicProduct) {
      return res.sendStatus(404)
    }

    return res.status(200).json(tonicProduct).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

// get Tonic by id
export const getTonicById = (req: express.Request, res: express.Response) => {
  try {
    const id: number = parseInt(req.params.id)
    const tonicProduct: Honey | undefined = Honeys.find((tonic) => {
      return tonic.items.some((item) => item.id === id)
    })

    if (tonicProduct) {
      const product = tonicProduct.items.find((item) => item.id === id)
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
