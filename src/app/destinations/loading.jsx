import React from 'react';

const LoadingSpinner = () => {
   return (
      <div className="flex items-center justify-center h-[65vh]">
         <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
   );
};

export default LoadingSpinner;
