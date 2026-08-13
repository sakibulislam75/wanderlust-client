'use client';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center h-[82vh] bg-gray-50 text-center px-6">
         {/* Error Code */}
         <h1 className="text-9xl font-extrabold text-[#13a1c3] animate__animated animate__fadeInDown">
            404
         </h1>

         {/* Message */}
         <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800 animate__animated animate__fadeIn">
            Page Not Found
         </h2>
         <p className="mt-2 text-gray-600 max-w-md animate__animated animate__fadeInUp">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
         </p>

         {/* Back to Home Button */}
         <Link href="/">
            <Button
               as="a"
               href="/"
               color="primary"
               size="lg"
               className="mt-6 animate__animated animate__pulse"
            >
               Back to Home
            </Button>
         </Link>
      </div>
   );
}