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
      name: "credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          const res: any = await axios.post("/api/login", {
            username: username,
            password: password,
          });
          if (!res) {
            console.log(`API responded with status`);
          }
          if (res?.data?.status == 404) {
            return res;
          }
          console.log(res, "ini res");
          return { token: res?.data?.data };
        } catch (error) {
          console.error("Error server:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (user && account?.type && account?.provider === "credentials") {
        token.accessToken = user?.token;
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log(token, "ini token");
      session.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/user/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
