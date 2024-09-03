import React from "react";
import Layout from "../components/Layout";
import heroImage from "/vite.svg";

const Homepage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-[#D6FCFF] to-[#29BBD4] dark:from-[#002B36] dark:to-[#003C5C]">
        <div className="container p-4 mx-auto">
          <div className="w-full h-full flex gap-6 flex-col items-center justify-center my-10 lg:my-0 lg:flex-row md:h-[380px] lg:h-[472px]">
            <div className="basis-1/2">
              <h2 className="text-[#002022] dark:text-gray-200 font-bold text-2xl md:text-[28px] lg:leading-[42px] w-[85%]">
                PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan
                Pemerintah.
              </h2>
              <p className="text-[#444b55] dark:text-gray-100 text-wrap text-md pb-2 pt-4 md:text-lg w-[85%] lg:w-full">
                Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun
                Swasta untuk mendapatkan transaksi dengan harga dan kualitas
                terbaik.
              </p>
            </div>
            <div className="basis-1/2 w-full h-full flex items-center justify-center">
              <img
                src={heroImage}
                alt="image"
                className="w-[300px] h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
