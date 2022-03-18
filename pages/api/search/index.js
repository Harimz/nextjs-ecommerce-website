import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const { searchQuery, category, price } = req.query;

    await dbConnect();

    const filters = {};

    if (searchQuery) filters.tags = searchQuery;
    if (category) filters.category = category;
    if (price) filters.price = price;

    const products = await Product.find(filters);

    return products;
  },
});
