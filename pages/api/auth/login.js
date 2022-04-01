import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";
import Wrapper, { Exception } from "next-api-wrapper";

export default withIronSessionApiRoute(
  Wrapper({
    POST: async (req) => {
      const { email, password } = req.body;

      await dbConnect();

      const user = await User.findOne({ email });

      if (!user) {
        throw new Exception("User does not exist!", 401);
      }

      if (!user.comparePasswords(password)) {
        throw new Exception("Email or password is incorrect");
      }

      req.session.user = { id: user._id, email: user.email };
      await req.session.save();
      return { isLoggedIn: true };
    },
  }),
  sessionOptions
);
