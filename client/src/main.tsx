import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles/globals.css"
import { BrowserRouter } from "react-router-dom"
import ToastProvider from "./components/toast.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
