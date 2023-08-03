import { toast } from "react-hot-toast"
import { signInWithGooglePopup } from "../../../utils/firebase/firebase"
import Button from "../../button"

const Credential = () => {
  const signIn = async () => {
    try {
      await signInWithGooglePopup()
      toast.success("Resgistred !")
    } catch (error) {
      toast.error("Something went wrong!")
      throw new Error("Something went wrong!")
    }
  }

  return (
    <Button
      onClick={signIn}
      label="Sign in With Google"
      bgColor="bg-red-600 hover:bg-red-500 text-white"
    />
  )
}

export default Credential
