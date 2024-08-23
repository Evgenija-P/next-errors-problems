import NewsItem from "./NewsItem";

const NewsPage = ({ news }) => {
  if (!news)
    return (
      <h1 className="w-full text-center text-red-400 mt-10">
        Sorry, we have no news at the moment.
      </h1>
    );

  return (
    <section className="w-9/12 mx-auto">
      <div className="grid grid-cols-3 gap-10 w-full mx-auto">
        {mews && news.map(el => <NewsItem key={el.name} item={el} />)}
      </div>
    </section>
  );
};

export default NewsPage;
