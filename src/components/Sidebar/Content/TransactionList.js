import React from 'react'
import {BiListPlus} from "react-icons/bi"

function TransactionList() {
    const today = [
        {
            name:"SME credit",
            status:"Received",
            price:"N1,200,000",
        },
    ];


  return (
    <div className='mt-11'>
        <h3>Transactions</h3>
        <div>
            {today.map((val) => {
                return (
                    <div className='flex flex-row items-center border-b border-b-gray-200 py-3'>
                        <div className='h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center mr-3'>
                            <BiListPlus color='white'/>
                        </div>
                        <div className='flex-1'>
                            <div className='text-lg font-medium'>{val.name}</div>
                            <div className='text-sm'>{val.status}</div>
                        </div>
                        <div className='text-green-600'>{val.price}</div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default TransactionList