import Wrapper, { Exception } from "next-api-wrapper";
import User from "../../../../models/userModel";
import ReviewEntry from "../../../../models/reviewEntryModel";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../../lib/session";

export default withIronSessionApiRoute(
  Wrapper({
    POST: async (req) => {
      const session = req.session.user;

      const { userReview, product } = req.body;

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      const user = await User.findOne({ email: session.email });

      const review = await ReviewEntry.create({
        product,
        userReview,
        user: user._id,
        username: user.name,
      });

      return review;
    },
  }),
  sessionOptions
);
