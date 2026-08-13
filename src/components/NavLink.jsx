'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({ href, children }) => {
   const pathname = usePathname();
   const isActive = href === pathname;
   return (
      <Link
         href={href}
         className={`px-3 py-2 rounded-md  font-medium ${isActive ? 'text-[#13a1c3]' : 'text-gray-700 hover:text-gray-900'}`}
      >
         {children}
      </Link>
   );
};

export default NavLink;
