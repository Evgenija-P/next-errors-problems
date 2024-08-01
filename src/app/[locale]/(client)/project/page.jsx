import Counter from "@/components/Counter";
import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  console.log(locale);
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_Projects"),
  };
}

export default function ProjectPage() {
  const t = useTranslations();
  const content = [
    t(`Counter_Text.0`),
    t(`Counter_Text.1`),
    t(`Counter_Text.2`),
    t(`Counter_Text.3`),
  ];

  return (
    <div className="">
      <h1> This is ProjectPage Page</h1>
      <Counter content={content} />
    </div>
  );
}
