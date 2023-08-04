import { useState } from "react"
import FormField from "./inputFrom"
import { isEmpty } from "lodash"
import Button from "../../button"
import {
  createUserDocumentForAuth,
  createAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase"
import { toast } from "react-hot-toast"

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const Register = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { displayName, email, password, confirmPassword } = formField

  const resetForm = () => {
    setFormField(defaultFormField)
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()

    if (
      isEmpty(displayName) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(confirmPassword)
    ) {
      toast.error("Complete all fields!")
    }

    if (password !== confirmPassword) {
      toast.error("Password doesn't match!")
      return
    }

    try {
      // @ts-ignore */}
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentForAuth(user, { displayName })
      resetForm()
      toast.success("Resgistred !")
    } catch (error: any) {
      if (error.code === "user already exists") {
        toast.error("User exists")
      }
    }
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      <FormField
        label="User Name"
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormField
        label="Password*"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <FormField
        label="Confirm Password*"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <Button
        label="Register Now"
        bgColor="bg-red-600 hover:bg-red-500 text-white"
      />
    </form>
  )
}

export default Register
