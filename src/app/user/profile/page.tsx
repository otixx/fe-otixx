import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Breadcrumb text="Halaman Profile" />
      <div className="container mx-auto mt-8">
        <h2 className="mb-4 text-3xl font-bold text-purple-500">
          Halaman Profil
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex h-96 w-full flex-col items-center rounded-lg bg-[#F7F2FF] p-4 lg:w-60">
            <div className="relative h-32 w-32">
              <Image
                src="/dash.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                alt="Profile"
              />
              <button className="absolute inset-0 m-auto flex h-8 w-24 items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-xs font-bold text-white">
                Edit Photo
              </button>
            </div>
            <div className="w-40">
              <p className="mt-4 text-center text-xs text-gray-500">
                Gunakan image maksimal berukuran 1 Mb
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-[#F7F2FF] p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
              <div className="col-span-3 space-y-8">
                <div>
                  <p className="text-gray-500">Username</p>
                  <p className="font-medium">Rajih Kharissuha</p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium">RajihKharissuha@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-500">Nomor Telepon</p>
                  <p className="font-medium">0000000000000</p>
                </div>
              </div>
              <div className="col-span-3 space-y-8">
                <div>
                  <p className="text-gray-500">Tanggal Lahir</p>
                  <p className="font-medium">Rajih Kharissuha</p>
                </div>
                <div>
                  <p className="text-gray-500">Alamat</p>
                  <p className="font-medium">Rajih Kharissuha</p>
                </div>
                <div>
                  <p className="text-gray-500">Jenis Kelamin</p>
                  <p className="font-medium">Laki Laki</p>
                </div>
              </div>
              <div className="col-span-1 text-end md:col-span-2">
                <div className="my-2 w-full md:w-1/2">
                  <a href="#" className="mb-2 block text-sm text-purple-500">
                    Edit Profile
                  </a>
                </div>
                <div className="my-2 w-full md:w-1/2">
                  <a href="#" className="block text-sm text-purple-500">
                    Ubah Password
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
