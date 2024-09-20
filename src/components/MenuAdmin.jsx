import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LogOutButton from "./LogOutButton";

const MenuAdmin = ({ locale, user }) => {
  const t = useTranslations();
  const items = [
    {
      name: t(`MenuAdmin.0`),
      link: "/",
    },
    // {
    //   name: t(`MenuAdmin.1`),
    //   link: "/admin/contact",
    // },
    // {
    //   name: t(`MenuAdmin.2`),
    //   link: "/admin/news",
    // },
    {
      name: t(`MenuAdmin.3`),
      link: "/admin/test",
    },
  ];

  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto mt-2 pt-4">
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
      <div className="flex items-center justify-between gap-x-4">
        <p className="text-red-950">Hello, {user.email}</p>
        <LogOutButton user={user} />
      </div>
    </div>
  );
};

export default MenuAdmin;
