import React from "react";
import { Ubuntu } from "next/font/google";
import { Raleway } from "next/font/google";
import BannerImage from "@/assests/images/Banner-4.jpg";
import Image from "next/image";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal"],
});

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

const UpdatedBanner = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          className="relative lg:w-full lg:h-[600px] sm:h-[500px]"
          src={BannerImage}
          alt="banner Image"
        ></Image>
        <div className="absolute top-0 w-full bg-black opacity-50 inset-0" />
        <div className="absolute inset-0 w-full flex justify-center items-center text-center">
          {/* text section  */}
          <div
            className={`${ubuntu.className} text-white uppercase font-bold md:leading-[90px] sm: leading-[50px] text-center md:text-7xl sm: text-xl`}
          >
            <h1>Let’s Learn</h1>
            <h2 className="md:text-[130px] sm: text-[80px]">Trading</h2>
            {/* button section  */}
            <div
              className={`${raleway.className} flex justify-center md:gap-10 sm: gap-3 md:text-lg sm: text-sm mt-10`}
            >
              <div className="border-2 border-white px-3 py-2">
                Course Launching Soon
              </div>
              <div className=" px-3 py-2 bg-[#70c494] rounded-sm hover:bg-green-600">
                Apply Now
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------- */}
    </div>
  );
};

export default UpdatedBanner;
