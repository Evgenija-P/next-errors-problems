import EditorComponent from "@/components/Editor";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  console.log(locale);
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_TestAdmin"),
  };
}
export default function TestAdminPage() {
  return (
    <div className="">
      <h1> This is Editor Page</h1>

      <EditorComponent />
    </div>
  );
}
