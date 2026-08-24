import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { SingleDestinationsData } from '@/lib/Data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { BiSolidEdit } from 'react-icons/bi';
import { FaArrowLeft, FaCheck, FaEdit, FaMapMarkerAlt, FaStar, FaTrash } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import BookingCard from '@/components/BookingCard';
import { authClient } from '@/lib/auth-client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DestinationDetails = async ({ params }) => {
   const { id } = await params;
   //server side
   const { token } = await auth.api.getToken({
      headers: await headers(),
   });
   const destination = await SingleDestinationsData(id, token);

   const highlights = [
      'Luxury accommodation',
      'Local cultural experience',
      'Professional tour guide',
      'Beautiful sightseeing',
      'Travel insurance included',
      '24/7 customer support',
   ];

   return (
      <div className="mx-auto my-6 w-10/12 max-w-7xl">
         {/* Top Navigation */}

         <div className="mb-5 flex items-center justify-between">
            <Link
               href="/destinations"
               className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
            >
               <FaArrowLeft size={12} />
               Back to Destinations
            </Link>

            <div className="flex flex-wrap md: items-center gap-2">
               <EditModal destination={destination} />
               <DeleteAlert destination={destination} />
            </div>
         </div>

         {/* Hero Image */}

         <div className="overflow-hidden rounded-2xl shadow-md">
            <img
               src={destination.imageUrl}
               alt={destination.destinationName}
               className="h-[250px] w-full object-cover transition duration-700 hover:scale-105 md:h-[450px]"
            />
         </div>

         {/* Main Content */}

         <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Left Section */}

            <div>
               <div className="mb-6">
                  <p className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                     <FaMapMarkerAlt size={12} />
                     {destination.country}
                  </p>

                  <h1 className="text-4xl font-bold md:text-5xl">{destination.destinationName}</h1>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                     <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        4.9 (234 reviews)
                     </span>

                     <span>{destination.duration}</span>

                     <span className="rounded-full bg-gray-100 px-3 py-1">
                        {destination.category}
                     </span>
                  </div>
               </div>

               {/* Overview */}

               <div className="mb-8">
                  <h2 className="mb-3 text-2xl font-semibold">Overview</h2>

                  <p className="leading-8 text-gray-600">
                     {destination.description} Explore breathtaking landscapes, iconic attractions,
                     and unforgettable travel experiences.
                  </p>
               </div>

               {/* Highlights */}

               <div>
                  <h2 className="mb-4 text-2xl font-semibold">Highlights</h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                     {highlights.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-gray-600">
                           <FaCheck className="shrink-0 text-green-500" size={12} />

                           <span>{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Booking Card */}

            <BookingCard destination={destination} />
         </div>
      </div>
   );
};

export default DestinationDetails;
