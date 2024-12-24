import React from 'react';
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

const ContactUs = () => {
    return (
        <div className="md:mt-32 sm: mt-8 lg:px-4 md:px-4 sm: px-4 ">
            <h1
        className={`${ubuntu.className} text-3xl font-bold text-center mb-10`}
      >
       Contact With Us
      </h1>
        </div>
    );
};

export default ContactUs;