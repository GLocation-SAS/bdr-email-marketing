import createMiddleware from "next-intl/middleware";
import { routing } from "./routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except internal Next.js paths and static files
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/((?!_next|api|uikit|email-marketing|campanas|favicon\\.ico|.*\\..*).*)",
  ],
};
