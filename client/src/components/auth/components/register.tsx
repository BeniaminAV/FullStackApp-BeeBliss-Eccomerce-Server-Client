import { useState } from "react"
import axios from "axios"
import FormField from "./inputFrom"
import { isEmpty } from "lodash"
import { toast } from "react-hot-toast"
import Button from "../../button"

const defaultFormField = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const Register = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { userName, email, password, confirmPassword } = formField

  const resetForm = () => {
    setFormField(defaultFormField)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (
      isEmpty(userName) ||
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
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:5000/auth/register",
        {
          userName,
          email,
          password,
          confirmPassword,
        },
        config
      )
      toast.success("Resgistred !")
      resetForm()
    } catch (error: any) {
      console.log(error)
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
        name="userName"
        value={userName}
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
        bgColor="bg-red-600 hover:bg-red-500"
      />
    </form>
  )
}

export default Register
