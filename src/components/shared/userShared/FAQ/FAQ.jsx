"use client";
import * as React from "react";
import FAQImage from "@/assests/images/Banner-6.jpg";
import Image from "next/image";
import { TbArrowBadgeDownFilled , TbArrowBadgeUpFilled } from "react-icons/tb"
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

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border rounded-md shadow-sm mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-[19px] bg-gray-100 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{title}</span>
        {isOpen ? <TbArrowBadgeUpFilled /> : <TbArrowBadgeDownFilled />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          <p>{content}</p>
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
    title: "Do I get a certificate after completing the course?",
    content:
      "Yes, you will receive a certificate of completion once you finish the course and pass the final assessment.",
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

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:mt-32 sm: mt-8 lg:px-4 md:px-4 sm: px-4 ">
      <h1
        className={`${ubuntu.className} text-3xl font-bold text-center mb-10`}
      >
        Frequently Asked Questions
      </h1>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 md:gap-8 sm: gap-2">
        {/* accordio div  */}
        <div className=" overflow-y-auto">
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
        <div>
          <Image
            className="w-full md:h-[400px] sm: h-full rounded-sm"
            src={FAQImage}
            alt="faq image"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
