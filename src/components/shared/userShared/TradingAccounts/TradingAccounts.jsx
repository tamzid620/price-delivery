import React from "react";
import icon1 from "@/assests/icons/Stock trading.png";
import icon2 from "@/assests/icons/commodity trading.png";
import icon3 from "@/assests/icons/Forex Trading.png";
import icon4 from "@/assests/icons/CryptoTrading.png";
import Image from "next/image";
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

const trandingData = [
  {
    icon: icon1,
    title: "Stock trading",
    disc: "Gain insights and tools to analyze stocks, track market trends, and grow your investment portfolio.",
  },
  {
    icon: icon2,
    title: "Commodity Trading",
    disc: "Trade gold, oil, and other commodities with real-time data, market analysis, and expert advice. ",
  },
  {
    icon: icon3,
    title: "Forex Trading",
    disc: "Master forex trading with currency pair insights, market trends, and strategies for effective financial growth.",
  },
  {
    icon: icon4,
    title: "Crypto Trading",
    disc: "Explore cryptocurrencies with secure platforms, real-time data, and expert guidance for successful trading decisions.",
  },
];

const TradingAccounts = () => {
  return (
    <div className="md:mt-32 sm: mt-8 lg:px-4 md:px-4 sm: px-4 ">
      <h1
        className={`${ubuntu.className} text-3xl font-bold text-center mb-10`}
      >
        What you will learn
      </h1>
      <div
        className={`${ubuntu.className} grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 lg:gap-5 md:gap-10 sm: gap-10`}
      >
        {trandingData?.map(({ icon, title, disc }, index) => (
          <div key={index} className="relative">
            <div className="relative px-5 pt-14 pb-10 h-[220px] border rounded-sm shadow-lg hover:shadow-xl text-center">
              <h2 className=" text-xl font-bold mb-2">
                {title}
              </h2>
              <p className={`${raleway.className} text-gray-600`}>{disc}</p>
            </div>
            <Image
              src={icon}
              alt={title}
              className="absolute -top-5 left-4 w-14 h-14 mx-auto mb-4 bg-[#70c494] p-3 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingAccounts;
