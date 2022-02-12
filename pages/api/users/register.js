import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";
import apiWrapper from "../../../lib/api/api-wrapper";
import Exception from "../../../lib/api/exception";

export default apiWrapper(async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }

    dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Exception("User alreadt exists", 422);
    }
  }
});
