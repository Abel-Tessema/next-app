// import {NextRequest, NextResponse} from "next/server";
// import middleware from "next-auth/middleware";

export {default} from 'next-auth/middleware'

// export default middleware;

// export const middleware = (request: NextRequest) => {
//   return NextResponse.redirect(new URL('/new-page', request.url));

// }
export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameter
  matcher: ['/dashboard/:path*']
}
