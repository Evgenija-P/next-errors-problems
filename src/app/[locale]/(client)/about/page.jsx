import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  console.log(locale);
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata_About"),
  };
}
export default function AboutPage() {
  return (
    <div className="">
      <h1> This is AboutPage Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis rerum delectus ea
        illo. Mollitia sit voluptas obcaecati dolores laborum maiores? Cupiditate, harum. Sit ea
        nesciunt at ut quisquam eius.
      </p>
    </div>
  );
}
