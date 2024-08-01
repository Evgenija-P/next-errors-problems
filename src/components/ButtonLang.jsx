"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

const ButtonLang = ({ locale }) => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2);

  return (
    <div className="flex gap-x-1">
      <Link
        className={`text-red uppercase ${locale === "uk" ? "border-b border-b-red" : ""}`}
        href={`/${path}`}
        locale="uk"
      >
        ua
      </Link>
      <Link
        className={`text-red uppercase ${locale === "en" ? "border-b border-b-red" : ""}`}
        href={`/${path}`}
        locale="en"
      >
        en
      </Link>
    </div>
  );
};

export default ButtonLang;
