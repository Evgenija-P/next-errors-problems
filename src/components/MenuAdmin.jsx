import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const MenuAdmin = ({ locale }) => {
  const t = useTranslations();
  const items = [
    {
      name: t(`MenuAdmin.0`),
      link: "/",
    },
    {
      name: t(`MenuAdmin.1`),
      link: "/admin/contact",
    },
    {
      name: t(`MenuAdmin.2`),
      link: "/admin/news",
    },
    {
      name: t(`MenuAdmin.3`),
      link: "/admin/test",
    },
  ];

  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto">
      {items.map(el => (
        <Link
          href={el.link}
          className="w-20 h-10 outline outline-1 outline-yellow-400 rounded-lg flex items-center justify-center"
          locale={locale}
          key={el.link}
        >
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuAdmin;
