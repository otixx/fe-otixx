import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(req: NextRequest) {
  // Logika middleware yang tidak menggunakan hook React
}

export const config = { matcher: ["/profile", "/history"] };
