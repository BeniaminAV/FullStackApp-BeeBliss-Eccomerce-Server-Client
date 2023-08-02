import { useSelector } from "react-redux"
import Authentication from "../../components/auth/page"
import { selectCurrentUser } from "../../store/user/user.select"
import UserSession from "../../components/auth/users"

const User = () => {
  const user = useSelector(selectCurrentUser)

  return <>{user ? <UserSession /> : <Authentication />}</>
}

export default User
