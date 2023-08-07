import { isEmpty } from "lodash"
import { useState } from "react"
import { toast } from "react-hot-toast"
import FormField from "./inputFrom"
import Button from "../../button"
import { signInAuthWithEmailAndPassword } from "../../../utils/firebase/firebase"
import Credential from "./credential"

const defaultFormField = {
  email: "",
  password: "",
}

const Login = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { email, password } = formField

  const resetForm = () => {
    setFormField(defaultFormField)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (isEmpty(email) || isEmpty(password)) {
      toast.error("Complete all fields!")
    }

    try {
      await signInAuthWithEmailAndPassword(email, password)

      toast.success("You logged in!")
      resetForm()
    } catch (error) {
      if (email !== password) {
        toast.error("Email or Password incorect!")
      }
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormField
          label="Your Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormField
          label="Your Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          label="Login"
          onClick={onSubmit}
          bgColor="bg-green-600 hover:bg-green-500 text-white"
        />
      </form>
      <Credential />
    </>
  )
}

export default Login
