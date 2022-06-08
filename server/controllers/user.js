import User from "../models/user.js";

// route to get all products
export async function getUsers(request, response) {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
}

// route to create a new product for display
export async function createUser(request, response) {
  const newUser = new User(request.body);
  try {
    await newUser.save();
    response.status(200).json(request.body);
  } catch (error) {
    console.log(error);
  }
}
