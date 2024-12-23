import React from 'react';
import { Ubuntu } from "next/font/google";
import { Raleway } from "next/font/google";
import icon1 from '@/assests/images/medal.png' ;
import icon2 from '@/assests/images/presentation.png' ;
import icon3 from '@/assests/images/demonstration.png' ;
import icon4 from '@/assests/images/islam.png' ;

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal"],
});

const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

const trandingData =[
    {
        icon: icon1,
        title: "Professional Account",
        disc: "Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms"
    },
    {
        icon: icon2,
        title: "Overview Account",
        disc: "The primary feature of a trading overview account is its ability to aggregate information from multiple accounts "
    },
    {
        icon: icon3,
        title: "Demo Account",
        disc: "Trading demo accounts are particularly valuable for novice traders who are new to the world of investing."
    },
    {
        icon: icon4,
        title: "Islamic Account",
        disc: "Islamic accounts also adhere to ethical guidelines that prohibit trading certain financial instruments deemed"
    },
]

const TradingAccounts = () => {
    return (
        <div className='mt-20'>
            <h1 className={`${ubuntu.className} text-3xl font-bold text-center mb-10`}>Trading Accounts</h1>
            <div className={`${ubuntu.className}`}>
{
    trandingData.map(({icon, title, disc}, index) => {
<div>
    <h1>{title}</h1>
    <p>{disc}</p>
</div>
    })
}
            </div>
        </div>
    );
};

export default TradingAccounts;