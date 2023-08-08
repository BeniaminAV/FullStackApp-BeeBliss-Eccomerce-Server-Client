import { useEffect, useState } from "react"
import Container from "../../container"
import DirectoryProduct from "./directoryProduct"
import axios from "axios"

const TonicProduct = () => {
  const [honey, setHoney] = useState<any[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product/tonic")
      setHoney(response.data)
    } catch (error) {
      throw new Error("Something went wrong")
    }
  }

  return (
    <Container>
      {honey.map((category: any, i) => (
        <div
          key={i}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5">
          {category.items.map((honeyItem: any) => (
            <DirectoryProduct honey={honeyItem} key={honeyItem.id} />
          ))}
        </div>
      ))}
    </Container>
  )
}

export default TonicProduct
