import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  const data = [
    {
      title: "Pendaftaran EO",
      description:
        "Perusahaan atau individu penyelenggara acara untuk mendaftarkan diri ke suatu platform.",
    },
    {
      title: "Menunggu Persetujuan",
      description:
        "pengajuan Anda sedang dalam proses review dan belum disetujui oleh pihak kami.",
    },
    {
      title: "Persetujuan Diberikan",
      description:
        "pengajuan telah selesai diverifikasi dan disetujui oleh pihak kami.",
    },
  ];
  return (
    <div>
      <Breadcrumb text="Halaman Daftar EO" />
      <MaxWidthWrapper>
        <div className="space-y-4 py-14">
          <h1 className="text-center text-2xl font-bold text-black md:text-5xl">
            Pengajuan pendaftaranmu sebagai EO sedang kami proses
          </h1>
          <p className="text-center">
            Terima kasih atas pendaftaran Anda. Proses persetujuan akan memakan
            waktu maksimal 7 hari kerja. Mohon cek email Anda secara berkala
            untuk mendapatkan informasi terbaru dari kami. Terima kasih atas
            pengertian dan kerjasamanya.
          </p>
        </div>
        <div className="grid grid-cols-12 justify-center gap-14 md:gap-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-12 flex justify-center md:col-span-4"
            >
              <div className="h-60 w-60 rounded-lg p-5 shadow-lg">
                <div className="flex w-full justify-center">
                  <div className="bg-first -mt-10 h-14 w-14 rounded-full"></div>
                </div>
                <div className="w-full space-y-5">
                  <h1 className="text-first text-center font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
