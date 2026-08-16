export const AllDestinations = async () => {
   try {
      const res = await fetch('http://localhost:5000/destination', {
         next: { revalidate: 60 }, // Revalidate every 60 seconds
      });
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};
