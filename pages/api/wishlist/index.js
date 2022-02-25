import { getSession } from "next-auth/react";
import Wrapper, { Exception } from "next-api-wrapper";

export default Wrapper({
  GET: async (req) => {
    const session = await getSession({ req });

    if (!session) {
      throw new Exception("Not authorized", 401);
    }
  },
});