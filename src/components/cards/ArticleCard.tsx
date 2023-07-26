import Image from "next/image";

const ArticleCard = () => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border-black border-[1px]">
      <Image
        alt="Article Image"
        className="h-56 w-full object-cover"
        width={450}
        height={450}
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>
        <a>
          <h3 className="mt-0.5 text-lg text-gray-900">How to make a good pasta alfredo</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
          temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
          voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
        </p>
        <span className="block text-xs text-gray-500 mt-3">Alex Cuadra</span>
      </div>
    </article>
  );
};

export default ArticleCard;
