import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { productRouter } from "./routers/productRouter"
import { seedRouter } from "./routers/seedRouter"
import { userRouter } from "./routers/userRouter"
import { orderRouter } from "./routers/orderRouter"

//to connect to env file
dotenv.config()

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/tsmernamazonadb"
mongoose.set("strictQuery", true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb")
  })
  .catch(() => {
    console.log("error mongodb")
  })

const app = express()

app.use(
  cors({
    credentials: true,
    //this allows all requests from frontend
    origin: ["http://localhost:5173"],
  })
)

//to reach to the body of post requests inside the apihandler
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// with this api we reach to backend like that>> http://localhost:4000/api/products to get to products
// app.get("/api/products", (req: Request, res: Response) => {
//   res.json(sampleProducts)
// })

// app.get("/api/products/:slug", (req: Request, res: Response) => {
//   res.json(sampleProducts.find((x) => x.slug === req.params.slug))
// })

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
// >> http://localhost:4000/api/seed
app.use("/api/orders", orderRouter)
app.use("/api/seed", seedRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
