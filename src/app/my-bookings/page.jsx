import { AllBookings } from '@/lib/Data';
import { Button, Card } from '@heroui/react';
import { Calendar, CircleCheck, Eye, Location, Receipt, TrashBin } from '@gravity-ui/icons';
import { DeleteBookingAlert } from '@/components/DeleteBookingAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyBookings = async () => {
   const { token } = await auth.api.getToken({
      headers: await headers(),
   });
   const allBookings = await AllBookings(token);

   return (
      <div className="space-y-5">
         {Array.isArray(allBookings) ? (
            allBookings.map((booking) => (
               <Card
                  key={booking._id}
                  className="flex flex-row overflow-hidden shadow-md rounded-md"
               >
                  {/* Image */}
                  <img
                     src={booking.imageUrl}
                     alt={booking.destinationName}
                     className="m-3 h-32 w-56 shrink-0 object-cover"
                  />

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-3 pr-3">
                     <div>
                        {/* Status */}
                        <div className="mb-1">
                           <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-medium text-green-700">
                              <CircleCheck className="size-3" />
                              Confirmed
                           </span>
                        </div>

                        {/* Destination */}
                        <h2 className="text-xl font-medium text-gray-900">
                           {booking.destinationName}
                        </h2>

                        {/* Details */}
                        <div className="mt-1 space-y-1 text-xs text-gray-500">
                           <p className="flex items-center gap-1.5">
                              <Calendar className="size-3.5" />
                              Departure: {booking.departureDate}
                           </p>
                           <p className="flex items-center gap-1.5">
                              <Receipt className="size-3.5" />
                              Booking ID: {booking._id}
                           </p>
                        </div>

                        {/* Price */}
                        <p className="mt-1 text-2xl font-medium text-cyan-600">${booking.price}</p>
                     </div>

                     {/* Actions */}
                     <div className="flex justify-end gap-2">
                        <DeleteBookingAlert destination={booking} />
                     </div>
                  </div>
               </Card>
            ))
         ) : (
            <p className="text-red-500">Unauthorized or no bookings found</p>
         )}
      </div>
   );
};

export default MyBookings;
