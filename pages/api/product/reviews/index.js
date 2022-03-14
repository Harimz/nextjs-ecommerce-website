import Wrapper, { Exception } from "next-api-wrapper";
import { getSession } from "next-auth/react";
import User from "../../../../models/userModel";
import ReviewEntry from "../../../../models/reviewEntryModel";

export default Wrapper({
  POST: async (req) => {
    const session = await getSession({ req });

    const { userReview, product } = req.body;

    if (!session) {
      throw new Exception("Not authorized!", 401);
    }

    const user = await User.findOne({ email: session.user.email });

    console.log(user);

    const review = await ReviewEntry.create({
      product,
      userReview,
      user: user._id,
      username: user.name,
    });

    return review;
  },
});
