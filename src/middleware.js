import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  prefixDefault: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(uk|en)/:path*"],
};
