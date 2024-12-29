'use client' ;
import { useEffect } from "react";
import UserHome from "./UserHome/UserHome";


const Home = () => {
    
    useEffect(() => {
        // Ensure the page always starts at the top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto mt-[70px] '>
           <UserHome/>
        </div>
    );
};

export default Home;