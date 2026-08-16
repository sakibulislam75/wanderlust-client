import Link from 'next/link';
import React from 'react';
import { MdLocationPin, MdOutlineArrowOutward } from 'react-icons/md';
import { RiStarFill } from 'react-icons/ri';

const DestinationCard = ({ destination }) => {
   return (
      <div className="rounded-lg bg-white p-4 transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
         <div className="relative">
            <img
               src={destination.imageUrl}
               alt={destination.destinationName}
               className="h-48 w-full object-cover"
            />

            <span className="absolute flex items-center gap-1 right-2 top-2 rounded bg-white px-2 py-1 text-xs font-medium">
               <RiStarFill /> 4.5
            </span>
         </div>

         <div>
            <p className="text-sm flex items-center  text-gray-500 mt-2">
               <MdLocationPin /> {destination.country}
            </p>

            <div className="flex items-center justify-between my-2">
               <span>
                  {' '}
                  <h2 className="text-lg font-bold">{destination.destinationName}</h2>
                  <p className="text-xs">
                     <span className="text-[15px] font-semibold mb-2">{destination.duration}</span>
                  </p>
               </span>

               <p className="font-semibold ">
                  <span className="text-lg">
                     ${destination.price}/<span className="text-sm">person</span>
                  </span>
               </p>
            </div>

            <button className="flex items-center pt-2  text-blue-500 text-sm font-semibold uppercase tracking-wide hover: transition-all duration-300 ease-in-out hover:translate-x-1">
               <Link href={`/destinations/${destination._id}`} className="flex items-center gap-1">
                  Book Now <MdOutlineArrowOutward />
               </Link>
            </button>
         </div>
      </div>
   );
};

export default DestinationCard;
