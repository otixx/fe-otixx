import axios from "axios";
import { decode, JwtPayload } from "jsonwebtoken";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomJwtPayload extends JwtPayload {
  usernames: string;
  role: string;
  iat: number;
  exp: number;
}

interface TokenProps extends JWT {
  name: string;
  sub: string;
  role: string;
  iat: number;
  exp: number;
  jti: string;
}

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
        return { id: res?.data?.data };
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
    error: "/user/profile",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const key = decode(user.id) as CustomJwtPayload;

        if (key) {
          token.name = key.usernames;
          token.role = key.role;
          token.iat = key.iat;
          token.exp = key.exp;
        }
        // if (trigger === "update" && session) {
        //   token.user = session;
        // }
      }

      return token;
    },
    async session({ session, token }) {
      const customToken = token as TokenProps;

      if (session?.user) {
        const expToDate = new Date(customToken.exp);
        const expToString = expToDate.toUTCString();
        session.expires = expToString;
        session.user = customToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
