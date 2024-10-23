import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(req: NextRequest) {
  const { data: session, status } = useSession();
  // if (session && status === "authenticated") {
  // }
}

export const config = { matcher: ["/profile", "/history"] };
