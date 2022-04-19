import Wrapper, { Exception } from "next-api-wrapper";
import WishListEntry from "../../../models/wishListEntry";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";

export default withIronSessionApiRoute(
  Wrapper({
    DELETE: async (req) => {
      const session = req.session.user;
      const { productId } = req.query;

      if (!session) {
        throw new Exception("Not authorized!", 401);
      }

      await WishListEntry.findOneAndDelete({
        user: session.id,
        product: productId,
      });

      return "success";
    },
  }),
  sessionOptions
);
