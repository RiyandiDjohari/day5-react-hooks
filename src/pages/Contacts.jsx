import React from "react";
import Layout from "../components/Layout";

const Contacts = () => {
  return (
    <Layout>
      <section className="dark:bg-[#002B36] dark:text-gray-200">
        <div className="container mx-auto p-4 py-8">
          <div>
            <h2 className="font-bold text-3xl mb-2">Hubungi Kami</h2>
            <p>Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?</p>
            <p>Silakan menghubungi Kami secara langsung.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <div className="basis-1/2 border px-6 py-8 rounded-lg flex flex-col gap-3">
              <h3 className="text-xl font-bold">Layanan Informasi Pengguna</h3>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>cs@padiumkm.id</p>
              </div>
              <div>
                <h3 className="font-bold">Whatsapp</h3>
                <p>+62 812 9000 7820</p>
              </div>
              <h3 className="font-bold">Senin - Jumat | 08:00 - 17:00 WIB</h3>
            </div>
            <div className="basis-1/2 border px-6 py-8 rounded-lg flex flex-col">
              <h3 className="text-xl font-bold mb-1">Kantor Kami</h3>
              <h4 className="text-lg font-semibold">PaDi UMKM Headquarters</h4>
              <h5 className="text-base font-semibold">
                Gedung Telkom Direktorat Business and Technology
              </h5>
              <p className="text-sm">
                Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,
                12810 Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
