"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner1 from "@/assests/images/Banner-1.jpeg";
import banner2 from "@/assests/images/Banner-2.jpeg";
import banner3 from "@/assests/images/Banner-3.jpeg";
import banner4 from "@/assests/images/Banner-2.jpeg";
import { Ubuntu } from "next/font/google";
import { Raleway } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal"],
});

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

const bannerData = [
  {
    image: banner1 ,
    title: "Trade Smarter, Not ",
    title0: "Harder!",
    disc: "Unlock a world of opportunities with real-time insights and",
    disc0: "cutting-edge tools.",
  },
  {
    image: banner2 ,
    title: "Your Gateway to Financial",
    title0: "Growth",
    disc: "Start trading with confidence and achieve your investment",
    disc0: " goals today.",
  },
  {
    image: banner3 ,
    title: "Seize the Market, Anytime,",
    title0: "Anywhere",
    disc: "Trade seamlessly across devices with our user ",
    disc0: "friendly platform.",
  },
  {
    image: banner4 ,
    title: "Empower Your Trades, Maximize",
    title0: " Returns",
    disc: "Advanced analytics and expert support to fuel your",
    disc0: "success.",
  },
];

const Banner = () => {
  // const [currentBanner, setCurrentBanner] = useState(1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Calculate the next banner index
  //     const nextBanner = (currentBanner % 4) + 1;
  //     setCurrentBanner(nextBanner);
  //   }, 2000);
  //   return () => clearInterval(intervalId);
  // }, [currentBanner]);

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % bannerData.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <div>
        <div className="relative">
          <Image
            className="relative bannerImage lg:w-full lg:h-[600px] sm: h-[500px] bg-[#5A287F]"
            src={banner1}
            alt=""
            style={{ display: currentBanner === 1 ? "block" : "none" }}
          />
        
        <div className="absolute top-0 w-full bg-black opacity-30 inset-0" />
        <div className="absolute ms-10 inset-0 w-full flex justify-start items-center text-white">
          <div>
            <h1 className={`${ubuntu.className} uppercase text-3xl`}>
            Trade Smarter, Not Harder!
            </h1>
            <p className={`${raleway.className} mt-3 font-semibold text-lg`}>
            Unlock a world of opportunities with real-time insights and cutting-edge tools.
            </p>
          </div>
        </div>
        </div>

     
        <div className="relative">
          <Image
            className="relative bannerImage lg:w-full lg:h-[600px] sm: h-[500px] bg-[#5A287F]"
            src={banner2}
            alt=""
            style={{ display: currentBanner === 2 ? "block" : "none" }}
          />
        
        <div className="absolute top-0 w-full bg-black opacity-30 inset-0" />
        <div className="absolute ms-10 inset-0 w-full flex justify-start items-center text-white">
          <div>
            <h1 className={`${ubuntu.className} uppercase text-3xl`}>
            Your Gateway to Financial Growth
            </h1>
            <p className={`${raleway.className} mt-3 font-semibold text-lg`}>
            Start trading with confidence and achieve your investment goals today
            </p>
          </div>
        </div>
        </div>

    
        <div className="relative">
          <Image
            className="relative bannerImage lg:w-full lg:h-[600px] sm: h-[500px] bg-[#5A287F]"
            src={banner3}
            alt=""
            style={{ display: currentBanner === 3 ? "block" : "none" }}
          />
        
        <div className="absolute top-0 w-full bg-black opacity-30 inset-0" />
        <div className="absolute ms-10 inset-0 w-full flex justify-start items-center text-white">
          <div>
            <h1 className={`${ubuntu.className} uppercase text-3xl`}>
            Seize the Market, Anytime, Anywhere
            </h1>
            <p className={`${raleway.className} mt-3 font-semibold text-lg`}>
            Trade seamlessly across devices with our user-friendly platform.
            </p>
          </div>
        </div>
        </div>

   
        <div className="relative">
          <Image
            className="relative bannerImage lg:w-full lg:h-[600px] sm: h-[500px] bg-[#5A287F]"
            src={banner4}
            alt=""
            style={{ display: currentBanner === 4 ? "block" : "none" }}
          />
        
        <div className="absolute top-0 w-full bg-black opacity-30 inset-0" />
        <div className="absolute ms-10 inset-0 w-full flex justify-start items-center text-white">
          <div>
            <h1 className={`${ubuntu.className} uppercase text-3xl`}>
            Empower Your Trades, Maximize Returns
            </h1>
            <p className={`${raleway.className} mt-3 font-semibold text-lg`}>
            Advanced analytics and expert support to fuel your success.
            </p>
          </div>
        </div>
        </div>
      </div> */}
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className="relative"
          style={{ display: currentBanner === index ? "block" : "none" }}
        >
          <Image
            className="bannerImage lg:w-full lg:h-[600px] sm:h-[500px] bg-[#5A287F]"
            src={banner.image}
            alt={banner.title}
          />
          <div className="absolute top-0 w-full bg-black opacity-40 inset-0" />
          <div className="absolute md:ms-10 sm: ms-1 inset-0 w-full flex justify-start items-center text-white">
            <div>
              <h1 className={`${ubuntu.className} uppercase font-bold md:text-4xl sm: text-lg`}>
                {banner.title} <br />
                {banner.title0}
              </h1>
              <p className={`${raleway.className} mt-3 font-[500] md:text-xl sm: text-sm`}>
                {banner.disc} <br />
                {banner.disc0}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
