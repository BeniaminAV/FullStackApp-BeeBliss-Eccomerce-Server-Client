import { useCallback, useState } from "react"
import Container from "../container"
import Register from "./components/register"
import Login from "./components/login"

const VARIANT = ["LOGIN", "REGISTER"]

const Authentication = () => {
  const [variant, setVariant] = useState("LOGIN")

  const setVar = useCallback(() => {
    if (variant === "LOGIN") {
      return setVariant("REGISTER")
    } else {
      return setVariant("LOGIN")
    }
  }, [variant])

  return (
    <div className="w-full flex items-center justify-center">
      <Container>
        <div className="w-[400px] md:border p-10 mt-20 rounded-lg">
          {variant === "LOGIN" ? (
            <>
              <h2 className="text-center text-2xl font-bold uppercase pb-5">
                Log In
              </h2>
              <Login />
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold uppercase pb-5">
                Register Now
              </h2>
              <Register />
            </>
          )}

          <div onClick={setVar}>
            {variant === "LOGIN" ? (
              <p className="text-center">
                You don t have account?
                <strong className="cursor-pointer hover:text-neutral-500">
                  <br />
                  Register now
                </strong>
              </p>
            ) : (
              <p className="text-center">
                You have account?
                <strong className="cursor-pointer hover:text-neutral-500">
                  <br />
                  Login
                </strong>
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Authentication
