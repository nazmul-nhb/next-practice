import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside

// Redirect
// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL("/exit", request.url));
// }

// Rewrite
export function middleware(request: NextRequest) {
	return NextResponse.rewrite(new URL("/users", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/dashboard/:path*",
};
