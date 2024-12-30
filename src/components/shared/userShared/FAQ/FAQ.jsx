'use client';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FAQImage from "@/assests/images/Banner-6.jpg";
import Image from "next/image";
import { TbArrowBadgeDownFilled , TbArrowBadgeUpFilled } from "react-icons/tb"
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";

const accordionData = [
  {
    title: "When does the mentorship start?",
    content:
      "The mentorship launches in early 2025. Stay tuned for the exact date!",
  },
  {
    title: "What topics are covered in the trading mentorship?",
    content:
      "The mentorship will cover the teaching of all kinds of trading in the world. You will be able to trade any asset class with our algorithmic theory.",
  },
  {
    title: "Is the mentorship suitable for beginners?",
    content:
      "Yes, the mentorship is designed for all skill levels, including beginners. We start with the basics and gradually move to advanced lessons. But we'd still recommend watching our YouTube videos first.",
  },
  {
    title: "How long does it take to complete the mentorship?",
    content:
      "The duration of the mentorship depends on the type of mentorship chosen. Self-paced mentorships can be completed in your own time, typically within 4-6 weeks, while live sessions follow a set schedule.",
  },
  {
    title: "Is the mentorship self-paced or live sessions? ",
    content:
      "For everyone's convenience this mentorship is going to be self-paced. You can learn the lessons at any time from anywhere in the world.",
  },
  {
    title: "Does the mentorship provide signals?",
    content:
      "No, we do not offer signals or anything of this sort. We don't believe in signals, as we want to make independent trades. This is the core intention of PDT.",
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border rounded-md shadow-sm mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-[12px] bg-gray-100 text-left"
        onClick={onClick}
      >
        <span className={`${raleway.className} text-lg font-bold `}>{title}</span>
        {isOpen ? <TbArrowBadgeUpFilled /> : <TbArrowBadgeDownFilled />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          <p className={`${raleway.className}`}>{content}</p>
        </div>
      )}
    </div>
  );
};


const FAQ = () => {

  const [openIndex, setOpenIndex] = React.useState(null);
  useEffect(() => {
    AOS.init();
  },[])

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:mt-32 sm: mt-8 lg:px-4 md:px-4 sm: px-4 ">
      
      <h1
        data-aos="fade-down"
              data-aos-duration="300"
        className={`${ubuntu.className} md:block sm: hidden text-3xl font-bold text-center mb-10`}
      >
        Frequently Asked Questions
      </h1>
      <h1
        className={`${ubuntu.className}  md:hidden sm: block text-3xl font-bold text-center mb-10 `}
      >
        FAQ
      </h1>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 md:gap-8 sm: gap-2">
        {/* accordio div  */}
        <div data-aos="zoom-in-down"
              data-aos-duration="500"
               className=" overflow-y-auto">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
{/* image div  */}
        <div data-aos="zoom-in-down"
              data-aos-duration="500">
          <Image
            className="w-full lg:h-[400px] md:h-0 sm: h-0 rounded-sm"
            src={FAQImage}
            alt="faq image"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
