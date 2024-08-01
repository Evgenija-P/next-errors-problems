import { Link } from "@/navigation";
import ButtonLang from "./ButtonLang";

const MenuClient = ({ locale }) => {
  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto">
      <Link
        href={"/about"}
        className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg"
        locale={locale}
      >
        About
      </Link>
      <Link
        href={"/contact"}
        className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg"
        locale={locale}
      >
        Contact
      </Link>
      <Link
        href={"/project"}
        className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg"
        locale={locale}
      >
        Project
      </Link>
      <Link
        href={"/admin"}
        className="w-20 h-10 outline outline-1 outline-lime-400 rounded-lg"
        locale={locale}
      >
        Admin
      </Link>
      <ButtonLang />
    </div>
  );
};

export default MenuClient;
