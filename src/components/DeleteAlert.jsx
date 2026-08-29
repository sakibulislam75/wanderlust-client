'use client';

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

export function DeleteAlert({ destination }) {
   const router = useRouter();
   const { _id, destinationName } = destination;
   const handleDelete = async () => {
      const { data } = await authClient.token();
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${data?.token}`,
            },
         });
         if (res.ok) {
            router.push('/destinations');
            toast.success(`${destinationName} deleted successfully!`);
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
            variant="outline"
            size="sm"
            className="rounded-none border-red-300 px-4 text-sm text-red-500"
         >
            <MdDeleteOutline />
            Delete
         </Button>
         <AlertDialog.Backdrop>
            <AlertDialog.Container>
               <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                     <AlertDialog.Icon status="danger" />
                     <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                     <p>
                        This will permanently delete <strong>{destinationName}</strong> and all of
                        its data. This action cannot be undone.
                     </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                     <Button slot="close" variant="tertiary">
                        Cancel
                     </Button>
                     <Button slot="close" onClick={handleDelete} variant="danger">
                        Delete Project
                     </Button>
                  </AlertDialog.Footer>
               </AlertDialog.Dialog>
            </AlertDialog.Container>
         </AlertDialog.Backdrop>
      </AlertDialog>
   );
}
