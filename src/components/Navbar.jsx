'use client';
import Image from 'next/image';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { Spinner } from '@heroui/react';

const Navbar = () => {
   const { data: session, isPending } = authClient.useSession();
   const user = session?.user;
   return (
      <div className="flex flex-col items-center justify-between gap-4 bg-white p-5 font-medium md:flex-row">
         {/* Left */}
         <ul className="order-2 flex flex-1 flex-wrap justify-center md:order-1 md:justify-start">
            <li>
               <NavLink href="/">Home</NavLink>
            </li>

            <li>
               <NavLink href="/destinations">Destinations</NavLink>
            </li>

            <li>
               <NavLink href="/my-bookings">My Bookings</NavLink>
            </li>

            <li>
               <NavLink href="/admin">Admin</NavLink>
            </li>

            <li>
               <NavLink href="/add-destination">Add Destination</NavLink>
            </li>
         </ul>

         {/* Center */}
         <div className="order-1 md:order-2">
            <Image src="/assets/wanderlast.png" alt="Logo" width={130} height={60} />
         </div>

         {/* Right */}
         {user ? (
            <div className="order-3 flex flex-1 flex-wrap justify-center items-center gap-3 md:justify-end">
               <h2 className="text-sm md:text-base font-semibold">Hello, {user.name}</h2>
               <Link href="/">
                  <Image
                     src={user?.image || '/Designer.png'}
                     alt={user?.name?.charAt(0).toUpperCase()}
                     width={40}
                     height={40}
                     className="rounded-full object-cover border border-gray-300 animate__animated animate__zoomIn"
                  />
               </Link>
               <Button onClick={async () => await authClient.signOut()} variant="danger" size="sm">
                  Log-Out
               </Button>
            </div>
         ) : (
            <ul className="order-3 flex flex-1 flex-wrap justify-center gap-3 md:justify-end">
               <li className="flex items-center gap-1">
                  <FaRegUser />
                  User
               </li>

               <li>
                  <NavLink href="/auth/signIn">Login</NavLink>
               </li>

               <li>
                  <NavLink href="/auth/signUp">Sign up</NavLink>
               </li>
            </ul>
         )}
      </div>
   );
};

export default Navbar;
