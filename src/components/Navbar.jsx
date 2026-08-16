import Image from 'next/image';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import NavLink from './NavLink';

const Navbar = () => {
   return (
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 bg-[#ffffff] font-medium">
         <ul className="flex flex-wrap justify-center gap-2 order-2 md:order-1">
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

         <div className="order-1 md:order-2">
            <Image src="/assets/wanderlast.png" alt="Logo" width={130} height={60} />
         </div>

         <ul className="flex flex-wrap justify-center gap-3 order-3">
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
