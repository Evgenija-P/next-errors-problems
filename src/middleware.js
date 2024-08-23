import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";

const publicPages = ["/", "/about", "/contact", "/poshuk-po-saytu", "/project", "/signin"];
const locales = ["uk", "en"];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "uk",
  prefixDefault: true,
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: () => console.log("start"),
      // authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/signin",
    },
  }
);

export default function middleware(req) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap(p => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
