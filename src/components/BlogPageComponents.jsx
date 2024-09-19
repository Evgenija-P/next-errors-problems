"use client";

import { useState } from "react";

import Link from "next/link";

const BlogPageComponents = ({ posts }) => {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);

  return (
    <div className="flex flex-col gap-y-5">
      <Link
        className="w-fit p-3 border border-emerald-500 rounded-md ml-auto"
        href={"/blog/create"}
      >
        Add blog
      </Link>
      <h1 className="text-center mb-20">This is All blogs</h1>
      {posts && (
        <section className="grid grid-cols-3 gap-3">
          {posts.map(el => (
            <article
              key={el._id}
              className="flex flex-col gap-y-5 borer border-[2px] border-yellow-400 rounded-md px-5 py-3 justify-between"
            >
              <h2 className="text-blue-500">{el.title}</h2>
              <p className="text-center text-gray-700">{el.text}</p>
              <Link
                href={`/blog/${el.slug}`}
                className="w-fit py-3 px-4 rounded-md bg-orange-300 text-orange-600 mx-auto"
              >
                See more
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};

export default BlogPageComponents;
