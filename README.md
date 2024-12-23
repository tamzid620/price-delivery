• Primary color: #70c494  (green);

• import { Ubuntu } from "next/font/google";

• import { Raleway } from "next/font/google";

• const ubuntu = Ubuntu ({ weight: ["400", "700"], style: ["normal"], });

• const raleway = Raleway({ weight: ["300", "700"], style: ["normal"], });

 • {${ubuntu.className}}
• {${raleway.className}}
• 
• give me a banner size photo for my website banner. the banner should have trading related object like graph dollars, trading icons or logo etc. banner left side should empty. and the other objects should locate in right side. 
use this color  in this banner #70c494
• 
• 
• 
• 
• // Import necessary libraries
"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border rounded-md shadow-sm mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is your return policy?",
      content:
        "Our return policy allows you to return items within 30 days of purchase. Conditions apply.",
    },
    {
      title: "How do I track my order?",
      content:
        "You can track your order using the tracking number sent to your email after purchase.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Yes, we offer international shipping. Delivery times and charges vary by location.",
    },
  ];

  return (
    <div className="h-[400px] overflow-y-auto">
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
  );
};

export default Accordion;




