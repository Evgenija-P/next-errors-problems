import { Link } from "@/navigation";

const MenuAdmin = ({ locale }) => {
  return (
    <div className="flex gap-x-20 items-center justify-between w-3/5 mx-auto">
      <Link
        href={"/"}
        className="w-20 h-10 outline outline-1 outline-yellow-400 rounded-lg"
        locale={locale}
      >
        Home
      </Link>
      <Link
        href={"/admin/contact"}
        className="w-20 h-10 outline outline-1 outline-yellow-400 rounded-lg"
        locale={locale}
      >
        Contacts
      </Link>
      <Link
        href={"/admin/news"}
        className="w-20 h-10 outline outline-1 outline-yellow-400 rounded-lg"
        locale={locale}
      >
        News
      </Link>
      <Link
        href={"/admin/test"}
        className="w-20 h-10 outline outline-1 outline-yellow-400 rounded-lg"
        locale={locale}
      >
        Test
      </Link>
    </div>
  );
};

export default MenuAdmin;
