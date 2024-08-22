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
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/signin",
    },
  }
);

// export default function middleware(req) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join("|")}))?(${publicPages
//       .flatMap(p => (p === "/" ? ["", "/"] : p))
//       .join("|")})/?$`,
//     "i"
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     return authMiddleware(req);
//   }
// }

export default function middleware(req) {
  // Define a regex pattern for private URLs
  const excludePattern = "^(/(" + locales.join("|") + "))?/admin/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    // Apply Next-Intl middleware for public pages
    return intlMiddleware(req);
  } else {
    // Apply Next-Auth middleware for private pages
    return authMiddleware(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
