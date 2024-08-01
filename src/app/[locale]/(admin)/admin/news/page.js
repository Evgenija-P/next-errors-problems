import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  console.log(locale);
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_NewsAdmin"),
  };
}
export default function NewsAdminPage() {
  return (
    <div className="">
      <h1> This is NewsAdminPage Page</h1>
    </div>
  );
}
