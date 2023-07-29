import express from "express"
import http from "http"
import cors from "cors"
import compression from "compression"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import router from "./router/router"

const app = express()

app.use(express.json())

app.use(
  cors({
    credentials: true,
  })
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(5000, () =>
  console.log(`Server running on port http://localhost:5000`)
)

app.get("/", (req, res) => {
  res.send("Server is live")
})

app.use("/", router())
