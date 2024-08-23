import NewsPage from "@/components/NewsPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_NewsAdmin"),
  };
}
export default function NewsAdminPage() {
  return (
    <div className="">
      <NewsPage />
    </div>
  );
}
