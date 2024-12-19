"use client"
import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";
import { Raleway } from "next/font/google";
import Link from "next/link";
import navbarImage from '@/assests/icons/Price Delivery green.png'
import menuBar from '@/assests/icons/menu-bar.png' ;
import Image from "next/image";

const ubuntu = Ubuntu({ 
    weight: ["400", "700"], 
    style: ["normal"] 
});

const raleway = Raleway({ 
    weight: ["300", "700"], 
    style: ["normal"] 
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cart = JSON.parse(cartData);
      setCartLength(cart.length);
    }
  }, []);

  const toggleViewCart = () => {
    setViewCart(!viewCart);
  };

  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 z-10 w-full shadow-sm shadow-gray-200">
      <div
        className={`${ubuntu.className} relative xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
        flex justify-between items-center lg:px-4 md:px-4 sm: px-4 `}
      >
        {/* Image section  */}
        <div>
          <Link href="/">
            <Image
              src={navbarImage}
              alt="navbar-image"
              className="w-[120px] py-3"
            />
          </Link>
        </div>
        {/* nav ul section for large device  */}
        <div className="md:flex sm: hidden">
          <ul className="uppercase flex gap-10 ">
            <li title="Home">
              <Link href="/">Home</Link>
            </li>
            <li title="Our Course">
              <Link href="/allProducts">Our Course</Link>
            </li>
            <li title="About Us">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li title="Admin Panel">
              <Link href="/dp">AdminPanel</Link>
            </li>
          </ul>
        </div>
        {/* nav ul section for medium & small  device  */}
        <div className="relative md:hidden sm: flex">
          
          <Link href="/">
            <Image
              onClick={handleMenuBar}
              className="w-[30px] dropShadow "
              src={menuBar}
              alt="navbar"
            />
          </Link>
        </div>
        {isOpen && (
          <ul
            className="absolute top-16 uppercase block gap-10
           bg-[#70c494] text-white dropShadow w-full -mx-4 
           text-center leading-[50px] py-4"
          >
            <li title="Home">
              <Link href="/">Home</Link>
            </li>
            <li title="Our Course">
              <Link href="/allProducts">Our Course</Link>
            </li>
            <li title="About Us">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li title="Admin Panel">
              <Link href="/dp">AdminPanel</Link>
            </li>
          </ul>
        )}
      </div>
      {/* ViewCart  SideBar */}
      <div className="relative">
        {viewCart ? (
          <div className="absolute bg-white w-[350px] shadow-md shadow-[#F26626] h-screen z-10 transition ease-in-out duration-500 ">
            <ViewCart toggleViewCart={toggleViewCart} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
