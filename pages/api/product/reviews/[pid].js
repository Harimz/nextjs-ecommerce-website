import Wrapper, { Exception } from "next-api-wrapper";
import ReviewEntry from "../../../../models/reviewEntryModel";

export default Wrapper({
  GET: async (req) => {
    const { pid } = req.query;

    const reviews = await ReviewEntry.find({ product: pid });

    return reviews;
  },
});
