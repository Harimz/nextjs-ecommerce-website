import Wrapper, { Exception } from "next-api-wrapper";
import WishListEntry from "../../../models/wishListEntry";
import User from "../../../models/userModel";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";

export default withIronSessionApiRoute(
  Wrapper({
    POST: async (req) => {
      const session = req.session.user;
      const { name, product, image, price } = req.body;

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      const user = await User.findOne({ email: session.email });

      const entryExists = await WishListEntry.findOne({
        product,
        user: user._id,
      });

      if (entryExists) {
        throw new Exception("Product is already in your wishlist!", 409);
      }

      const newProduct = {
        productName: name,
        product,
        image,
        price,
        user: user._id,
      };

      const newEntry = await WishListEntry.create(newProduct);

      if (newEntry) {
        return { message: "Product has been added to your wishlist!" };
      } else {
        throw new Error(500, "Something went wrong");
      }
    },
    GET: async (req) => {
      const session = req.session.user;

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      const userWishList = await WishListEntry.find({ user: session.id });

      return userWishList;
    },
    DELETE: async (req) => {
      const session = req.session.user;
      const params = req.query;

      console.log(params);

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      // await WishListEntry.findOneAndDelete({ user: session.id, product, product:  })
    },
  }),
  sessionOptions
);
