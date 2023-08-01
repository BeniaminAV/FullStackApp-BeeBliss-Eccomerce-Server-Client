import { isEmpty } from "lodash"
import { useState } from "react"
import { toast } from "react-hot-toast"
import axios from "axios"
import FormField from "./inputFrom"
import Button from "../../button"

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
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        },
        config
      )
      
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
    </>
  )
}

export default Login
