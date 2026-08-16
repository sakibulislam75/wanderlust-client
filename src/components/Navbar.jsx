import Image from 'next/image';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import NavLink from './NavLink';

const Navbar = () => {
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
               <NavLink href="/bookings">My Bookings</NavLink>
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
         <ul className="order-3 flex flex-1 flex-wrap justify-center gap-3 md:justify-end">
            <li className="flex items-center gap-1">
               <FaRegUser />
               User
            </li>

            <li>
               <NavLink href="/login">Login</NavLink>
            </li>

            <li>
               <NavLink href="/signup">Sign up</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
