import React, { useState } from "react";
import Layout from "../components/Layout";
import useFetchData from "../hooks/useFetchData";
import Loading from "../components/Loading";

const Media = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");
  const [limit, setLimit] = useState(6);

  console.log(data, loading, error)
  const handleLoadMore = () => {
    setLimit((prev) => prev + 6);
  };

  return (
    <Layout>
      <section className="dark:bg-[#002B36] dark:text-gray-200">
        <div className="container mx-auto p-4">
          <div className="my-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Media</h2>
              <p>Informasi seputar padi UMKM</p>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row gap-8 flex-wrap">
              {loading ? (
                <div className="my-16">
                  <Loading />
                </div>
              ) : (
                data?.slice(0, limit).map((item, index) => (
                  <div
                    key={item.id + index}
                    className="max-w-[333px] rounded-lg flex flex-wrap flex-col gap-4"
                  >
                    <div className="flex gap-4 items-center justify-center w-full bg-primary rounded-lg">
                      <img src={`https://picsum.photos/id/${item.id}/333/300`} alt="image" className="object-fit rounded-lg" />
                    </div>
                    <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                    <p className="text-sm font-semibold mt-auto">{item.body}</p>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-center">
              <button
                className={`py-2 px-4 my-4 rounded-lg ${limit >= data?.length ? "bg-gray-300 cursor-not-allowed" : "bg-secondary text-white border border-secondary"}`}
                onClick={handleLoadMore}
                disabled={limit >= data.length}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
