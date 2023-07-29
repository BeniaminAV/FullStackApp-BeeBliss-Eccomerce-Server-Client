import express from "express"
import Honey from "../model/honey"
import Honeys from "../data/honey"

// function for get all Candy
export const getAllCandy = (req: express.Request, res: express.Response) => {
  try {
    const allCandy: Honey[] = Honeys.filter((honey) => honey.title === "Candy")

    if (!allCandy) {
      return res.sendStatus(404)
    }

    return res.status(200).json(allCandy).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

//function for get Candy by id
export const getCandyById = (req: express.Request, res: express.Response) => {
  try {
    const id: number = parseInt(req.params.id)
    const candyById: Honey | undefined = Honeys.find((honey) => {
      return honey.items.some((item) => item.id === id)
    })

    if (candyById) {
      const product = candyById.items.find((item) => item.id === id)
      if (product) {
        return res.json(product).end()
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
