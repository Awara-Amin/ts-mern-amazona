import cors from "cors"
import express, { Request, Response } from "express"
import { sampleProducts } from "./data"

const app = express()

app.use(
  cors({
    credentials: true,
    //this allows all requests from frontend
    origin: ["http://localhost:5173"],
  })
)
// with this api we reach to backend like that>> http://localhost:4000/api/products to get to products
app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProducts)
})

app.get("/api/products/:slug", (req: Request, res: Response) => {
  res.json(sampleProducts.find((x) => x.slug === req.params.slug))
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
