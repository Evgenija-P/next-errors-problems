import BlogPageComponents from "@/components/BlogPageComponents";
import { baseURL } from "@/configs/configUrl";

async function getAllBlogs() {
  const res = await fetch(`${baseURL}/blog`, { method: "GET", cache: "no-store" });

  return res.json();
}

export default async function BlogPage() {
  const posts = await getAllBlogs();

  return (
    <div className="w-full py-10 px-16 mx-auto">
      <h1 className="text-center mb-20"> This is Blog Page</h1>
      <BlogPageComponents posts={posts} />
    </div>
  );
}
