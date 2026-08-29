export const AllDestinations = async () => {
   try {
      const res = await fetch(`${process.env.SERVER_URL}/destination`);
      const data = await res.json();
      return data;
   } catch (error) {
      throw new Error('Failed to fetch destinations:', error);
   }
};

export const SingleDestinationsData = async (id, token) => {
   try {
      const res = await fetch(`${process.env.SERVER_URL}/destination/${id}`, {
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

export const AllBookings = async (token) => {
   try {
      const res = await fetch(`${process.env.SERVER_URL}/booking`, {
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
