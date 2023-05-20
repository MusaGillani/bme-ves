import { withAuth } from "next-auth/middleware";

export const config = {
  matcher: [`/((?!_next/static|_next/image|favicon.ico).*)`],
};

export default withAuth(function middleware() {}, {
  pages: {
    signIn: "/login",
  },
});
