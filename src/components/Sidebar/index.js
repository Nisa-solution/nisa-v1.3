import React from 'react'
import {BiHomeCircle, BiWalletAlt,BiBuilding,BiListPlus,BiCreditCard,BiBarChartAlt2,BiWrench,BiLogOut} from "react-icons/bi"

function Sidebar() {

    const menu =[
        {name:"Home", icon:<BiHomeCircle/>},
        {name:"My Wallet", icon:<BiWalletAlt/>},
        {name:"Bank", icon:<BiBuilding/>},
        {name:"Transactions", icon:<BiListPlus/>},
        {name:"Credit Rating", icon:<BiCreditCard/>},
        {name:"Analytics", icon:<BiBarChartAlt2/>},
        {name:"Settings", icon:<BiWrench/>},
        {name:"Logout", icon:<BiLogOut/>},
    ];


  return (
    <div className='h-screen border-r border-gray-200 w-64 px-9 space-y-10'>
        <div className='flex flex-row items-center'>
            <h1 className='font-bold text-2xl pt-10'>NISA</h1>
        </div>
        <div>
            <ul>
                <div className='mb-4'></div>
                {menu.map((val, index)=>{
                    return(
                        <li key={index} className="mb-7 flex flex-row items-center text-gray-700 hover:text-green-700 cursor-pointer">
                            <div className='mr-5'>{val.icon}</div>
                            <div>{val.name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
  );
}

export default Sidebar