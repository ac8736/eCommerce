import Product from "../models/products.js";

// route to get all products
export async function getProducts(request, response) {
  try {
    const products = await Product.find();
    console.log(products[0].image);
    response.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}

// route to create a new product for display
export async function createProduct(request, response) {
  const newProduct = new Product(request.body);
  try {
    await newProduct.save();
    response.status(200).json(request.body);
  } catch (error) {
    console.log(error);
  }
}
