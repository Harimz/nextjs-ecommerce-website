import Wrapper, { Exception } from "next-api-wrapper";
import { getSession } from "next-auth/react";
import User from "../../../../models/userModel";
import ReviewEntry from "../../../../models/reviewEntryModel";

export default Wrapper({
  GET: async (req) => {
    const { pid } = req.query;

    const reviews = await ReviewEntry.find({ product: pid });

    return reviews;
  },
});
