import Image from 'next/image';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
   return (
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 bg-[#ffffff] font-medium">
         <ul className="flex flex-wrap justify-center gap-4 order-2 md:order-1">
            <li>Home</li>
            <li>Destinations</li>
            <li>My Bookings</li>
            <li>Admin</li>
         </ul>

         <div className="order-1 md:order-2">
            <Image src="/assets/wanderlast.png" alt="Logo" width={130} height={60} />
         </div>

         <ul className="flex flex-wrap justify-center gap-4 order-3">
            <li className="flex items-center gap-1">
               <FaRegUser />
               User
            </li>
            <li>Login</li>
            <li>Sign up</li>
         </ul>
      </div>
   );
};

export default Navbar;
