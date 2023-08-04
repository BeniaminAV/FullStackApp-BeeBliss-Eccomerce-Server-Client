import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles/globals.css"
import { BrowserRouter } from "react-router-dom"
import ToastProvider from "./components/toast.tsx"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ToastProvider />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
