"use client";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

const NavBar = () => {
  return (
    <div>
      <Popover className="container mx-auto flex items-center border-b-2 px-6 py-4 h-23">
        <Image
          src="/kejaksaanlogo.png"
          alt="LogoKejaksaan"
          width="250"
          height="150"
        />
        <div className="grow">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
            <Link href="#" className="text-[#4d4d4d] hover:text-[#DCAC00]">
              Menu
            </Link>
            <Link href="#" className="text-[#4d4d4d]  hover:text-[#DCAC00]">
              Layanan
            </Link>
            <Link href="#" className="text-[#4d4d4d]  hover:text-[#DCAC00]">
              Berita
            </Link>
            <Link href="#" className="text-[#4d4d4d]  hover:text-[#DCAC00]">
              Pengaduan
            </Link>
          </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>
        <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Image
                    src="/kejaksaanlogo.png"
                    alt="LogoKejaksaan"
                    width="270"
                    height="170"
                  />
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close Menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 text-[#4d4d4d]"
                    >
                      Menu
                    </Link>
                    <Link
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 text-[#4d4d4d]"
                    >
                      Layanan
                    </Link>
                    <Link
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 text-[#4d4d4d]"
                    >
                      Berita
                    </Link>
                    <Link
                      href="#"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 text-[#4d4d4d]"
                    >
                      Pengaduan
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default NavBar;
