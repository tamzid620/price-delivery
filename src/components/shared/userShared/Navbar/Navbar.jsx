"use client";
import "./Navbar.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GreenNavImage from "@/assests/icons/PDT.png";
import WhiteNavImage from "@/assests/icons/PDT White.png";
import GreenMenuIcon from "@/assests/icons/green-menu.png";
import WhiteMenuIcon from "@/assests/icons/white-menu.png";
import Image from "next/image";
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

 useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
    ref={navRef}
      className={`
       ${scrolled ? "bg-[#70c494]" : "bg-white"} fixed w-full top-0 left-0 z-10 shadow-sm shadow-gray-200`}
    >
      <div
        className={`${ubuntu.className} relative flex justify-between items-center 
        xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
         lg:px-4 md:px-4 sm: px-4 `}
      >
        {/* Image section  */}
        <div>
          <Link href="/">
            <Image
              src={scrolled ? WhiteNavImage : GreenNavImage}
              alt="navbar-image"
              className="w-[100px] py-3"
            />
          </Link>
        </div>
        {/* nav ul section for large device  */}
        <div className={` ${scrolled ? "text-white" : "text-black"} md:flex sm: hidden`}>
          <ul className="uppercase font-bold flex gap-10 ">
            <li title="Home">
              <Link href="/">Home</Link>
              <hr className={` ${scrolled ? "border-white" : "border-[#70c494]" } border-2 `}/>
            </li>
            <li title="About Us">
              <Link href="#contact">About Us</Link>
              <hr className={` ${scrolled ? "border-white" : "border-[#70c494]" } border-2 `} />
            </li>
            <li title="Admin Panel">
              <Link href="#contact">Contact Us</Link>
              <hr className={` ${scrolled ? "border-white" : "border-[#70c494]" } border-2 `} />
            </li>
          </ul>
        </div>
        {/* nav ul section for medium & small  device  */}
        <div className="relative md:hidden sm: block">
          <div>
            <Image
              onClick={toggleMenuBar}
              className="w-[30px] drop-shadow-xl"
              src={scrolled ? WhiteMenuIcon : GreenMenuIcon}
              alt="navbar"
            />
          </div>
        </div>
        {isOpen && (
          <div 
          className="absolute top-[73px] left-0 uppercase block gap-10
          bg-[#70c494] text-white dropShadow font-bold w-full 
          text-center leading-[85px]">
          <ul
          >
            <li title="Home" className=" shadow-sm shadow-white">
              <Link href="/">Home</Link>
            </li>
            <li title="About Us"  className="shadow-sm shadow-white">
              <Link href="#contact">About Us</Link>
            </li>
            <li title="Admin Panel">
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
          </div>
        )}
      </div>
     
    </nav>
  );
};

export default Navbar;
