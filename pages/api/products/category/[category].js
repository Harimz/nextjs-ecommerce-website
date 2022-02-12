import dbConnect from "../../../../lib/db-connect";
import Product from "../../../../models/productModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const { category } = req.query;

    dbConnect();

    const products = await Product.find({ category });

    if (!products) {
      throw new Exception("Products not found", 404);
    }

    return products;
  },
});
