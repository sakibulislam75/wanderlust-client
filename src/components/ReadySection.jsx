'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ReadySection() {
   return (
      <section className="relative mx-auto  flex min-h-[360px] w-full  items-center justify-center overflow-hidden  bg-[url('/assets/CTA.png')] bg-cover bg-center px-6 py-13 text-center my-13">
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/60" />

         {/* Decorative Blur */}
         <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
         <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />

         {/* Content */}
         <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
               ✈️ Your next adventure awaits
            </span>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
               Ready to Start Your <span className="text-blue-400">Journey?</span>
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
               Join thousands of travelers who have discovered unforgettable destinations and
               amazing experiences with us.
            </p>
            <Link href="/destinations">
               <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/30">
                  BOOK YOUR TRIP
                  <ArrowRight
                     size={18}
                     className="transition-transform duration-300 group-hover:translate-x-1"
                  />
               </button>
            </Link>
         </div>
      </section>
   );
}
