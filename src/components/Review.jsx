'use client';
import Image from 'next/image';

export default function Review() {
   return (
      <section className="w-11/12 mx-auto my-12">
         <h2 className="text-3xl font-bold text-left pb-1 ">What Travelers Say</h2>
         <p className="text-left text-gray-600 mb-8">Real experiences from our happy travelers</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white border broder-gray-200 shadow-md rounded-md p-6 flex flex-col md:flex-row items-center gap-6 transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg ">
               <div className="flex-1">
                  <p className="text-gray-700 italic mb-4">
                     "The Bali Trip Was Absolutely Magical!! Every Detail Was Perfectly Planned. The
                     Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."
                  </p>
                  <h4 className="font-semibold pt-13">Michael Chen</h4>
                  <span className="text-sm text-gray-500">Singapore</span>
               </div>
               <Image
                  src="/assets/person1.png"
                  alt="Michael Chen"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
               />
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-200 shadow-md rounded-md p-6 flex flex-col md:flex-row items-center gap-6 transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-lg">
               <div className="flex-1">
                  <p className="text-gray-700 italic mb-4">
                     "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were
                     Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"
                  </p>
                  <h4 className="font-semibold pt-13">Sarah Johnson</h4>
                  <span className="text-sm text-gray-500">New York, USA</span>
               </div>
               <Image
                  src="/assets/person2.png"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
               />
            </div>
         </div>
      </section>
   );
}
