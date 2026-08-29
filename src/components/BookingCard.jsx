'use client';
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import React, { use, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookingCard = ({ destination }) => {
   const { _id } = destination;
   const [departureDate, setDepartureDate] = useState(null);
   const { data: session, isPending } = authClient.useSession();
   const user = session?.user;
   if (!session) {
      window.location.assign('/'); // logout হলে home এ redirect
      return null; //stop rerender
   }
   console.log(user, destination);
   console.log(new Date(departureDate));
   const handleBooking = async () => {
      const bookingDetails = {
         userID: user.id,
         name: user.name,
         email: user.email,

         ...destination,
         //  destinationID: destination._id,
         //  destinationName: destination.destinationName,
         //  price: destination.price,
         //  country: destination.country,
         //  category: destination.category,
         //  departureDate: new Date(departureDate),
      };
      //client side
      const { data } = await authClient.token();
      try {
         const res = await fetch(`${process.env.SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${data?.token}`,
            },
            body: JSON.stringify(bookingDetails),
         });
         const result = await res.json();
         if (result.insertedId) {
            toast.success('Booking complete successfully');
         } else {
            toast.error('Failed to complete booking');
         }
      } catch (error) {
         toast.error('Failed to complete booking');
      }
   };

   return (
      <div>
         <div>
            <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-lg">
               <p className="text-sm text-gray-500">Starting from</p>

               <h2 className="text-4xl font-bold text-cyan-500">${destination.price}</h2>

               <p className="mb-5 text-sm text-gray-500">per person</p>
               <DateField onChange={setDepartureDate} className="" name="date">
                  <Label>Departure Date</Label>
                  <DateField.Group>
                     <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                     </DateField.Input>
                  </DateField.Group>
               </DateField>

               <Button onClick={handleBooking} color="primary" className="mt-4 w-full">
                  Book Now →
               </Button>

               <div className="mt-6 space-y-3 border-t pt-5 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                     <FaCheck className="text-green-500" size={12} />
                     Free cancellation up to 7 days
                  </p>

                  <p className="flex items-center gap-2">
                     <FaCheck className="text-green-500" size={12} />
                     Travel insurance included
                  </p>

                  <p className="flex items-center gap-2">
                     <FaCheck className="text-green-500" size={12} />
                     24/7 customer support
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingCard;
