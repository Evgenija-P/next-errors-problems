import { Link } from "@/navigation";
import ButtonLang from "./ButtonLang";
import { useTranslations } from "next-intl";
import Search from "./Search";

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
    {
      name: "blog",
      link: "/blog",
    },
  ];
  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto">
      {items.map(el => (
        <Link
          href={el.link}
          className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg flex items-center justify-center py-3 px-4"
          locale={locale}
          key={el.link}
        >
          {el.name}
        </Link>
      ))}
      <Search />

      <ButtonLang />
    </div>
  );
};

export default MenuClient;
