"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImage from "@/assests/images/Banner-4.jpg";
import Image from "next/image";
import Link from "next/link";
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";
// import { Ubuntu } from "next/font/google";
// import { Raleway } from "next/font/google";

// const ubuntu = Ubuntu({
//   weight: ["400", "700"],
//   style: ["normal"],
// });

// const raleway = Raleway({
//   weight: ["300", "400", "500", "700"],
//   style: ["normal"],
// });

const UpdatedBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="relative">
        <Image
          className="relative lg:w-full lg:h-[600px] sm:h-[500px]"
          src={BannerImage}
          alt="banner Image"
        ></Image>
        <div className="absolute top-0 w-full bg-black opacity-50 inset-0" />
        {/* text section  */}
        <div className="absolute inset-0 w-full flex justify-center items-center text-center">
          <div
            className={`${ubuntu.className} text-white uppercase text-center`}
          >
            <h1
              data-aos="fade-up"
              data-aos-duration="300"
              className="md:text-[28px] sm: text-[10px] font-[500]"
            >
              {/* Build Your */}
              Start Your Profitable
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="300"
              className="md:text-[32px] sm: text-[14px] font-[500]"
            >
              {/* Profitable Future in */}
              Journey With Us In
            </h2>
            <h3
              data-aos="fade-up"
              data-aos-duration="300"
              className="md:-mt-12 sm: -mt-5 md:text-[170px] sm: text-[75px] font-bold"
            >
              2025
            </h3>

            {/* button section  */}
            <div className="flex justify-center">
              <Link
                href="#apply"
                data-aos="fade-down"
                data-aos-duration="300"
                className={`${raleway.className} md:-mt-6 sm: mt-0 md:text-lg sm: text-sm px-3 py-2 bg-[#70c494] rounded-sm hover:bg-green-600 md:w-[230px] sm: w-[150px] `}
              >
                <div>Stay Connected</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------- */}
    </div>
  );
};

export default UpdatedBanner;
