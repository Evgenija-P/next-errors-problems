"use client";

import { baseURL } from "@/configs/configUrl";
import Link from "next/link";
import { useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });
  const router = useRouter();

  const slug = slugify(formData.title, {
    lower: true, // перевести в нижній регістр
    strict: true, // видалити неприпустимі символи
    locale: "uk", // локаль для української мови
  });

  const handleSubmit = async event => {
    event.preventDefault();

    // Обрізка пробілів у тайтлі
    const trimmedTitle = formData.title.trim();

    // Створення slug з очищеного тайтлу
    const slugifiedTitle = slugify(trimmedTitle, {
      lower: true,
      strict: true,
      locale: "uk",
    });

    // Тіло запиту
    const blogData = {
      title: trimmedTitle,
      text: formData.text,
      slug: slugifiedTitle,
    };

    try {
      const response = await fetch(`${baseURL}/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      // Перевірка відповіді
      if (response.ok) {
        const data = await response.json();
        console.log("Blog created successfully:", data);
        router.push("/blog");
        router.refresh();
      } else {
        console.error("Failed to create blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Очищення форми
    setFormData({ title: "", text: "" });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <form className="w-9/12 flex flex-col gap-y-10 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="" className="flex gap-x-4 items-center">
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-9/12 pl-2 outline outline-1 outline-emerald-600 rounded-md"
          />
        </label>
        <div className="flex justify-start gap-x-5 ">
          <p className="text-green-600">Slug: </p>

          <p className="w-9/12 flex items-center justify-start gap-x-5 border-b border-emerald-600">
            {slug}
          </p>
        </div>

        <label htmlFor="" className="flex gap-x-4 items-center">
          Text
          <textarea
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="w-9/12 pl-2 outline outline-1 outline-emerald-600 rounded-md"
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <Link
        className="w-fit px-3 py-5 border border-emerald-500 rounded-md mx-auto mt-5 block"
        href={"/blogs"}
      >
        Back
      </Link>
    </div>
  );
};

export default BlogForm;
