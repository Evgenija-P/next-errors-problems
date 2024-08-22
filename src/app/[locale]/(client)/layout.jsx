import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuClient from "@/components/MenuClient";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <MenuClient />
            {children}
          </NextIntlClientProvider>{" "}
        </Providers>
      </body>
    </html>
  );
}
