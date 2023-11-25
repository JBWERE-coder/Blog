import React from 'react'

const Cards = () => {
  return (
    <div className="left-0 max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md ">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-[#00df9a]">The Concept of Money</h2>
        <img src="download.jpg" alt="Author" className="h-10 w-10 rounded-full" />
        <p className="text-gray-600 italic font-bold">
          At its core, money is a medium 
         of exchange that facilitates transactions.
         It has taken various forms throughout history, 
         from barter systems to coins, paper currency, and digital currencies. 
         Money serves as a unit of account, a store of value, and a standard
          of deferred payment,
         providing a standardized way to measure value and settle debts.
         </p>
      </div>
      <div className="bg-gray-700 p-4">
        <p className="text-sm text-[#00df9a]">By Suki</p>
      </div>
    </div>
  );
};
export default Cards