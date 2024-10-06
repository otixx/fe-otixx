import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Option from "@/components/option";
import React from "react";

const AboutusPage = () => {
  return (
    <main>
      <Breadcrumb text="Halaman Tentang Kami" />
      <Option className={"mt-5"} />
      <MaxWidthWrapper className="mt-10 py-5 md:py-24 lg:py-24 xl:py-2 2xl:py-24">
        <h1 className="text-center text-sm font-bold text-first xl:text-left xl:text-2xl 2xl:text-left 2xl:text-2xl">
          Tentang Kami
        </h1>
        <section className="mt-10 space-y-10 text-sm">
          <p>
            OTAKUTIXX adalah platform inovatif yang berfokus pada penjualan
            Tiketing untuk berbagai acara dengan tema Jepang. Kami menyediakan
            Solusi lengkap untuk memenuhi kebutuhan event organizer, mulai dari
            management tiket hingga analisis data, yang mempermudah mereka dalam
            mengelola acara dengan efisien dan efektif.
          </p>
          <p>
            Tidak hanya itu, saat ini kami menjalin kemitraan dengan salah satu
            Event Organizer yang telah menggunakan platform kami dengan sukses.
          </p>
          <p>
            Kami berkomitmen untuk mengembangkan jaringan Kerjasama dengan lebih
            banyak event organizer di masa depan. Dengan bergabung Bersama kami,
            Anda akan mendapatkan akses kepada teknologi modern untuk memperluas
            jangkauan event Anda dan menarik lebih banyak pengunjung.
          </p>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default AboutusPage;
