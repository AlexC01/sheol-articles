import ArticleList from "@/components/articles/ArticleList";

interface IParams {
  query?: string;
}

const page = ({ params }: { params: IParams }) => {
  return (
    <section>
      <div className="px-3 md:px-0 container mx-auto">
        <h4 className="text-2xl font-bold mt-5">
          Search with: <span className="font-normal italic">{params.query}</span>
        </h4>
      </div>
      <ArticleList
        query={params.query}
        titleEmpty="Your search did not found any article"
        subtitleEmpty="Try with a different one"
      />
    </section>
  );
};

export default page;
