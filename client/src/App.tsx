import { Route, Routes } from "react-router-dom"
import {
  Candy,
  Cart,
  Favorite,
  Home,
  Honey,
  Laptisor,
  Navigation,
  Products,
  Tonic,
  User,
  WorldHoney,
} from "./router/index"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCurrentUser } from "./store/user/user.action"
import {
  createUserDocumentForAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentForAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Products />} />
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
