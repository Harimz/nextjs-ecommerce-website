import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  POST: async (req) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Exception("Invalid Inputs", 422);
    }

    dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Exception("User already exists!", 409);
    }

    await User.create({ name, email, password });

    return {
      message: "User created!",
    };
  },
});
