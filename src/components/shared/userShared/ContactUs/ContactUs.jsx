"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import sectionImage from "@/assests/images/Banner-7.jpg";
import formBgImage from "@/assests/images/Banner-8.png";
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";
import Swal from "sweetalert2";
import Loader from "@/config/Loader/Loader";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    
    e.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm("service_6r601xr", "template_yqskehe", form.current, {
        publicKey: "AUg4oQI-W4fyuB1zN",
      })
      .then(
        () => {
          setIsLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          setIsLoading(false);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something Went Wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <div className="md:mt-32 sm: mt-8 lg:px-4 md:px-4 sm: px-4 ">
      <div id="apply">
        {/* Image div for large & medium device */}
        <div className={` ${raleway.className}  relative md:block sm: hidden`}>
          <Image
            className=" relative w-full md:h-[400px]"
            src={sectionImage}
            alt="section banner Image"
          />
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="absolute md:top-32 lg:left-[150px] md:left-[50px]"
          >
            <div className="text-start">
              <h1 className=" text-white text-4xl font-bold mb-2">
                Apply To Enroll For 
              </h1>
              <h2 className=" text-white text-5xl font-bold">
              Course Details
              </h2>
            </div>
            <div className="mx-0  uppercase mt-6 text-lg font-bold text-white px-3 py-2 bg-[#70c494] rounded-sm hover:bg-green-600 w-[185px]">
              Fill up the Form
            </div>
          </div>
        </div>
        {/* Image div for small device */}
        <div className={` ${raleway.className}  relative md:hidden sm: block`}>
          <Image
            className=" relative w-full  h-[260px]"
            src={sectionImage}
            alt="section banner Image"
          />
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="absolute top-14 left-[60px] flex justify-center items-center"
          >
            <div>
              
            <div className="md:text-start sm: text-center">
              <h1 className=" text-white md:text-4xl sm: text-2xl font-bold mb-2">
                Apply To Enroll For 
              </h1>
              <h2 className=" text-white md:text-5xl sm: text-3xl font-bold">
              Course Details
              </h2>
            </div>
            <div className="mx-auto uppercase mt-6 text-lg font-bold text-white px-3 py-2 bg-[#70c494] rounded-sm hover:bg-green-600  w-[184px]">
              Fill up the Form
            </div>
            </div>
          </div>
        </div>
        {/* form div  */}
        <div className="relative">
          <Image
            className="relative w-full md:h-[500px] sm: h-[600px]"
            src={formBgImage}
            alt="section banner Image"
          />

          <div
            className={` ${ubuntu.className} absolute md:-top-1 sm: -top-4 lg:left-[350px] md:left-20 sm: left-0 flex items-center justify-center p-6 `}
          >
            <div className="w-full max-w-lg  rounded-lg shadow-lg p-8">
              <form
                data-aos="zoom-in-down"
                data-aos-duration="500"
                className="space-y-6"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-lg font-bold text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-bold text-white mb-2"
                    >
                      Phone
                    </label>
                    <input
                      required
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    />
                  </div>
                </div>

                {/* <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-5"> */}
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  />
                </div>

                {/* Basics of Trading */}
                <div>
                  <label
                    htmlFor="basics"
                    className="block text-lg font-bold text-white mb-2"
                  >
                    Do you know the basics of trading?
                  </label>
                  <select
                    required
                    name="basicQuestion"
                    id="basics"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {/* </div> */}

                {/* Submit Button */}
                <div>
                  {isLoading ? (
                    
                      <Loader />
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-black border-2 border-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#579673] transition-colors"
                    >
                      Apply
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
