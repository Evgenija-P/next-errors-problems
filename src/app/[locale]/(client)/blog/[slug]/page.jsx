import { baseURL } from "@/configs/configUrl";

async function getBlogsBySlug(slug) {
  const res = await fetch(`${baseURL}/blog/${slug}`, { method: "GET", cache: "no-store" });

  return res.json();
}

export default async function CurrentBlogPage({ params }) {
  const post = await getBlogsBySlug(params.slug);
  console.log("post: ", post);
  return (
    <div className="w-full py-10 px-16 mx-auto flex flex-col gap-y-5">
      {post.message === "Note not found" && <h2> Sorry, we don`t find this post</h2>}
      <h2 className="text-3xl text-green-800 text-center font-medium">{post.title}</h2>
      <p className="text-xl text-gray-500">{post.text}</p>
    </div>
  );
}
