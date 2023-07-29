export default interface Honey {
  title: string
  items: {
    id: number
    name: string
    description: string
    price: number
    image: string
  }[]
}
