import BlogForm from "@/components/BlogForm";

export default async function CreateBlogPage() {
  return (
    <div className="w-full py-10 px-16 mx-auto">
      <h1 className="text-center mb-20"> Create new Post</h1>
      <BlogForm />
    </div>
  );
}
