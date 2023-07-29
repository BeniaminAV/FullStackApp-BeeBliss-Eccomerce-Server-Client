import Honey from "../model/honey"
import Honeys from "../data/honey"
import express from "express"

//function for get all Laptisor
export const getAllLaptisor = (req: express.Request, res: express.Response) => {
  try {
    const laptisorProducts: Honey[] = Honeys.filter(
      (honey) => honey.title === "Laptisor"
    )

    return res.json(laptisorProducts)
  } catch (error) {
    return res.sendStatus(400)
  }
}

//function for get Laptisor by id
export const getLaptisorById = (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id: number = parseInt(req.params.id)
    const laptisorById: Honey | undefined = Honeys.find((honey) => {
      return honey.items.some((item) => item.id === id)
    })

    if (laptisorById) {
      const product = laptisorById.items.find((item) => item.id === id)
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
