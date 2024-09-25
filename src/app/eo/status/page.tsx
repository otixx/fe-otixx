import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { CircleCheck, FileInput, Hourglass } from "lucide-react";
const page = () => {
  const data = [
    {
      icons: <FileInput />,
      title: "Pendaftaran EO",
      description:
        "Perusahaan atau individu penyelenggara acara untuk mendaftarkan diri ke suatu platform.",
    },
    {
      icons: <Hourglass />,
      title: "Menunggu Persetujuan",
      description:
        "pengajuan Anda sedang dalam proses review dan belum disetujui oleh pihak kami.",
    },
    {
      icons: <CircleCheck />,
      title: "Persetujuan Diberikan",
      description:
        "pengajuan telah selesai diverifikasi dan disetujui oleh pihak kami.",
    },
  ];
  return (
    <div>
      <Breadcrumb text="Halaman Daftar EO" />
      <MaxWidthWrapper className="p-5">
        <div className="my-14 space-y-4">
          <h1 className="text-left text-2xl font-bold text-labelForm md:text-5xl">
            Pengajuan pendaftaranmu sebagai EO sedang kami proses
          </h1>
          <p className="text-left text-sm text-labelForm">
            Terima kasih atas pendaftaran Anda.
            <br />
            Proses persetujuan akan memakan{" "}
            <span className="text-first">waktu maksimal 7 hari kerja</span>.
            Mohon cek email Anda secara berkala untuk mendapatkan informasi
            terbaru dari kami. Terima kasih atas pengertian dan kerjasamanya.
          </p>
        </div>
        <div className="grid grid-cols-12 items-center justify-center space-y-14 md:space-y-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-12 flex justify-center md:col-span-4"
            >
              <div className="h-60 w-60 rounded-lg p-5 shadow-lg">
                <div className="flex w-full justify-center">
                  <div className="-mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-first text-white shadow-xl">
                    {item?.icons}
                  </div>
                </div>
                <div className="w-full space-y-5 pt-5 md:pt-0 lg:md:pt-0">
                  <h1 className="text-center font-semibold text-first">
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
