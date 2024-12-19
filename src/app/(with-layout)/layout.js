import React from "react";
import Navbar from "@/components/shared/userShared/Navbar/Navbar";
import Footer from "@/components/shared/userShared/Footer/Footer";

const UserLayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default UserLayout;
