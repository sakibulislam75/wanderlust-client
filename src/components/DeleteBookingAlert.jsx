'use client';

import { authClient } from '@/lib/auth-client';
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

export function DeleteBookingAlert({ destination }) {
   const router = useRouter();
   const { _id, destinationName } = destination;
   const handleDelete = async () => {
      const { data } = await authClient.token();
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${data?.token}`,
            },
         });
         const result = await res.json();
         if (result.deletedCount > 0) {
            toast.success(`${destinationName} deleted successfully!`);
            router.push('my-bookings');
         } else {
            toast.error('Failed to delete');
         }
      } catch (error) {
         throw new Error(error);
      }
   };

   return (
      <AlertDialog>
         <Button
            size="sm"
            variant="outline"
            className="h-7 rounded-none border-red-300 px-3 text-xs text-red-500"
         >
            <TrashBin className="size-3.5" />
            Cancel
         </Button>
         <AlertDialog.Backdrop>
            <AlertDialog.Container>
               <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                     <AlertDialog.Icon status="danger" />
                     <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                     <p>
                        This will permanently cancel <strong>{destinationName}</strong> and all of
                        its data. This action cannot be undone.
                     </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                     <Button slot="close" variant="tertiary">
                        Cancel
                     </Button>
                     <Button slot="close" onClick={handleDelete} variant="danger">
                        Cancel Booking
                     </Button>
                  </AlertDialog.Footer>
               </AlertDialog.Dialog>
            </AlertDialog.Container>
         </AlertDialog.Backdrop>
      </AlertDialog>
   );
}
