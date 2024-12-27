'use client' ;
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
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
},[])
  
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
            className={`${ubuntu.className} text-white uppercase font-bold text-center`}
          >
            {/* title for large & medium device  */}
            <div className="md:block sm: hidden">
            <h1 
             data-aos="fade-up"
             data-aos-duration="300"
             className="text-[35px]"
             >Build Your Profitable Future <br /> in</h1>
            <h2 
             data-aos="fade-up" 
             data-aos-duration="300"
             className="md:-mt-10 sm: -mt-3 text-[130px]">2025</h2>
            </div>
            {/* title for small  device  */}
            <div className="md:hidden sm: block">
            <h1 
             data-aos="fade-up"
             data-aos-duration="300"
             className="text-[15px]"
             >
              Build Your 
              <br />
              <span className="text-[20px]">Profitable Future in</span>
              </h1>
            <h3 
             data-aos="fade-up" 
             data-aos-duration="300"
             className="md:-mt-10 sm: -mt-3 text-[60px]">
              2025
             </h3>
            </div>

            {/* button section  */}
            <div className="flex justify-center">
              <Link 
              href="#apply" 
              data-aos="fade-down"
              data-aos-duration="300"
               className={`${raleway.className} md:text-lg sm: text-sm px-3 py-2 bg-[#70c494] rounded-sm hover:bg-green-600 md:w-[230px] sm: w-[150px] `}>
              <div>
              Stay Connected
              </div>
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
