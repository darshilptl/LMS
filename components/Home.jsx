import React from "react";
import Navbar from "./Navbar";
import FeaturesSection from "./Features";
import TutorialsSection from "./Tutorials";
import LMSFAQ from "./LMSFAQ";
import { Testimorals } from "./Testimorals";
import Footer from "./Footer";

import Link from "next/link";
import Image from "next/image";

const HomeSection = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section  */}
      <section className="relative bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover dark:bg-gray-950 bg-white">
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>

        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
              Build products for everyone
            </h1>
            <h2 className="text-4xl dark:text-white text-gray-950 font-extrabold mx-auto md:text-5xl">
              Design your projects faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                the largest figma UI kit
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                href="/"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Browse courses
              </Link>
              <a
                href="/"
                className="block py-2 px-4 text-gray-100 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Get access
              </a>
            </div>
          </div>

          <div className="mt-14">
            {/* <img
              src="/images/LMSmockup.png"
              className="w-full shadow-lg rounded-lg "
              alt=""
            /> */}
            <img
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* End of Hero Section  */}

      <FeaturesSection />

      <TutorialsSection/>

      <LMSFAQ />

      <Testimorals />

      <Footer />
    </>

  );
};

export default HomeSection;
