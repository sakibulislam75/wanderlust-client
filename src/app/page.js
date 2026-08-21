import Banner from '@/components/Banner';
import Image from 'next/image';
import FeatureDestination from '@/components/FeatureDestination';
import WhyChooseWanderlust from '@/components/WhyChooseWanderlust';

export default function Home() {
   return (
      <div>
         <Banner />
         <FeatureDestination />
         <WhyChooseWanderlust />
      </div>
   );
}
