import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";
import Wrapper from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    dbConnect();

    const products = await Product.find({});

    return products;
  },
});
