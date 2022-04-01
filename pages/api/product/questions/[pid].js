import Wrapper, { Exception } from "next-api-wrapper";
import QuestionEntry from "../../../../models/questionEntryModel";

export default Wrapper({
  GET: async (req) => {
    const { pid } = req.query;

    const questions = await QuestionEntry.find({ product: pid });

    return questions;
  },
});
