import { Spinner } from '@heroui/react';

const LoadingSpinner = () => {
   return (
      <div className="flex h-[65vh] items-center justify-center">
         <Spinner size="lg" />
      </div>
   );
};

export default LoadingSpinner;
