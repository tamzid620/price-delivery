import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import fbIcon from '@/assests/icons/facebook.png' ;
import { raleway, ubuntu } from "@/config/Fonts/fontProvider";

const Footer = () => {
    return (
        <footer id="contact"  className="bg-gray-900 text-white py-8 mt-10">
        <div className="container  grid grid-cols-1 md:grid-cols-2 gap-8 xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
         lg:px-4 md:px-4 sm: px-4">
          {/* About Section */}
          <div className='md:text-start sm: text-center'>
            <h3 className={`${ubuntu.className} text-xl font-semibold mb-4 `}>About Us</h3>
            <p className={`${raleway.className} text-sm `}>
              We are committed to providing top-notch trading solutions to help
              you succeed in the dynamic world of finance. Let’s grow together!
            </p>
            <Link href= "https://www.facebook.com/PriceDeliveryTraders" target='_blank'>
            <Image className='w-[40px] mt-4' src={fbIcon} alt='facebook icon'/>
            </Link>
          </div>
  
          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stock-trading">
                  <p className="hover:underline">Stock Trading</p>
                </Link>
              </li>
              <li>
                <Link href="/commodity-trading">
                  <p className="hover:underline">Commodity Trading</p>
                </Link>
              </li>
              <li>
                <Link href="/forex-trading">
                  <p className="hover:underline">Forex Trading</p>
                </Link>
              </li>
              <li>
                <Link href="/crypto-trading">
                  <p className="hover:underline">Crypto Trading</p>
                </Link>
              </li>
            </ul>
          </div> */}
  
          {/* Contact Section */}
          <div className='md:text-right sm: text-center'>
            <h3 className= {`${ubuntu.className} text-xl font-semibold mb-4`}>Contact Us</h3>
            <ul className={`${raleway.className} space-y-2 `}>
              <li  href="mailto:pricedeliverytraders@gmail.com"
                  className="hover:underline">Email: pricedeliverytraders@gmail.com </li>
              <li className={`${ubuntu.className} `}>Phone: +8801711658364 </li>
              {/* <li>Location: 123 Trading St., Finance City</li> */}
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className={`${ubuntu.className} border-t border-gray-700 mt-8 pt-4 text-center text-sm `}>
          <p>
          All rights reserved by ©  <Link className='underline uppercase hover:text-blue-500' href="https://www.facebook.com/SmartBSP.Agency" target='_blank'>smartbsp</Link> .  {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
};

export default Footer;