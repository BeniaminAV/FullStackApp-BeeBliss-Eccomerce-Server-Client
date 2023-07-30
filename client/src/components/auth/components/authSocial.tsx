import axios from "axios"
import Button from "../../button"

const AuthSocial = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault()

    try {
      // Efectuăm cererea către backend pentru a iniția autentificarea cu Google
      const response = await axios.post(
        "http://localhost:5000/auth/credentials",

        {
          withCredentials: true, // Adăugăm această opțiune pentru a trimite cookie-urile necesare autentificării
        }
      )

      // Dacă cererea a fost realizată cu succes, ar trebui să primim datele utilizatorului în response.data
      console.log(response.data) // Aici ai datele utilizatorului, de exemplu, uid și email
    } catch (error: any) {
      // Gestionăm erorile și afișăm mesajul primit de la server (dacă există)
      console.error(error.response.data) // Afișăm mesajul de eroare primit de la server
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
