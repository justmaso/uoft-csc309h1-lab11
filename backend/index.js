import express from "express"
import routes from "./routes.js"
import cors from "cors"
const app = express()

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"

console.log('FRONTEND_URL:', FRONTEND_URL)
console.log('All .env variables:', process.env)

const corsOptions = {
    origin: FRONTEND_URL
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("", routes)

export default app
