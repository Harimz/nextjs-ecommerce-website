import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";
import Wrapper, { Exception } from "next-api-wrapper";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";

export default withIronSessionApiRoute(
  Wrapper({
    POST: async (req) => {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw new Exception("Invalid Inputs!", 422);
      }

      await dbConnect();

      const userExists = await User.findOne({ email });

      if (userExists) {
        throw new Exception("User already exists!", 409);
      }

      const user = await User.create({ name, email, password });

      req.session.user = { id: user._id, email: user.email, name: user.name };
      await req.session.save();

      return { isLoggedIn: true };
    },
  }),
  sessionOptions
);
