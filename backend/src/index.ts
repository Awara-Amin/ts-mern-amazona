import express, { Request, Response } from "express"
import { sampleProducts } from "./data"

const app = express()
// with this api we reach to backend like that>> http://localhost:4000/api/products to get to products
app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProducts)
})
const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
