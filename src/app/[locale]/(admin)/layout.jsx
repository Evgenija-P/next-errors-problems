import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../(client)/globals.css";
import MenuAdmin from "@/components/MenuAdmin";

const inter = Inter({ subsets: ["latin"] });

export default async function AdminLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MenuAdmin />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
