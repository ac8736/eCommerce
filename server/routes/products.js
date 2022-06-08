import express from "express";
import { getProducts, createProduct, deleteProduct } from "../controllers/products.js";
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.delete("/", deleteProduct);

export default productRouter;
