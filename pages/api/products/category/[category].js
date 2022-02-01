import dbConnect from "../../../../lib/db-connect";
import Product from "../../../../models/productModel";

const handler = async (req, res) => {
  const { category } = req.query;

  await dbConnect();

  try {
    const products = await Product.find({ category });

    res.status(200).send({ status: "success", data: products });
  } catch (error) {
    res.status(404).send({ status: "error", message: "Something went wrong" });
  }
};

export default handler;
