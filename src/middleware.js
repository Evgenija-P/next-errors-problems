import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";

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
      // authorized: () => console.log("start"),
      // authorized: ({ token }) => token != null,
      authorized: async ({ req }) => {
        console.log("start");

        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        console.log(token);
        if (token) {
          console.log("User is authorized");
          return true; // Якщо токен є, користувач авторизований
        } else {
          console.log("User is not authorized");
          return false; // Якщо токену немає, користувач не авторизований
        }
      },
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
