import Honeys from "../data/honey"
import express from "express"
import Honey from "../model/honey"

//get all Tonic
export const getAllWorldHoney = (
  req: express.Request,
  res: express.Response
) => {
  try {
    const allWorldHoney: Honey[] = Honeys.filter(
      (honey) => honey.title === "World Honey"
    )

    if (!allWorldHoney) {
      return res.sendStatus(404)
    }

    return res.status(200).json(allWorldHoney).end()
  } catch (error) {
    return res.sendStatus(400)
  }
}

//get all Tonic by id
export const getWorldHoneyById = (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id: number = parseInt(req.params.id)
    const wordHoney: Honey | undefined = Honeys.find((world) => {
      return world.items.some((item) => item.id === id)
    })

    if (wordHoney) {
      const product = wordHoney.items.find((item) => item.id === id)
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
