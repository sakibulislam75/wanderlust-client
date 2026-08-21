import { AllBookings } from '@/lib/Data';
import { Button, Card } from '@heroui/react';
import { Calendar, CircleCheck, Eye, Location, Receipt, TrashBin } from '@gravity-ui/icons';
import { DeleteBookingAlert } from '@/components/DeleteBookingAlert';

const MyBookings = async () => {
   const allBookings = await AllBookings();

   return (
      <div className="w-10/12 mx-auto space-y-2 p-6 ">
         <div className="mb-7">
            <h1 className="text-4xl font-medium">My Bookings</h1>
            <p className="mt-1 text-lg text-gray-500">Manage and view your upcoming travel plans</p>
         </div>

         <div className="space-y-5">
            {allBookings.map((booking) => (
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

                        {/* <Button
                           size="sm"
                           className="h-7 rounded-none bg-cyan-600 px-3 text-xs text-white"
                        >
                           <Eye className="size-3.5" />
                           View
                        </Button> */}
                     </div>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default MyBookings;
