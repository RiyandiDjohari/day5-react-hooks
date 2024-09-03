import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="dark:bg-[#002B36] dark:text-gray-200">
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center lg:flex-row gap-8 my-10">
            {/* Left Side */}
            <div className="basis-[50%]">
              <div id="visi" className="mb-10">
                <h3 className="text-2xl font-bold">Visi Kami</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sint, magnam.
                </p>
              </div>
              <div id="misi">
                <h3 className="text-2xl font-bold">Misi Kami</h3>
                <ul className="list-disc list-inside">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="mb-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Doloremque, expedita!
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Side */}
            <div className="basis-[50%] w-full h-full flex items-center justify-center">
              <img
                src="/vite.svg"
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

export default About;
