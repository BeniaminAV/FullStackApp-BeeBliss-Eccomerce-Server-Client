import { useState } from "react"
import axios from "axios"
import FormField from "./inputFrom"
import { isEmpty } from "lodash"
import { toast } from "react-hot-toast"

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
      if (email) {
        toast.error("The email is already in use.")
      }
    }
  }

  const handleChange = (e: any) => {
    const { value, name } = e.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <div>
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
        <button type="submit">Register now!</button>
      </form>
    </div>
  )
}

export default Register
