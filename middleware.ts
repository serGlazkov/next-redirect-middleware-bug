import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const pathname = req.nextUrl.pathname;
  // if (pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/account", req.url));
  // }

  return NextResponse.next();
}
