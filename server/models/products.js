import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  owner: String,
  image: [{ type: String }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
