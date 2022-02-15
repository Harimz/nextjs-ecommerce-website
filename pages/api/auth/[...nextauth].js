import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found!");
        }

        if (await user.comparePasswords(credentials.password)) {
          return { email: user.email };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
});
