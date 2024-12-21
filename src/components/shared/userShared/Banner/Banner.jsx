'use client' ;
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import banner1 from '@/assests/images/Banner-1.jpeg' ;
import banner2 from '@/assests/images/Banner-2.jpeg' ;
import banner3 from '@/assests/images/Banner-3.jpeg' ;
import banner4 from '@/assests/images/Banner-2.jpeg' ;

const Banner = () => {

    const [currentBanner, setCurrentBanner] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Calculate the next banner index
        const nextBanner = (currentBanner % 4) + 1;
        setCurrentBanner(nextBanner);
      }, 2000);
      return () => clearInterval(intervalId);
    }, [currentBanner]);

    return (
<div>
      {/* bannerImages section  */}
      <div>
      <div className='relative'>
        <Image
          className="relative bannerImage lg:w-full lg:h-[600px] sm: h-[500px] bg-[#5A287F]"
          src={banner1}
          alt=""
          style={{ display: currentBanner === 1 ? "block" : "none" }}
        />
        </div>
        <div className='absolute w-full h-full bg-black inset-0'/>
        </div>
      <div>
        <Image
          className="bannerImage lg:w-full lg:h-[600px]  sm: h-[500px] bg-[#5A287F]"
          src={banner2}
          alt=""
          style={{ display: currentBanner === 2 ? "block" : "none" }}
        />
      </div>
      <div>
        <Image
          className="bannerImage lg:w-full lg:h-[600px]  sm: h-[500px] bg-[#5A287F]"
          src={banner3}
          alt=""
          style={{ display: currentBanner === 3 ? "block" : "none" }}
        />
      </div>
      <div>
        <Image
          className="bannerImage lg:w-full lg:h-[600px]  sm: h-[500px] bg-[#5A287F]"
          src={banner4}
          alt=""
          style={{ display: currentBanner === 4 ? "block" : "none" }}
        />
      </div>
        </div>
    );
};

export default Banner;