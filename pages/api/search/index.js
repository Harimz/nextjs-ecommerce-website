import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const { searchQuery, category, maxPrice, brand } = req.query;

    await dbConnect();

    const filters = {};

    if (searchQuery) filters.tags = searchQuery;
    if (category) filters.category = category;
    if (maxPrice) {
      const products = await Product.find({});

      const filteredProducts = products
        .filter((product) => product.price < maxPrice)
        .filter((product) => product.category === category);

      return filteredProducts;
    }
    if (brand) filters.tags = brand;

    const products = await Product.find(filters);

    return products;
  },
});
