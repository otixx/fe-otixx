import axios from "axios";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const res: any = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/login`,
          {
            username,
            password,
          },
        );
        if (res?.data?.status !== 200) {
          throw Error(JSON.stringify(res?.data));
        }
        return res?.data?.data;
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
    error: "/user/profile",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }

      if (trigger === "update" && session) {
        token.user = session.user.user;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
