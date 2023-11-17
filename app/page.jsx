import Image from "next/image";
import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import DasboardImage from "../public/dasboard.png";

import JpnImage from "../public/jpn.png";
import EtilangImage from "../public/etilang.png";
import CmsImage from "../public/cms.png";
import BuronanImage from "../public/buronan.png";
import EppidImage from "../public/eppid.png";
import JdihImage from "../public/jdih.png";
import BlowingImage from "../public/blowing.png";
import BeritaImage from "../public/berita.jpg";
import NavBar from "./_component/navbar";
import Link from "next/link";
import Footer from "./_component/footer";
import Carousel from "./_component/carousel";

function page() {
  return (
    <>
    <div class="bg-white">
      <NavBar />
      
        <Carousel />

        {/* Bacground Dashboard */}
        {/* <Image src={DasboardImage} alt="" className="w-full mt-69 lg:mt-0" /> */}

        {/* End Of Background Dashboard */}

        {/* Grid+Card Layanan Kejaksaan Negeri Sidoarjo */}
        <div class="text-xl md:text-2xl lg:text-4xl lg:py-16 font-bold text-[#2E2E2E] text-center py-8 px-10">
          LAYANAN KEJAKSAAN NEGERI SIDOARJO
        </div>

        <div class=" grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 lg:max-w-screen-lg lg:px-0 mx-auto px-7 md:px-10">
          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://tilang.kejaksaan.go.id/">
              <Image class="rounded-lg" src={EtilangImage} alt="" />
            </a>
            <div class=" p-4 md:p-5 ">
              <a href="https://tilang.kejaksaan.go.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  E-Tilang
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Pembayaran tilang tanpa harus datang ke kantor polisi atau
                  instansi terkait secara fisik.
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="http://cms-publik.kejaksaan.go.id/">
              <Image class="rounded-lg" src={CmsImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="http://cms-publik.kejaksaan.go.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Informasi Perkara
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Pantau terus perkembangan penanganan perkara Pidana Umum
                  maupun Pidana Khusus seluruh Indonesia.
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://www.kejaksaan.go.id/buronan/">
              <Image class="rounded-lg" src={BuronanImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="https://www.kejaksaan.go.id/buronan/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Buronan Kejaksaan
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Cari tau buronan yang saat ini sedang dicari
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="http://ppid.kejaksaan.go.id/">
              <Image class="rounded-lg" src={EppidImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="http://ppid.kejaksaan.go.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  E-PPID
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Akses informasi publik untuk mewujudkan pemerintahan yang
                  lebih terbuka dan akuntabel.
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://jdih.kejaksaan.go.id/">
              <Image class="rounded-lg" src={JdihImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="https://jdih.kejaksaan.go.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pelayanan Informasi Publik
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Mengelola dan menyediakan akses informasi hukum dan dokumen
                  hukum yang berkaitan dengan tugas dan fungsi Kejaksaan.
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://halojpn.id/">
              <Image class="rounded-lg" src={JpnImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="https://halojpn.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pelayanan Hukum Online
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Siap memberikan solusi terbaik bagi permasalahan hukum Anda
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://halojpn.id/">
              <Image class="rounded-lg" src={BlowingImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="https://halojpn.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Whistle Blowing System
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Melaporkan adanya tindakan yang mencurigakan atau melanggar
                  hukum yang terjadi di lingkungan Kejaksaan.
                </p>
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 transform hover:-translate-y-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://halojpn.id/">
              <Image class="rounded-lg" src={BlowingImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <a href="https://sipp.pn-sidoarjo.go.id/">
                <h5 class="mb-1 text-sm md:text-md lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SIPP Sidoarjo
                </h5>

                <p class="text-[12px] md:text-sm lg:font-normal text-gray-700 dark:text-gray-400">
                  Akses informasi sidang terkini Pengadilan Sidoarjo
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* End Of Grid+Card Layanan Kejaksaan Negeri Sidoarjo */}

        {/* Grid+Card Berita Terbaru */}
        <div class="text-xl md:text-2xl lg:text-4xl lg:py-16 font-bold text-[#2E2E2E] text-center py-8 md: px-10">
          BERITA TERBARU
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:max-w-screen-lg lg:px-0 mx-auto px-7 md:px-10">
          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div class="w-[155px] md:w-[308px] mx-auto bg-white transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={BeritaImage} alt="" />
            </a>
            <div class="p-4 md:p-5">
              <h5 class="mb-2 text-sm md:text-md lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pembinaan Rohani Kejaksaan Sidoarjo
              </h5>
              <p class="mb-1 text-[9px] md:text-sm font-normal text-gray-700 dark:text-gray-400">
                29 September 2023 | Berita
              </p>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 md:px-3 md:py-2 text-[9px] md:text-sm text-center text-white bg-[#DCAC00] rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>

        {/* End Of Grid+Card Berita Terbaru*/}

        {/* Grid+Youtube */}
        <div class="text-xl md:text-2xl lg:text-4xl lg:py-16 font-bold text-[#2E2E2E] text-center py-8 px-10">
          VIDEO
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:max-w-screen-lg lg:px-0 mx-auto px-10">
          <iframe
            src="https://www.youtube.com/embed/7nHNNNH7V2g?si=1RcPuEwAa63RgR8N"
            frameborder="0"
            allowfullscreen
            class="flex rounded-lg w-70 h-40 mx-auto"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/7nHNNNH7V2g?si=1RcPuEwAa63RgR8N"
            frameborder="0"
            allowfullscreen
            class="flex rounded-lg w-70 h-40 mx-auto"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/7nHNNNH7V2g?si=1RcPuEwAa63RgR8N"
            frameborder="0"
            allowfullscreen
            class="flex rounded-lg w-70 h-40 mx-auto"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/7nHNNNH7V2g?si=1RcPuEwAa63RgR8N"
            frameborder="0"
            allowfullscreen
            class="flex rounded-lg w-70 h-40 mx-auto"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/7nHNNNH7V2g?si=1RcPuEwAa63RgR8N"
            frameborder="0"
            allowfullscreen
            class="flex rounded-lg w-70 h-40 mx-auto"
          ></iframe>
        </div>
        {/* End Of Grid+Youtube */}

        {/* Location */}

        <div class="text-xl md:text-2xl lg:text-4xl lg:py-16 font-bold text-[#2E2E2E] text-center py-8 px-10">
          LOKASI KAMI
        </div>
        <div className="flex items-center justify-center">
          <iframe
            className="flex  rounded-lg mx-auto md:w-[515px] h-[450px] lg:w-[1030px] h-[450px] mb-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.159462639898!2d112.7135897761062!3d-7.447603473394008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f96f1ea3fd29%3A0x93260c2b2a64235!2sKejaksaan%20Negeri%20Sidoarjo!5e0!3m2!1sid!2sid!4v1699329211257!5m2!1sid!2sid"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* End Of Location */}

      <Footer />
    </>
  );
}

export default page;
