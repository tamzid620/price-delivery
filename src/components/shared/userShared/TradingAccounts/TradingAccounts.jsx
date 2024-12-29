"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "@/assests/icons/Stock trading.png";
import icon2 from "@/assests/icons/commodity trading.png";
import icon3 from "@/assests/icons/Forex Trading.png";
import icon4 from "@/assests/icons/CryptoTrading.png";
import icon5 from "@/assests/icons/index Trading.png";
import Image from "next/image";
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";

const trandingData = [
  {
    icon: icon1,
    title: "Bangladesh/Foreign stock market",
  },
  {
    icon: icon3,
    title: "Forex",
  },
  {
    icon: icon2,
    title: "Commodity",
  },
  {
    icon: icon4,
    title: "Crypto",
  },
  {
    icon: icon5,
    title: "Index",
  },
];

const TradingAccounts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="md:mt-32 sm:mt-8 lg:px-8 md:px-6 sm:px-4">
    <div data-aos="fade-down" data-aos-duration="400" className="text-center">
      <h1
        className={`${ubuntu.className} text-4xl font-bold text-gray-800 mb-6`}
      >
        Why Choose PDT?
      </h1>
      <p
        className={`${raleway.className} text-lg text-gray-500 max-w-3xl mx-auto mb-16`}
      >
        The elaboration of PDT is Price Delivery Traders. It means we aim to
        build traders who understand how price is efficiently delivered from
        one point to another. To achieve this, you will need to comprehend
        how algorithms operate in the trading world. That’s exactly what you
        will learn here. And where can you use it? Everywhere!
      </p>
    </div>
    <div
      data-aos="zoom-in-down"
      data-aos-duration="400"
      className={`grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8`}
    >
      {trandingData.map(({ icon, title }, index) => (
        <div
          key={index}
          className="group relative border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white"
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 p-3 rounded-full shadow-lg">
            <Image src={icon} alt={title} layout="fill" className="w-full" />
          </div>
          <div className="px-6 pt-14 pb-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-500 transition">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Explore {title} to unlock the potential of global trading.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TradingAccounts;
