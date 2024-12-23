"use client";
import * as React from "react";
import FAQImage from "@/assests/images/Banner-6.jpg";
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

const FAQ = () => {
  return (
    <div className="mt-32">
      <h1
        className={`${ubuntu.className} text-3xl font-bold text-center mb-10`}
      >
        Frequently Asked Questions
      </h1>
      <div className=" grid md:grid-cols-2 sm: grid-cols-1 gap-8">
        {/* accordio div  */}
        <div>
        
        </div>
{/* image div  */}
        <div>
          <Image
            className="w-full h-[400px] rounded-sm"
            src={FAQImage}
            alt="faq image"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
