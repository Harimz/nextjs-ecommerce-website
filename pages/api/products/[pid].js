import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const { pid } = req.query;

    dbConnect();

    const product = await Product.findById(pid);

    if (!product) {
      throw new Exception(404, "Product not found");
    }

    return product;
  },
});
