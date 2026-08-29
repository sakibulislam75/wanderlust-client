import { Separator } from '@heroui/react';

const Banner = () => {
   return (
      <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex flex-col justify-between items-center gap-5 min-h-[600px] md:h-150">
         <div className="p-5 md:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
            <h1 className="text-4xl md:text-7xl">
               Discover Your <br /> Next Adventure
            </h1>

            <p className="text-base md:text-2xl max-w-4xl">
               Explore breathtaking destinations and create unforgettable memories with our curated
               travel experiences.
            </p>

            <div className="flex flex-col md:flex-row gap-5">
               <button className="uppercase bg-cyan-500 px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  Explore Now
               </button>

               <button className="uppercase px-5 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  View Destination
               </button>
            </div>
         </div>

         <div className="bg-white/30 flex flex-wrap md:flex-nowrap md:justify-between gap-5 w-full items-center p-4">
            <div className="px-3">
               <h3 className="text-sm">Location</h3>
               <p className="text-xs">Address, City or Zip</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div>
               <h3 className="text-sm">Date/Duration</h3>
               <p className="text-xs">Anytime/3 Days</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div>
               <h3 className="text-sm">Budget</h3>
               <p className="text-xs">$0-$3000</p>
            </div>

            <Separator variant="tertiary" orientation="vertical" />

            <div>
               <h3 className="text-sm">People</h3>
               <p className="text-xs">5-10</p>
            </div>

            <div className="bg-cyan-500 py-2 px-4">
               <h3>Search</h3>
            </div>
         </div>
      </div>
   );
};

export default Banner;
