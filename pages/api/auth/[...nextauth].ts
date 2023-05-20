import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import type { schema } from "../../login";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    Credentials({
      type: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        try {
          const { email, password } = credentials as schema;

          const user = await prisma!.users.findUnique({
            where: {
              email: email,
            },
          });

          if (user === null) {
            return null;
          }
          if (user.password !== password) {
            return null;
          }

          return {
            id: user!.id.toString(),
            email: user!.email,
          };
        } catch (error) {
          console.error(error);
          throw new Error("Email or password is not correct");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
