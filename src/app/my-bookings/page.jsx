import { AllBookings } from '@/lib/Data';
import { Button, Card } from '@heroui/react';
import { Calendar, CircleCheck, Eye, Receipt } from '@gravity-ui/icons';
import { DeleteBookingAlert } from '@/components/DeleteBookingAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyBookings = async () => {
   const { token } = await auth.api.getToken({
      headers: await headers(),
   });

   const allBookings = await AllBookings(token);

   return (
      <div className="w-11/12 mx-auto py-6">
         <h1 className="text-3xl font-bold mb-1">My Bookings</h1>
         <p className="text-gray-600 mb-6">Manage and view your bookings</p>

         <div className="space-y-5">
            {Array.isArray(allBookings) && allBookings.length > 0 ? (
               allBookings.map((booking) => (
                  <Card key={booking._id} className="overflow-hidden rounded-lg  shadow-sm">
                     <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="sm:w-58">
                           <img
                              src={booking.imageUrl}
                              alt={booking.destinationName}
                              className="h-35 w-full object-cover"
                           />
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col px-4 py-3">
                           <div className="flex-1">
                              {/* Status */}
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
                                 <CircleCheck className="size-3" />
                                 Confirmed
                              </span>

                              {/* Destination */}
                              <h2 className="mt-1 text-lg font-semibold text-gray-900 truncate">
                                 {booking.destinationName}
                              </h2>

                              {/* Details */}
                              <div className="mt-2 space-y-1 text-sm text-gray-500">
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
                              <p className="mt-2 text-xl font-bold text-cyan-600">
                                 ${booking.price}
                              </p>
                           </div>

                           {/* Actions */}
                           <div className="flex items-center justify-end  ">
                              <DeleteBookingAlert destination={booking} />
                           </div>
                        </div>
                     </div>
                  </Card>
               ))
            ) : (
               <div className="rounded-md border border-dashed border-gray-300 py-12 text-center">
                  <p className="text-sm text-gray-500">You have no bookings yet.</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default MyBookings;
