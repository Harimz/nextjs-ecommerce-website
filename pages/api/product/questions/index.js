import Wrapper, { Exception } from "next-api-wrapper";
import User from "../../../../models/userModel";
import QuestionEntry from "../../../../models/questionEntryModel";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../../lib/session";

export default withIronSessionApiRoute(
  Wrapper({
    POST: async (req) => {
      const { userQuestion, product } = req.body;
      const session = req.session.user;

      console.log(session);

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      const user = await User.findOne({ email: session.email });

      const question = await QuestionEntry.create({
        product,
        userQuestion,
        user: user._id,
        username: user.name,
      });

      return question;
    },
  }),
  sessionOptions
);
