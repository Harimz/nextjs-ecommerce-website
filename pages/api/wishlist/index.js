import { getSession } from "next-auth/react";
import Wrapper, { Exception } from "next-api-wrapper";
import WishListEntry from "../../../models/wishListEntry";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req) => {
    const session = await getSession({ req });
    const { product, image, price } = req.body;

    if (!session) {
      throw new Exception("Not authorized!", 401);
    }

    const user = await User.findOne({ email: session.user.email });

    const entryExists = await WishListEntry.findOne({
      product,
      user: user._id,
    });

    if (entryExists) {
      throw new Exception("Product is already in your wishlist!", 409);
    }

    const newEntry = await WishListEntry.create({
      product,
      image,
      price,
      user: user._id,
    });

    if (newEntry) {
      return { message: "Product has been added to your wishlist!" };
    } else {
      throw new Error(500, "Something went wrong");
    }
  },
});
