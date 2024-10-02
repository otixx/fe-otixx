import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-first">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 p-4 md:mb-0">
            <Link href="/" className="mb-10 flex font-semibold">
              <Image
                draggable={false}
                src={"/logo.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
            <div className="max-w-lg">
              <span className="text-white">
                Otakutixx is a ticketing platform designed to facilitate event
                organizers and attendees in the seamless sale and purchase of
                event tickets.{" "}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 p-4">
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-white">
                COMPANY
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link href="/tentang-kami" className="hover:underline">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <a href="/peninjauan" className="hover:underline">
                    Peninjauan Persetujuan Event dan Tiket
                  </a>
                </li>
                <li className="mb-4">
                  <Link href="kebijakan" className="hover:underline">
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 p-4">
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-white">
                CUSTOMER SERVICE
              </h2>
              <ul className="text-white">
                <li className="mbLink4">
                  <Link href="hubungi-kami" className="hover:underline">
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link href="lapor" className="hover:underline">
                    Lapor Kami
                  </Link>
                </li>
                <li>
                  <Link href="faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            Copyright © 2023 Otakutixx
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <Link href="#" className="text-white">
              <h1>
                <InstagramLogoIcon />
              </h1>
            </Link>
            <Link href="#" className="ms-5 text-white">
              <h1>
                <TwitterLogoIcon />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
