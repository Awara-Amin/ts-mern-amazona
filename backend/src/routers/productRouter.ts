import express from "express"
import asyncHandler from "express-async-handler"
import { ProductModel } from "../models/productModel"

export const productRouter = express.Router()
// the final adress should be like that in index.js to get to here>>>> /api/prodcuts >> // wa kaka> http://localhost:4000/api/prodcuts
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
  })
)
// End

// /api/slug/tshirt >> like that http://localhost:4000/api/products/slug/nike-slim-shirt
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: "Product Not Found" })
    }
  })
)
// End
