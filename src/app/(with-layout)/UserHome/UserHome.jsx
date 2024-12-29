'use client' ;
import React , { useEffect } from "react";
import UpdatedBanner from '@/components/shared/userShared/Banner/UpdatedBanner';
import ContactUs from '@/components/shared/userShared/ContactUs/ContactUs';
import FAQ from '@/components/shared/userShared/FAQ/FAQ';
import TradingAccounts from '@/components/shared/userShared/TradingAccounts/TradingAccounts';

const UserHome = () => {

    
    useEffect(() => {
        // Ensure the page always starts at the top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
             {/* <Banner /> */}
             <UpdatedBanner href="#apply"/>
            <TradingAccounts/>
            <ContactUs/>
            <FAQ/>
        </>
    );
};

export default UserHome;