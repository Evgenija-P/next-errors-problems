import Counter from "@/components/Counter";
import { useTranslations } from "next-intl";

export default function ProjectPage() {
  const t = useTranslations();
  const content = [
    t(`Counter_Text.0`),
    t(`Counter_Text.1`),
    t(`Counter_Text.2`),
    t(`Counter_Text.3`),
    t(`Counter_Text.4`),
  ];

  return (
    <div className="">
      <h1> This is ProjectPage Page</h1>
      <Counter content={content} />
    </div>
  );
}
