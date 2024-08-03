import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Breadcrumb text="Halaman Profile" />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-lg bg-second p-4 md:h-96 lg:w-60">
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-6 md:flex md:justify-center">
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
              </div>
              <div className="col-span-3 md:hidden lg:hidden">
                <div className="my-2 w-full text-right">
                  <Link href="" className="mb-2 block text-sm text-purple-500">
                    Edit Profile
                  </Link>
                </div>
                <div className="my-2 w-full text-right">
                  <Link href="" className="block text-sm text-purple-500">
                    Ubah Password
                  </Link>
                </div>
              </div>
              <div className="col-span-12">
                <div className="w-full">
                  <p className="mt-4 text-xs text-gray-500 md:text-center lg:text-center">
                    Gunakan image maksimal berukuran 1 Mb
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-second p-4">
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
              <div className="col-span-1 hidden text-end md:col-span-2 md:block lg:block">
                <div className="my-2 w-full md:w-1/2">
                  <Link href="" className="mb-2 block text-sm text-purple-500">
                    Edit Profile
                  </Link>
                </div>
                <div className="my-2 w-full md:w-1/2">
                  <Link href="" className="block text-sm text-purple-500">
                    Ubah Password
                  </Link>
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
