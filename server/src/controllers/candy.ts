import express from "express"
import Honey from "../model/honey"
import Honeys from "../data/honey"

export const getAllCandy = (req: express.Request, res: express.Response) => {
  try {
    const candyProduct: Honey[] = Honeys.filter(
      (candy) => candy.title === "Candy"
    )

    if (!candyProduct) {
      return res.sendStatus(404)
    }

    return res.status(200).json(candyProduct).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

export const getCandyById = (req: express.Request, res: express.Response) => {
  try {
    const id: number = parseInt(req.params.id)
    const candyById: Honey | undefined = Honeys.find((candy) => {
      return candy.items.some((item) => item.id === id)
    })

    if (candyById) {
      const product = candyById.items.find((item) => item.id === id)
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
