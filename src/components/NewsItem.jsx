import Link from "next/link";

const NewsItem = ({ item }) => {
  return (
    <article className="w-full h-fit py-4 px-3 rounded-xl border border-green-300 flex flex-col items-center justify-center gap-y-5">
      <p className="text-xl text-green-800 italic font-bold">{item.name}</p>
      <p className="text-lg text-gray-500">{item.text}</p>
      <div className="w-full flex items-center justify-between gap-4">
        <Link className="w-1/2 rounded-xl bg-slate-400 p-4" href={`/admin/news/${item.id}`}>
          Edit
        </Link>
        <button className="w-1/2 rounded-xl bg-red-400 p-4">Delete</button>
      </div>
    </article>
  );
};

export default NewsItem;
