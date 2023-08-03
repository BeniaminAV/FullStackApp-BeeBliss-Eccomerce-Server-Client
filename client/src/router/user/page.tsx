import { useSelector } from "react-redux"
import Authentication from "../../components/auth/page"
import UserSession from "../../components/auth/users"
import { selectCurrentUser } from "../../store/user/user.selector"

const User = () => {
  const users = useSelector(selectCurrentUser)

  return <>{users ? <UserSession /> : <Authentication />}</>
}

export default User
