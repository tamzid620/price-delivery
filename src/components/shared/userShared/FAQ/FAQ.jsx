'use client';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FAQImage from "@/assests/images/Banner-6.jpg";
import Image from "next/image";
import { TbArrowBadgeDownFilled , TbArrowBadgeUpFilled } from "react-icons/tb"
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border rounded-md shadow-sm mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-[19px] bg-gray-100 text-left"
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

const accordionData = [
  {
    title: "What topics are covered in the trading course?",
    content:
      "Our trading course covers stock trading, forex, commodity trading, and cryptocurrency basics, along with risk management and technical analysis.",
  },
  {
    title: "Are the trading courses suitable for beginners?",
    content:
      "Yes, our courses are designed for all skill levels, including beginners. We start with the basics and gradually move to advanced strategies.",
  },
  {
    title: "How long does it take to complete the course?",
    content:
      "The duration of the course depends on the type of course chosen. Self-paced courses can be completed in your own time, typically within 4-6 weeks, while live sessions follow a set schedule.",
  },
  {
    title: "Are the courses self-paced or live sessions?",
    content:
      "We offer both self-paced courses and live interactive sessions to suit different learning preferences.",
  },
  {
    title: "Do I need any prior knowledge or experience to join the course?",
    content:
      "No prior knowledge or experience is required. Our courses are designed to guide you step-by-step, regardless of your background.",
  },
];


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
              data-aos-duration="600"
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
        <div data-aos="fade-right"
              data-aos-duration="600"
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
        <div data-aos="fade-left"
              data-aos-duration="300">
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
