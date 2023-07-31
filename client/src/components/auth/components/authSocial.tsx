import axios from "axios"
import Button from "../../button"

const AuthSocial = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault()

    try {
  
      const response = await axios.post(
        "http://localhost:5000/auth/credentials",

        {
          withCredentials: true, 
        }
      )

      console.log(response.data) 
    } catch (error: any) {
      console.error(error.response.data) 
      throw new Error("Something went wrong")
    }
  }

  return (
    <Button
      label="Sign in with Google"
      onClick={onSubmit}
      bgColor="bg-white text-black hover:bg-neutral-200"
    />
  )
}

export default AuthSocial
