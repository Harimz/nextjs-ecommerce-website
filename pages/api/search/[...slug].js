import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const { slug } = req.query;

    console.log(slug);

    return "success";
  },
});
