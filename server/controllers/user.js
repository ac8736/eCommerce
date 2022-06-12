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

export async function loginUser(request, response) {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      response.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      response.status(401).json({ message: "Incorrect password" });
    }
    console.log("200 status: ", email);
    response.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}
