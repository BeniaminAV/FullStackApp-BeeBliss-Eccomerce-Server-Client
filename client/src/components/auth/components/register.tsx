import { useState } from "react"
import FormField from "./inputFrom"
import { isEmpty } from "lodash"
import { toast } from "react-hot-toast"
import Button from "../../button"
import {
  createDocumentForAuth,
  createUserAuthWithEmailAndPassword,
} from "../../../utils/firebase/firebase"

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    }

    try {
      const user = await createUserAuthWithEmailAndPassword(email, password)

      await createDocumentForAuth(user, { displayName })
      toast.success("Resgistred !")
      resetForm()
    } catch (error: any) {
      if (error.code === "user already exists") {
        toast.error("User exists")
      }
    }
  }

  const handleChange = (e: any) => {
    const { value, name } = e.target

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
        onClick={onSubmit}
        bgColor="bg-red-600 hover:bg-red-500 text-white"
      />
    </form>
  )
}

export default Register
