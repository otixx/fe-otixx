import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        username: { label: "username", type: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        console.log(username, password);
        try {
          const res: any = await axios
            .post(`/api/login`, {
              username: username,
              password: password,
            })
            .catch((error) => {
              throw error?.response?.data.message;
            });

          return res?.data?.data;
        } catch (error) {
          throw new Error(JSON.stringify(error));
        }
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      console.log(user, "ini user");
      if (user) {
        token.user = user;
      }

      if (trigger === "update" && session) {
        token.user = session.user.user;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.user = token;

      return session;
    },
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60,
    // You can define your own encode/decode functions for signing and encryption
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
