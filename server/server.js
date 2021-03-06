import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import productRouter from "./routes/products.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/products", productRouter);
app.use("/users", userRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));
