import Wrapper, { Exception } from "next-api-wrapper";
import { getSession } from "next-auth/react";
import User from "../../../../models/userModel";
import QuestionEntry from "../../../../models/questionEntryModel";

export default Wrapper({
  POST: async (req) => {
    const session = await getSession({ req });
    const { userQuestion, product } = req.body;

    if (!session) {
      throw new Exception("Not authorized!", 401);
    }

    const user = await User.findOne({ email: session.user.email });

    const question = await QuestionEntry.create({
      product,
      userQuestion,
      user: user._id,
    });

    return question;
  },
});
