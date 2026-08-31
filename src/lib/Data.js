export const AllDestinations = async () => {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
         cache: 'no-store',
      });
      if (!res.ok) {
         console.error('Failed to fetch destinations, status:', res.status);
         return [];
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('Failed to fetch destinations:', error);
      return [];
   }
};

export const SingleDestinationsData = async (id, token) => {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
         cache: 'no-store',
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      if (!res.ok) {
         console.error('Failed to fetch destination, status:', res.status);
         return null;
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('Failed to fetch destination:', error);
      return null;
   }
};

export const AllBookings = async (token) => {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
         cache: 'no-store',
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      if (!res.ok) {
         console.error('Failed to fetch bookings, status:', res.status);
         return [];
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.error('Failed to fetch bookings:', error);
      return [];
   }
};
