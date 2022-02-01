import dbConnect from "../../../lib/db-connect";
import Product from "../../../models/productModel";

const handler = async (req, res) => {
  const { pid } = req.query;
  await dbConnect();

  try {
    const product = await Product.findById(pid);

    res.status(200).send({ status: "success", data: product });
  } catch (error) {
    res.status(400).send({ status: "error", message: error.message });
  }
};

export default handler;
