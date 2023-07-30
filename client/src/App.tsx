import { Route, Routes } from "react-router-dom"
import {
  Candy,
  Cart,
  Favorite,
  Home,
  Honey,
  Laptisor,
  Navigation,
  Product,
  Tonic,
  User,
  WorldHoney,
} from "./router/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/laptisor" element={<Laptisor />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/world-honey" element={<WorldHoney />} />
        <Route path="/tonic" element={<Tonic />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  )
}

export default App
