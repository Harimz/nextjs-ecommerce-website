import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    console.log(req.body);

    if (!name || !email || !password) {
      res.status(422).send({ message: "Invalid Inputs" });
    }

    await dbConnect();

    try {
      const user = await User.create({ name, email, password });

      res.status(201).send({ message: "User created!" });
    } catch (error) {
      res.status(422);
      res.send({ message: error.message });
    }
  }
};

export default handler;
