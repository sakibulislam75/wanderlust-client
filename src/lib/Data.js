export const AllDestinations = async () => {
   try {
      const res = await fetch('http://localhost:5000/destination', {
         cache: 'no-cache',
      });
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};

export const SingleDestinationsData = async (id) => {
   try {
      const res = await fetch(`http://localhost:5000/destination/${id}`);
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};
