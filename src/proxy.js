import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const { pathName } = request.nextUrl();
  if(!pathName.startsWith("/api/feedback")){
    NextResponse.json({
        status:400
    })
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/api/:path*",
};
