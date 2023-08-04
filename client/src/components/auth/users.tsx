import { useSelector } from "react-redux"
import { signOutUser } from "../../utils/firebase/firebase"
import Button from "../button"
import Container from "../container"
import { selectCurrentUser } from "../../store/user/user.selector"

const UserSession = () => {
  const user = useSelector(selectCurrentUser)

  const userEmail = user ? user.email : null
  const userName = user ? user.displayName : null

  const SignOut = async () => {
    await signOutUser()
  }

  return (
    <Container>
      <div className="relative flex items-center justify-center">
        <div className="w-[400px] md:border p-10 mt-20 rounded-lg">
          <h2 className="text-2xl font-semibold text-center">User Detail</h2>

          <div className="text-md py-5 truncate">
            <span>
              Email: <strong>{userEmail}</strong>
            </span>
            <br />
            <span>
              {userName && (
                <span>
                  UserName: <strong>{userName}</strong>
                </span>
              )}
            </span>
          </div>
          <Button
            label="Sign Out"
            bgColor="bg-red-600 hover:bg-red-500 text-white"
            onClick={SignOut}></Button>
        </div>
      </div>
    </Container>
  )
}

export default UserSession
