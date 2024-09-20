import { NextIntlClientProvider } from "next-intl";
import { getServerSession } from "next-auth";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../(client)/globals.css";
import MenuAdmin from "@/components/MenuAdmin";
import { authConfig } from "@/configs/auth";

const inter = Inter({ subsets: ["latin"] });

export default async function AdminLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  const session = await getServerSession(authConfig);
  console.log(session);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MenuAdmin user={session.user} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
