import Banner from '@/components/Banner';
import Image from 'next/image';
import FeatureDestination from '@/components/FeatureDestination';
import WhyChooseWanderlust from '@/components/WhyChooseWanderlust';
import Review from '@/components/Review';

export default function Home() {
   return (
      <div>
         <Banner />
         <FeatureDestination />
         <WhyChooseWanderlust />
         <Review />
      </div>
   );
}
