import express from "express";
import { getProducts, createProduct } from "../controllers/products.js";
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
//router.patch("/:id");

export default productRouter;
