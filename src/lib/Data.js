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

export const SingleDestinationsData = async (id, token) => {
   try {
      const res = await fetch(`http://localhost:5000/destination/${id}`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};

export const AllBookings = async () => {
   try {
      const res = await fetch('http://localhost:5000/booking', {
         cache: 'no-cache',
      });
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};
