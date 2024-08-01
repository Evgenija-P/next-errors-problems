import { Link } from "@/navigation";
import ButtonLang from "./ButtonLang";
import { useTranslations } from "next-intl";

const MenuClient = ({ locale }) => {
  const t = useTranslations();
  const items = [
    {
      name: t(`MenuClient.0`),
      link: "/about",
    },
    {
      name: t(`MenuClient.1`),
      link: "/contact",
    },
    {
      name: t(`MenuClient.2`),
      link: "/project",
    },
    {
      name: t(`MenuClient.3`),
      link: "/admin",
    },
  ];
  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto">
      {items.map(el => (
        <Link
          href={el.link}
          className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg flex items-center justify-center"
          locale={locale}
          key={el.link}
        >
          {el.name}
        </Link>
      ))}

      <ButtonLang />
    </div>
  );
};

export default MenuClient;
