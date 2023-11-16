import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full  md:px-24 lg:px-8 bg-[#DCAC00]">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 bg-[FFD600]">
          <div class="sm:col-span-2 ">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              class="inline-flex items-center"
            >
              <Image
                className="mr-3"
                src="/jaksa.png"
                alt="LogoKejaksaan"
                width="50"
                height="50"
              />
              <span class="ml-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Kejaksaan Negeri Sidoarjo
              </span>
            </a>
            <div class="mt-0 ml-16 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                Jalan Sultan Agung No. 36 Sidokumpul, Gajah Timur, Magersari,
                Kabupaten Sidoarjo, Jawa Timur 61212
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:0813-3387-4610"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                0813-3387-4610
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:kejarisidoarjo4@gmail.com"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                kejarisidoarjo4n@gmail.com
              </a>
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div class="flex items-center mt-1 space-x-3">
              <a
                href="https://twitter.com/kejarisidoarjo"
                class="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kejarisidoarjo/"
                class="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kejaksaan.sidoarjo"
                class="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@kejarisidoarjo9696"
                class="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-800">
              Ikuti terus aktivitas kami lewat sosial media yang kami miliki
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse flex justify-center items-center pt-5 pb-10 border-t">
          <p class="text-sm text-gray-600">
            Copyright © 2023 Tim IT Kejaksaan Negeri Sidoarjo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
