'use client';
import { FaShieldAlt, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';

export default function WhyChooseWanderlust() {
   return (
      <section className=" mx-auto my-10 bg-[#edfcff] py-18">
         <h2 className="text-3xl font-bold text-center mb-1">Why Choose Wanderlust</h2>
         <p className="text-center text-gray-600 mb-8">
            Your trusted partner for exceptional travel experiences
         </p>

         <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Safe & Secure */}
            <div className="bg-white shadow-md rounded-md p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
               <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
               <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
               <p className="text-gray-600">
                  Your safety is our priority with comprehensive travel insurance and 24/7 support.
               </p>
            </div>

            {/* Expert Guides */}
            <div className="bg-white shadow-md rounded-md p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
               <FaMapMarkedAlt className="text-green-600 text-4xl mx-auto mb-4" />
               <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
               <p className="text-gray-600">
                  Local experts who bring destinations to life with authentic cultural insights.
               </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white shadow-md rounded-md p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
               <FaHeadset className="text-purple-600 text-4xl mx-auto mb-4" />
               <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
               <p className="text-gray-600">
                  Round-the-clock customer service to assist you wherever your journey takes you.
               </p>
            </div>
         </div>
      </section>
   );
}
