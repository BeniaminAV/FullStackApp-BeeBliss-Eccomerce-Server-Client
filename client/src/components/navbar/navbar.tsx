import { Outlet } from "react-router-dom"
import Container from "../container"
import Logo from "./logo"
import UserMenu from "./userMenu"
import Links from "./links"

const Navbar = () => {
  return (
    <main>
      <div className="py-4 border-b-[1px] bg-white fixed z-10 w-full">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />

            <Links />

            <UserMenu />
          </div>
        </Container>
      </div>
      <Outlet />
    </main>
  )
}

export default Navbar
