const loading = () => {
  return (
    <div className="max-w-[75ch] mx-auto mt-10 px-5 sm:px-8 md:px-10 lg:px-0">
      <div className="animate-pulse">
        <section>
          <div className="h-2 bg-slate-300 rounded w-3/4" />
          <div className="flex items-center justify-center sm:h-96 bg-gray-200 w-full object-cover mt-8 rounded-lg shadow-md">
            <svg
              className="w-10 h-10 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="mt-4 flex flex-col justify-between sm:flex-row">
            <p className="text-gray-500 text-sm">
              <div className="h-2 bg-slate-300 rounded w-2/3" />
            </p>
          </div>
        </section>
        <hr className="my-5" />
        <section>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-2 bg-slate-300 rounded mb-4" />
          ))}
        </section>
      </div>
    </div>
  );
};

export default loading;
