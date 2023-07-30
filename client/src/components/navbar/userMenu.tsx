import LinkRoute from "../linkRoute"
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenuFold,
} from "react-icons/ai"

const UserMenu = () => {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <div className="lg:flex hidden gap-x-5">
        <LinkRoute label={<AiOutlineHeart size={25} />} to="/favorite" />
        <LinkRoute label={<AiOutlineShoppingCart size={25} />} to="/cart" />
      </div>

      <div className="md:flex hidden">
        <LinkRoute label={<AiOutlineUser size={25} />} to="/user" />
      </div>

      <div className="lg:hidden ">
        <LinkRoute label={<AiOutlineMenuFold size={25} />} to="" />
      </div>
    </div>
  )
}

export default UserMenu
