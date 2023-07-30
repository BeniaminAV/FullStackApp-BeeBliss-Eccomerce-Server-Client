import { useNavigate } from "react-router-dom"
import { LogoImg } from "../../assets"

const Logo = () => {
  const navigate = useNavigate()

  return (
    <img
      src={LogoImg}
      alt="Logo"
      className="w-[50px] h-[50px] cursor-pointer"
      onClick={() => navigate("/")}
    />
  )
}

export default Logo
