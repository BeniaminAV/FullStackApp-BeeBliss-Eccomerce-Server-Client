import { signOutUser } from "../../utils/firebase/firebase"
import Button from "../button"
import Container from "../container"

const UserSession = () => {
  const SignOut = async () => {
    await signOutUser()
  }

  return (
    <Container>
      <div className="text-center">
        UserSession
        <Button
          label="Sign Out"
          bgColor="bg-red-600 hover:bg-red-500 text-white"
          onClick={SignOut}></Button>
      </div>
    </Container>
  )
}

export default UserSession
