export default function NewsIDPage({ params: { id } }) {
  return (
    <div className="w-9/12 mx-auto py-20">
      <p className="text-center text-red-600 text-2xl">{id}</p>
    </div>
  );
}
