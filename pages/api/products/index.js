import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";

const handler = async (req, res) => {
  await dbConnect();

  const products = await Product.find({ category: "console" });

  res.status(200).send({ status: "success", data: products });
};

export default handler;
