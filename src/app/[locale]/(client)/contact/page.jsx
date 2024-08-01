import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_Contact"),
  };
}

export default function ContactPage() {
  return (
    <div className="">
      <h1> This is ContactPage Page</h1>
    </div>
  );
}
