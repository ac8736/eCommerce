import Product from "../models/products.js";

// route to get all products
export async function getProducts(request, response) {
  try {
    const products = await Product.find();
    if (products) {
      response.status(200).json(products);
    } else {
      response.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.log(error);
  }
}

// route to create a new product for display
export async function createProduct(request, response) {
  console.log(request.body.image);
  const newProduct = new Product(request.body);
  try {
    await newProduct.save();
    response.status(200).json(request.body);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(request, response) {
  try {
    await Product.findOneAndDelete(request.body);
    response.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
  }
}
