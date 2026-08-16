import DestinationCard from '@/components/DestinationCard';
import { AllDestinations } from '@/lib/Data';
import React from 'react';

const Destination = async () => {
   const destination = await AllDestinations();
   return (
      <>
         <h1 className="w-10/12 mx-auto  text-2xl font-bold my-4 pl-3">All Destinations : </h1>
         <div className="w-10/12 mx-auto  grid grid-cols-1 md: grid-cols-3 gap-4">
            {destination.map((dest) => (
               <DestinationCard key={dest._id} destination={dest}></DestinationCard>
            ))}
         </div>
      </>
   );
};

export default Destination;
