import { AllDestinations } from '@/lib/Data';
import React from 'react';
import DestinationCard from './DestinationCard';

const FeatureDestination = async () => {
   const destination = await AllDestinations();
   return (
      <>
         <h1 className="pl-7 mx-auto text-3xl font-bold  my-5 pl-3 pt-2">Feature Destinations :</h1>
         <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.slice(0, 3).map((dest) => (
               <DestinationCard key={dest._id} destination={dest} />
            ))}
         </div>
      </>
   );
};

export default FeatureDestination;
