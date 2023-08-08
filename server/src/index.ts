import express from "express"
import http from "http"
import cors from "cors"
import compression from "compression"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import router from "./router/router"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))

app.use(express.json())

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

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
